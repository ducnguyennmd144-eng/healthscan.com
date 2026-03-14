function checkSymptoms(){

let input=document.getElementById("symptomInput").value.toLowerCase()

let results=document.getElementById("results")
let advice=document.getElementById("adviceBox")

results.innerHTML=""

if(input.includes("sốt") || input.includes("ho")){

results.innerHTML+=`
<div class="card">
<h3>Cảm cúm</h3>
<p>Mức độ rủi ro: Trung bình</p>
<p>Triệu chứng khớp: sốt, ho</p>
</div>
`

advice.innerHTML="Bạn nên nghỉ ngơi, uống nhiều nước ấm và theo dõi nhiệt độ cơ thể."

}

else if(input.includes("đau đầu")){

results.innerHTML+=`
<div class="card">
<h3>Căng thẳng / Migraine</h3>
<p>Mức độ rủi ro: Thấp</p>
</div>
`

advice.innerHTML="Hãy nghỉ ngơi, giảm thời gian sử dụng màn hình và uống đủ nước."

}

else if(input.includes("đau bụng")){

results.innerHTML+=`
<div class="card">
<h3>Rối loạn tiêu hóa</h3>
<p>Mức độ rủi ro: Trung bình</p>
</div>
`

advice.innerHTML="Nên ăn thức ăn nhẹ, uống nước ấm và theo dõi triệu chứng."

}

else{

results.innerHTML=`
<div class="card">
<p>Không tìm thấy bệnh phù hợp. Hãy nhập triệu chứng rõ hơn.</p>
</div>
`

advice.innerHTML="Nếu triệu chứng kéo dài, bạn nên đến phòng y tế hoặc gặp bác sĩ."

}

}
