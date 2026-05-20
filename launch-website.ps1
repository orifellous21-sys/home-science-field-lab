$ErrorActionPreference = "Stop"

$root = Split-Path -Parent $MyInvocation.MyCommand.Path
$port = 5173
$url = "http://127.0.0.1:$port/"
$serverPath = Join-Path $root "server.js"
$codexNode = "C:\Users\zivfe\AppData\Local\OpenAI\Codex\bin\node.exe"

function Test-Site {
  try {
    $response = Invoke-WebRequest -UseBasicParsing $url -TimeoutSec 2
    return $response.StatusCode -eq 200
  }
  catch {
    return $false
  }
}

if (-not (Test-Site)) {
  $nodePath = if (Test-Path $codexNode) { $codexNode } else { "node.exe" }
  Start-Process -WindowStyle Hidden -FilePath $nodePath -ArgumentList @($serverPath) -WorkingDirectory $root

  $ready = $false
  for ($i = 0; $i -lt 30; $i++) {
    Start-Sleep -Milliseconds 300
    if (Test-Site) {
      $ready = $true
      break
    }
  }

  if (-not $ready) {
    throw "The website server did not start. Make sure Node.js is available, then run this launcher again."
  }
}

Start-Process $url
