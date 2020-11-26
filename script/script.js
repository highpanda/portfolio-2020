window.onload = function(){


    (function() {
        // Hide/Show header on scroll
        // This is inspired by "Hide/Show header on scroll down/up using pure javascript"
        // by SYSLEAF [https://www.sysleaf.com/js-toggle-header-on-scroll/]

        let yPosOld = 0;
        let scrollBuffer = 20;
        let yPosCurrent = 0;
        let ticking = false;

        let navSelector = '[data-js="nav"]';
        let elem_header = document.querySelector(navSelector);

        let selector_navPanel = '[data-js-nav="panel"]';
        let elem_navPanel = document.querySelector(selector_navPanel);

        const breakpoints = {
            mobile: '430'
        }

        const classes = {
            pinned: 'js-nav--visible',
            unpinned: 'js-nav--hidden',
            light: 'js-nav--light',
            dark: 'js-nav--dark',
            hidden: 'js-hidden',
            extended: 'js-nav--extended',
            mobileNavPanelActive: 'js-mobileNav--active',
            mobileNavPanelInactive: 'js-mobileNav--inactive',
            secondaryNavVisible: 'js-secondaryNav--visible',
            blur: 'js-blur'
        };


        document.addEventListener('scroll', function(event){

            if (window.innerWidth > breakpoints.mobile){
                function update() {
                    if (yPosCurrent < yPosOld) {
                        if (elem_header.classList.contains(classes.unpinned)) {
                            elem_header.classList.remove(classes.unpinned);
                            elem_header.classList.add(classes.pinned);
                        }
                    } else if (yPosCurrent > yPosOld && yPosCurrent > scrollBuffer) {
                        if (elem_header.classList.contains(classes.pinned) || !elem_header.classList.contains(classes.unpinned)) {
                            elem_header.classList.remove(classes.pinned);
                            elem_header.classList.add(classes.unpinned);
                        }
                    }
                    yPosOld = yPosCurrent;
                    ticking = false;
                }

                yPosCurrent = window.pageYOffset;

                if (!ticking) {
                    requestAnimationFrame(update);
                }
                ticking = true;
            }



            //changeNavColour();
        });


        // Hide/show the secondary nav on hover
        // referenced this: https://javascript.info/mousemove-mouseover-mouseout-mouseenter-mouseleave

        let parentSelector = '[data-js-nav="parent"]';
        let childSelector = '[data-js-nav="child"]';

        let blurSelector = '[data-js-nav="blur"]';



        let parents = document.querySelectorAll(parentSelector);
        let elem_blur = document.querySelector(blurSelector);
        let elem_nav = document.querySelector(navSelector);

        elem_navPanel.onmouseover = function(event){
            // if (!elem_blur.classList.contains(classes.blur)){
            //     elem_blur.classList.add(classes.blur);
            // }

            if (!elem_nav.classList.contains(classes.extended)){
                elem_nav.classList.add(classes.extended);
            }

            // set the nav colour to light
           // setNavColour("dark");
        }
        elem_navPanel.onmouseout = function(event){
            // if (elem_blur.classList.contains(classes.blur)){
            //     elem_blur.classList.remove(classes.blur);
            // }

            if(elem_nav.classList.contains(classes.extended)){
                elem_nav.classList.remove(classes.extended);
            }
            // recalculate the correct nav colour
            //setNavColour("light");
           // changeNavColour();
        }

        parents.forEach(parent => {
            parent.onmouseover = function(event){

                let elem_child = parent.querySelector(childSelector);

                if (!elem_child.classList.contains(classes.secondaryNavVisible)) {
                    elem_child.classList.add(classes.secondaryNavVisible);
                }

            }

            parent.onmouseout = function(event) {

                let elem_child = parent.querySelector(childSelector);

                if (elem_child.classList.contains(classes.secondaryNavVisible)) {
                    elem_child.classList.remove(classes.secondaryNavVisible);
                }
            }

        })


        // MOBILE NAVIGATION

        const selectors = {
            navMenuButton: '[data-js-navMobile="menuButton"]',
            mobileNavMenuPanel: '[data-js-navMobile="mobileNavPanel"]',
            navMenuLinks: '[data-js-nav="links"]',
            mobileNavSearchButton: '[data-js-navMobile="search"]',
            mobileNavCloseButton: '[data-js-navMobile="closeButton"]'
        }

        const elem = {
            navMenuButton: document.querySelector(selectors.navMenuButton),
            navMenuLinks: document.querySelector(selectors.navMenuLinks),
            mobileNavMenuPanel: document.querySelector(selectors.mobileNavMenuPanel),
            mobileNavSearchButton: document.querySelector(selectors.mobileNavSearchButton),
            mobileNavCloseButton: document.querySelector(selectors.mobileNavCloseButton)
        }

        elem.navMenuButton.addEventListener("click", function(e){
            e.preventDefault();

            if (elem.mobileNavMenuPanel.classList.contains(classes.mobileNavPanelInactive)) {
                elem.mobileNavMenuPanel.classList.remove(classes.mobileNavPanelInactive);
                elem.mobileNavMenuPanel.classList.add(classes.mobileNavPanelActive);
            }

            if (elem.mobileNavSearchButton.classList.contains(classes.hidden)) {
                elem.mobileNavSearchButton.classList.remove(classes.hidden);
            }



            if ((elem.mobileNavCloseButton.classList.contains(classes.hidden))) {
                elem.mobileNavCloseButton.classList.remove(classes.hidden);
            }

            if (!(elem.navMenuButton.classList.contains(classes.hidden))) {
                elem.navMenuButton.classList.add(classes.hidden);
            }


        });

        elem.mobileNavCloseButton.addEventListener("click", function(e){
            e.preventDefault();

            if (!(elem.mobileNavMenuPanel.classList.contains(classes.mobileNavPanelInactive))) {
                elem.mobileNavMenuPanel.classList.add(classes.mobileNavPanelInactive);
                elem.mobileNavMenuPanel.classList.remove(classes.mobileNavPanelActive);
            }

            if (!(elem.mobileNavSearchButton.classList.contains(classes.hidden))) {
                elem.mobileNavSearchButton.classList.add(classes.hidden);
            }

            if (!(elem.mobileNavCloseButton.classList.contains(classes.hidden))) {
                elem.mobileNavCloseButton.classList.add(classes.hidden);
            }

            if (elem.navMenuButton.classList.contains(classes.hidden)) {
                elem.navMenuButton.classList.remove(classes.hidden);
            }

        });
    })();
}

