window.onload = () => {

    let [...linkChange] = document.getElementsByTagName('a');
    linkChange.forEach(elementLink => { elementLink.innerHTML = `Return to homepage (this is <span class=text-success>revised</span> LINK tag in HEADER)` });

    let [...navChange] = document.getElementsByTagName('nav');
    navChange.forEach(elementNav => { elementNav.innerHTML = `This is text in  <span class=text-success>revised</span> NAV tag in HEADER` });

    let [...headerChange] = document.getElementsByTagName('h2');
    headerChange.forEach(elementHeader => { elementHeader.innerHTML = `<span class=text-success>Task 1</span>` })

    let [...textChange] = document.getElementsByClassName(`mainText`);
    textChange.forEach(elementText => { elementText.innerHTML = `Змінений <span class=text-success>html</span> документ, в якому є змінені теги <span class=text-success>header</span>, <span class=text-success>footer</span>, <span class=text-success>nav</span>, <span class=text-success>ul</span> список на 5 елементв  і змінити там текст за допомогою <span class=text-success>innerHtml</span>` })

    let [...liChange] = document.getElementsByClassName (`liELements`);
    let i = 0;
    liChange.forEach(elementLi => { elementLi.innerHTML = `Це <span class=text-success>змінений</span> LI-${++i} тег в секції MAIN` })

    let [...footerChange] = document.getElementsByTagName(`footer`);
    footerChange.forEach(elemtnFooter => { elemtnFooter.innerHTML = `Це <span class=text-success>змінений</span> текст в тезі FOOTER` })
}