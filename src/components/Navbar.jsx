function Navbar({ setPage }) {

return(

<header>

<h1><span>📚 English Learning Website</span></h1>

<nav className="navbar">

<button
className="navBtn"
onClick={()=>setPage("home")}
>
Trang Chủ
</button>

<button
className="navBtn"
onClick={()=>setPage("dictionary")}
>
Tìm Kiếm
</button>

<button
className="navBtn"
onClick={()=>setPage("grammar")}
>
Giải Thích
</button>

<button
className="navBtn"
onClick={()=>setPage("contact")}
>
Liên Hệ
</button>

</nav>

</header>

)

}

export default Navbar