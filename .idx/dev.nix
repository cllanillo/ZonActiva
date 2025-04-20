# Learn more: https://firebase.google.com/docs/studio/customize-workspace
{ pkgs, ... }: {
  channel = "stable-24.05";
  # Use https://search.nixos.org/packages to find packages
  packages = [
    pkgs.bun
    pkgs.nodejs_20
    pkgs.nodePackages.firebase-tools
    pkgs.yarn
  ];
  env = { };
  idx = {
    # Search for the extensions https://open-vsx.org/
    extensions = [
      "MrOnline.turbo-console-log-openvsx"
    ];
    previews = {
      enable = true;
      previews = {
        web = {
          command = [ "npm" "run" "dev" "--" "--port" "$PORT" "--host" "0.0.0.0" ];
          manager = "web";
        };
      };
    };
    workspace = {
      onCreate = {
        bun-install = "bun install";
        default.openFiles = [ ".idx/dev.nix" "README.md" ];
      };
      onStart = { };
    };
  };
}
