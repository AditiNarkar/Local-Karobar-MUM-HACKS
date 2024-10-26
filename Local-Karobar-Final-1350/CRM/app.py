from flask import Flask, render_template, request, redirect, url_for

app = Flask(__name__)

# In-memory database (dictionary)
contacts = {}

@app.route('/')
def index():
    return render_template('index.html', contacts=contacts)

@app.route('/add_contact', methods=['GET', 'POST'])
def add_contact():
    if request.method == 'POST':
        name = request.form['name']
        email = request.form['email']
        phone = request.form['phone']
        contacts[name] = {'Email': email, 'Phone': phone}
        return redirect(url_for('index'))
    return render_template('add_contact.html')

@app.route('/edit_contact/<name>', methods=['GET', 'POST'])
def edit_contact(name):
    if request.method == 'POST':
        email = request.form['email']
        phone = request.form['phone']
        contacts[name] = {'Email': email, 'Phone': phone}
        return redirect(url_for('index'))
    contact = contacts.get(name)
    return render_template('add_contact.html', contact=contact, name=name)

@app.route('/delete_contact/<name>', methods=['POST'])
def delete_contact(name):
    contacts.pop(name, None)
    return redirect(url_for('index'))

if __name__ == '__main__':
    app.run(debug=True)
