

using System.Diagnostics;
using Microsoft.OpenApi.Models;
using Supabase.Realtime.PostgresChanges;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen(sgo =>
{
    sgo.SwaggerDoc("v1", new OpenApiInfo { Title = "ZonActiva API", Description = "Connecting with your arounds", Version = "v1" });
});

// Console.Write(builder.Configuration.AsEnumerable());

builder.Services.AddSingleton(async sp =>
{
    var supabase = new Supabase.Client("https://tlerhfbhwgegtdhbhtlf.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRsZXJoZmJod2dlZ3RkaGJodGxmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDYwOTc4NTQsImV4cCI6MjA2MTY3Mzg1NH0.407jBA_JUJIp4eq97iRLSruVUPdh4vHucWDsDnzFl_8");
    await supabase.InitializeAsync();

    var channel = supabase.Realtime.Channel("realtime", "public", "*");
    channel.AddPostgresChangeHandler(PostgresChangesOptions.ListenType.All, (sender, change) =>
    {
        Debug.WriteLine(change.Event);
        Debug.WriteLine(change.Payload);
    });
    await channel.Subscribe();

    return supabase;
});

builder.Services.AddControllers();
builder.Services.AddRepositories();

var app = builder.Build();

if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI(c =>
    {
        c.SwaggerEndpoint("/swagger/v1/swagger.json", "ZonActiva API V1");
    });
}

app.MapControllers();
app.Run();
