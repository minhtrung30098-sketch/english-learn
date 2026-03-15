function Contact(){

return(

<section id="contact">

<h2>📩 Liên hệ tư vấn</h2>

<div className="contactContainer">

<div className="contactInfo">

<h3>Thông tin liên hệ</h3>

<p><b>Admin:</b> English Learning</p>
<p><b>Email:</b> admin@email.com</p>
<p><b>Phản hồi:</b> Trong vòng 24 giờ</p>
<p><b>Chi phí:</b> Miễn phí</p>

</div>

<form className="contactForm">

<input
type="text"
placeholder="Họ và tên"
required
/>

<input
type="email"
placeholder="Email"
required
/>

<input
type="text"
placeholder="Số điện thoại"
/>

<select>

<option>-- Mục đích --</option>
<option>Học ngữ pháp</option>
<option>Học từ vựng</option>
<option>Hỏi bài tập</option>

</select>

<textarea placeholder="Nội dung cần tư vấn"></textarea>

<button type="submit">
Gửi thông tin
</button>

</form>

</div>

</section>

)

}

export default Contact