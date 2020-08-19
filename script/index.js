function OnLoadServicesSection()
{
    let items = document.getElementById('services').getElementsByClassName('grid')[0].getElementsByClassName('item');
    for (let item of items) {
        let btn = item.getElementsByClassName('btn')[0];
        let icon = item.getElementsByClassName('item-img')[0];
        btn.addEventListener('mouseover', e => {
            let b = e.srcElement;
            b.parentElement.classList.add('is-hover');
            b.classList.add('is-hover');
            icon.classList.add('is-hover');
        });
        btn.addEventListener('mouseleave', e=> {
            let b = e.srcElement;
            b.parentElement.classList.remove('is-hover');
            b.classList.remove('is-hover');
            icon.classList.remove('is-hover');
        });
    }
}

function ShowLatestProjects(selected_filter)
{
    let text = selected_filter.textContent;
    let views = document.getElementById('portfolio').getElementsByClassName('preview');
    let type_name;
    if (text == 'all') {
        for (let v of views) {
            v.style.visibility = 'visible';
        }
        return;
    } else if (text == 'web design') type_name = 'type-web-design';
    else if (text == 'ui/ux design') type_name = 'type-ui-ux-design';
    else type_name = 'type-mockups';

    for (let v of views) {
        if (v.className.indexOf(type_name) != -1) v.style.visibility = 'visible';
        else v.style.visibility = 'hidden';
    }
}

function OnLoadPortfolioSection()
{
    let filters = document.getElementById('portfolio').getElementsByClassName('filter-view')[0].getElementsByClassName('filters')[0].children;
    for (let filter of filters) {
        filter.addEventListener('click', e => {
            for (let f of filters) {
                f.classList.remove('active');
            }
            e.srcElement.classList.add('active');
            ShowLatestProjects(e.srcElement);
        });
    }

    let views = document.getElementById('portfolio').getElementsByClassName('filter-view')[0].getElementsByClassName('preview');
    for (let v of views) {
        v.addEventListener('mouseover', e => {
            v.children[1].style.visibility = 'visible';
            v.children[0].style.filter = 'brightness(10%)';
        });

        v.addEventListener('mouseleave', e => {
            v.children[1].style.visibility = 'hidden';
            v.children[0].style.filter = 'unset';
        });
    }
}

function OnLoadEvents()
{
    OnLoadServicesSection();
    OnLoadPortfolioSection();
}