const nav=document.querySelector('.nvbar');
function toggleNavigation()
{
//   console.log(nav.className);
    if(nav.className==='nvbar')
    {
        nav.className+=" res-nv";
        document.getElementById('toggleButton').innerHTML = '<i class="fa-solid fa-xmark custom-icon"></i>';
    }
    else
    {
        nav.className="nvbar";
        document.getElementById('toggleButton').innerHTML = '<i class="fa-solid fa-bars custom-icon"></i>';
    }
}
