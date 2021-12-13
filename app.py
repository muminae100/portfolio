from flask import Flask, render_template

app = Flask(__name__)


@app.route("/")
def index():
    return render_template('index.html')


@app.route("/about")
def about():
    return render_template('about.html')


@app.route("/portfolio")
def portfolio():
    return render_template('portfolio.html')


@app.route("/project")
def project():
    return render_template('single_project.html')

@app.route("/contact")
def contact():
    return render_template('contact.html')

@app.errorhandler(404)
def page_not_found(e):
    return render_template('404.html'), 404

@app.errorhandler(500)
def internal_error(error):
    return render_template('505.html')

if __name__ == '__main__':
    app.run(debug=True)