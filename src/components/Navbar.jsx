function Navbar() {

const scrollToSection = (id) => {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: "smooth" });
  }
};

return(

<header>

<div className="header">
  <h1>📚 English Learning Website</h1>
</div>

<nav className="navbar">

<button
className="navBtn"
onClick={()=>scrollToSection("home")}
>
Trang Chủ
</button>

<button
className="navBtn"
onClick={()=>scrollToSection("dictionary")}
>
Tìm Kiếm
</button>

<button
className="navBtn"
onClick={()=>scrollToSection("grammar")}
>
Ngữ Pháp
</button>

<button
className="navBtn"
onClick={()=>scrollToSection("contact")}
>
Liên Hệ
</button>

</nav>

</header>

)
}

export default Navbar