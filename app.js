const sections = document.querySelectorAll('.section');
const sectBtns = document.querySelectorAll('.controls');
const sectBtn = document.querySelectorAll('.control');
const allSections = document.querySelectorAll('.main-content');

console.log(allSections[0])
function PageTransition() {

    //Set the Theme of the Page
    let theme = localStorage.getItem('theme')
    if(theme == null){
        setTheme('light')
    }else{
        setTheme(theme)
    }

    // Button click and avtive classs
    for (let i = 0; i < sectBtn.length; i++) {
        sectBtn[i].addEventListener('click', function(){
            let currentBtn = document.querySelectorAll('.active-btn');
            currentBtn[0].classList.remove('active-btn');
            this.classList.add('active-btn');
        })
    }

    //Making Sections Active
    allSections[0].addEventListener('click', (e) => {
        const id = e.target.dataset.id;
        if(id) {
            sectBtn.forEach((btn) => {
                btn.classList.remove('active');
            })
            e.target.classList.add('active');

            sections.forEach((section) => {
                section.classList.remove('active');
            })

            const element = document.getElementById(id);
            element.classList.add('active');
        }
    })

    // Toggle Theme Color
    let themeBtns = document.getElementsByClassName('theme-btn');
    
    for (let i = 0; i < themeBtns.length;i++)
    {
        themeBtns[i].addEventListener('click',function(){
            let mode = this.dataset.mode
            setTheme(mode)
        })
    }
}

function setTheme(mode){
	if(mode == 'blue'){
		document.getElementById('theme-style').href = 'style/style.css'
	}

	if(mode == 'light'){
		document.getElementById('theme-style').href = 'style/white.css'
	}

	if(mode == 'green'){
		document.getElementById('theme-style').href = 'style/green.css'
	}

	if(mode == 'purple'){
		document.getElementById('theme-style').href = 'style/purple.css'
	}

	localStorage.setItem('theme', mode)
}

PageTransition();