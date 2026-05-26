from pathlib import Path

from flask import Flask, send_from_directory

app = Flask(__name__, static_folder=None)
BASE_DIR = Path(__file__).resolve().parent


@app.route("/")
def home():
    """Serve the Vanguard C4 marketing homepage."""
    return send_from_directory(BASE_DIR, "index.html")


@app.route("/<path:filename>")
def static_files(filename):
    """Serve repository-level static assets used by the marketing site."""
    return send_from_directory(BASE_DIR, filename)


if __name__ == "__main__":
    app.run(host="0.0.0.0", port=8000)
