# from flask import Flask, render_template, request, redirect, url_for
import os
from flask import Flask, send_from_directory, jsonify
from flask_cors import CORS
# from flask_sqlalchemy import SQLAlchemy
# from datetime import datetime

app = Flask(__name__)
CORS(app)


# @app.route('/')
# def index():
#     return 'Hello, World!!!'


# @app.route('/about')
# def about():
#     return 'Hello, about!!!'


# @app.route('/post/<int:post_id>')
# def post(post_id):
#     return 'Hello, post!!!'


# @app.route('/add')
# def add():
#     return 'Hello, add!!!'


# @app.route('/addpost', methods=['POST'])
# def addpost():
#     return 'Hello, addpost!!!'
# title = request.form['title']
# subtitle = request.form['subtitle']
# author = request.form['author']
# content = request.form['content']


# Serve the React app


@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def serve(path):
    print(path)
    if path != "" and os.path.exists("frontend/build/" + path):
        return send_from_directory("frontend/build", path)
    else:
        return send_from_directory("frontend/build", 'index.html')


@app.route('/api/hello', methods=['GET'])
def hello():
    return jsonify(message='Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.')


if __name__ == '__main__':
    app.run(debug=True)
