const todos = document.getElementById('todos')
const diseno = document.getElementById('diseno')
const ing = document.getElementById('ing')

const typ_diseno = document.querySelectorAll(".design")
const typ_ing = document.querySelectorAll(".ingenieria")

const id_activo = "activada"

function setPushCategoria(key){
    switch (key) {
        case 0:
            console.log("push todos")
            todos.className =  todos.className.replace("inactivo",id_activo)
            diseno.className = diseno.className.replace(id_activo,"inactivo")
            ing.className = ing.className.replace(id_activo,"inactivo")
            typ_diseno.forEach(x=>x.style.display = 'block')
            typ_ing.forEach(x=>x.style.display = 'block')
            
            break;
        case 1:
            console.log("push Diseño")
            todos.className =  todos.className.replace(id_activo,"inactivo")
            diseno.className = diseno.className.replace("inactivo",id_activo)
            ing.className = ing.className.replace(id_activo,"inactivo")

            typ_diseno.forEach(x=>x.style.display = 'block')
            typ_ing.forEach(x=>x.style.display = 'none')
            
            break;
        case 2:
            console.log("push Ingenieria")
            todos.className =  todos.className.replace(id_activo,"inactivo")
            diseno.className = diseno.className.replace(id_activo,"inactivo")
            ing.className = ing.className.replace("inactivo",id_activo)

            typ_diseno.forEach(x=>x.style.display = 'none')
            typ_ing.forEach(x=>x.style.display = 'block')

            break;
        default:
            break;
    }
}