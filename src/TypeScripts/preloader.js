import '../scss/preloader.scss'
import '../scss/index.scss'
//
let install = (node, container) => {
    //Создаем новый корневой элемент с указанным тегом
    const element = document.createElement(node.tag)

    //Устанавливаем переданные атрибуты
    for (const key in node.attributes) {
        element.setAttribute(key, node.attributes[key])
    }

    //Если дочерний элемент является строкой то вставляем текст в эемент
    if (typeof node.children === 'string') {
        element.textContent = node.children
    }
    //Иначе рекурсивно проходим по дочерним элементам в качестве корневых
    else {
        node.children.forEach((child) => {
            install(child, element)
        })
    }

    //Вставляем полученный элемент в переданный контейнер
    container.appendChild(element)

    //Создаем поле $element у корневого элемента и записываем туда
    node.$element = element
}

let unInstall = (node) => {
    node.$element.parentNode.removeChild(node.$element)
}

const initialNode = {
    tag: 'div',
    attributes: { class: 'preloader' },
    children: [
        {
            tag: 'div',
            attributes: { class: 'box' },
            children: [
                {
                    tag: 'div',
                    attributes: { class: 'cat' },
                    children: [
                        {
                            tag: 'div',
                            attributes: { class: 'cat__body' },
                            children: '',
                        },
                        {
                            tag: 'div',
                            attributes: { class: 'cat__body' },
                            children: '',
                        },
                        {
                            tag: 'div',
                            attributes: { class: 'cat__tail' },
                            children: '',
                        },
                        {
                            tag: 'div',
                            attributes: { class: 'cat__head' },
                            children: '',
                        },
                    ],
                },
            ],
        },
    ],
    $element: document.getElementById('preloader'),
}

let NEWnode = {
    tag: 'div',
    attributes: { id: 'app' },
    children: 'app',
}

let upd = () => {
    // for (let item of [1, 2, 3, 4, 5]) {
    //     NEWnode.children.push({
    //         tag: 'p',
    //         attributes: { class: 'desc', id: 'in' },
    //         children: ` ${item}`,
    //     })
    // }
    // NEWnode.children[0].children = 'jj'
    patch(initialNode, NEWnode)
}

//И
let patch = (currentNode, newNode) => {
    /*
    случаи:

    */

    install(newNode, currentNode.$element.parentNode)
    unInstall(currentNode)
}

setTimeout(upd, 3000)

/*
1 загружается прелоудер и показывается, в это время загружается предсобранная страница в VDOM который хранится в приложении
2 загружаются данные с сервера, вставляюются в VDOM и говорит что данные VDOM изменились, движок отрисовывает заданные изменения
3 Пользователь может:
- переходить по ссылкам (изменяется содержимое контейнера и адрес в истории браузера)
- заполнять формы и нажимать на кнопки, события мыши
- 
*/
