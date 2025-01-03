document.addEventListener('DOMContentLoaded', () => {

    
    
    const userIcon = document.querySelector('#header-user'); 
    const userMenuContainer = document.querySelector('#user');
    const listIcon = document.querySelector('#header-list'); 
    const listMenuContainer = document.querySelector('#list'); 

    userIcon.addEventListener('click', toggleUserMenu);
    listIcon.addEventListener('click', toggleListMenu);

    function toggleUserMenu(){
        if(userMenuContainer.style.display === 'none' || userMenuContainer.style.display === ''){
            userMenuContainer.style.display = 'block'; 
            limpiarUser();
            userMenu(); 

            listMenuContainer.style.display = 'none'; 
            limpiarList(); 
            return;
        }

        userMenuContainer.style.display = 'none'; 
        limpiarUser(); 
        return; 
    }

    function toggleListMenu(){
        if(listMenuContainer.style.display === 'none' || listMenuContainer.style.display === ''){
            listMenuContainer.style.display = 'block'; 
            limpiarList(); 
            listMenu(); 

            userMenuContainer.style.display = 'none'; 
            limpiarUser(); 
            return; 
        }

        listMenuContainer.style.display = 'none'; 
        limpiarUser(); 
        return; 
    }


    function userMenu() {
        const menu = document.createElement('table');
        menu.classList.add('user-display');
        menu.innerHTML = `
            <tbody>
                <tr>
                    <td>Log in</td>
                </tr>
                <tr>
                    <td>Mis compras</td>
                </tr>
                <tr>
                    <td>Configuración</td>
                </tr>
                <tr>
                    <td>Cerrar sesión</td>
                </tr>
            </tbody>
            `;
        userMenuContainer.appendChild(menu);
    }
    


    function listMenu() {
        const menu = document.createElement('table');
        menu.classList.add('list-display');
        menu.innerHTML = `
            <tbody>
                <tr>
                    <td>Envíos</td>
                </tr>
                <tr>
                    <td>Método de pago</td>
                </tr>
                <tr>
                    <td>Dirección de envío</td>
                </tr>
                <tr>
                    <td>Devoluciones</td>
                </tr>
            </tbody>
            `;
        listMenuContainer.appendChild(menu);
    }

    function limpiarUser(){
        while(userMenuContainer.firstChild){
            userMenuContainer.removeChild(userMenuContainer.firstChild)
        }
    }

    function limpiarList(){
        while(listMenuContainer.firstChild){
            listMenuContainer.removeChild(listMenuContainer.firstChild)
        }
    }
    
})