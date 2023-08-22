import os
from flask import Flask, jsonify, request, abort, send_from_directory
from flask_cors import CORS
from flask_sqlalchemy import SQLAlchemy
from datetime import datetime


app = Flask(__name__)
CORS(app, resources={r"/blog/adicionar": {"origins": "http://localhost:3000"}})

basedir = os.path.abspath(os.path.dirname(__file__))

app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///' + \
    os.path.join(basedir, 'blog.db')

# 'sqlite:///F:/Github Desktop/Principal/flask-blog/server/blog.db'
db = SQLAlchemy(app)


class BlogPost(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    content = db.Column(db.Text)
    title = db.Column(db.String(50))
    subtitle = db.Column(db.String(50))
    author = db.Column(db.String(50))
    date_posted = db.Column(db.DateTime, default=datetime.utcnow)


@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def serve(path):
    print(path)
    if path != "" and os.path.exists("frontend/build/" + path):
        return send_from_directory("frontend/build", path)
    else:
        return send_from_directory("frontend/build", 'index.html')


@app.route('/home', methods=['GET'])
def home():
    return jsonify(message='Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.')

# ========== User API ===========================


@app.route('/api/cadastrar')
def criarUsuario():
    return jsonify(message='Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.')


@app.route('/api/atualizar')
def atualizarUsuario():
    return jsonify(message='Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.')


@app.route('/api/deletar')
def deletarUsuario():
    return jsonify(message='Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.')

# ======== Blog Api =================================


@app.route('/blog/<int:post_id>')
def getPostByID(post_id):
    # post = BlogPost.query.filter_by(id=post_id).one()
    post = BlogPost.query.get(post_id)
    if post is None:
        abort(404)

    print(post)
    post_data = {
        'id': post.id,
        'title': post.title,
        'subtitle': post.subtitle,
        'author': post.author,
        'content': post.content,
        'date_posted': post.date_posted.strftime('%Y-%m-%d %H:%M:%S')
    }
    return jsonify(post_data)


@app.route('/blog/adicionar', methods=['POST'])
def adicionarPost():
    data = request.get_json()
    print("\n DATA: ", data)
    title = data.get('title')
    subtitle = data.get('subtitle')
    author = data.get('author')
    content = data.get('content')

    # title = request.form['title']
    # subtitle = request.form['subtitle']
    # author = request.form['author']
    # content = request.form['content']

    new_post = BlogPost(title=title, subtitle=subtitle,
                        author=author, content=content)
    db.session.add(new_post)
    db.session.commit()

    response_data = {
        'message': f"Received: Title={title}, Subtitle={subtitle}, Author={author}, Content={content}"
    }

    return jsonify(response_data), 201


@app.route('/blog/editar', methods=['POST'])
def editarPost():
    return 'Hello, addpost!!!'
    # title = request.form['title']
    # subtitle = request.form['subtitle']
    # author = request.form['author']
    # content = request.form['content']

# @app.route('/post/<int:post_id>')


@app.route('/blog/deletar', methods=['POST'])
def deletarPost():
    return 'Hello, addpost!!!'
    # title = request.form['title']
    # subtitle = request.form['subtitle']
    # author = request.form['author']
    # content = request.form['content']


if __name__ == '__main__':
    with app.app_context():
        db.create_all()
    app.run(debug=True)
