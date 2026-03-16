function Navbar({ setPage }) {

return(

<header>

<div className="header">
  <h1>📚 English Learning Website</h1>
</div>

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
Ngữ Pháp
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