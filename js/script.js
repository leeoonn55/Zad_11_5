// var outInfo = document.getElementById('infoo');
// outInfo.innerHTML = phone1.printInfo();


function Button(text) {
    this.text = text || 'Hello';
}

Button.prototype = {
    create: function () {
        var self = this;
        this.element = document.createElement('button');
        this.element.innerText = this.text;
        this.element.addEventListener('click', function () {
            alert(self.text);
        });
        document.body.appendChild(this.element);
    }
}

var btn1 = new Button('Hello!!');
var btn2 = new Button('To nawet działa :-) !!');

btn2.create();

