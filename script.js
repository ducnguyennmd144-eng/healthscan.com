const diseasesDatabase = [
/* ================= HÔ HẤP (1-15) ================= */
{ name: "Cảm cúm", group: "Hô hấp", keywords: ["sốt", "ho", "sổ mũi", "mệt mỏi"], risk: "Trung bình", advice: "Nghỉ ngơi, uống nhiều nước ấm và bổ sung vitamin C." },
{ name: "Cảm lạnh", group: "Hô hấp", keywords: ["hắt hơi", "chảy nước mũi", "nghẹt mũi"], risk: "Thấp", advice: "Giữ ấm cơ thể và súc miệng nước muối." },
{ name: "Viêm họng", group: "Hô hấp", keywords: ["đau họng", "rát họng", "khó nuốt"], risk: "Thấp", advice: "Uống nước ấm và hạn chế đồ lạnh." },
{ name: "Viêm amidan", group: "Hô hấp", keywords: ["sưng họng", "nuốt đau", "sốt nhẹ"], risk: "Trung bình", advice: "Vệ sinh răng miệng và đi khám nếu sưng mủ." },
{ name: "Ho khan", group: "Hô hấp", keywords: ["ho khan", "ngứa cổ"], risk: "Thấp", advice: "Giữ ấm cổ và uống mật ong." },
{ name: "Ho có đờm", group: "Hô hấp", keywords: ["ho đờm", "đờm", "nặng ngực"], risk: "Trung bình", advice: "Uống nhiều nước ấm để loãng đờm." },
{ name: "Viêm xoang", group: "Hô hấp", keywords: ["đau trán", "nghẹt mũi", "chảy mũi"], risk: "Trung bình", advice: "Xông hơi nước ấm và vệ sinh mũi." },
{ name: "Viêm phế quản", group: "Hô hấp", keywords: ["ho kéo dài", "tức ngực", "khó thở"], risk: "Trung bình", advice: "Tránh khói bụi và giữ ấm phổi." },
{ name: "Hen suyễn", group: "Hô hấp", keywords: ["khò khè", "khó thở", "tức ngực"], risk: "Cao", advice: "Mang theo thuốc xịt dự phòng và tránh vận động quá sức." },
{ name: "Sốt siêu vi", group: "Hô hấp", keywords: ["sốt cao", "ớn lạnh", "đau nhức"], risk: "Trung bình", advice: "Uống thuốc hạ sốt và bù nước Oresol." },
{ name: "Viêm mũi dị ứng", group: "Hô hấp", keywords: ["ngứa mũi", "hắt hơi", "thời tiết"], risk: "Thấp", advice: "Sử dụng nước muối sinh lý rửa mũi." },
{ name: "Chảy máu cam", group: "Hô hấp", keywords: ["chảy máu mũi", "máu cam"], risk: "Thấp", advice: "Cúi đầu nhẹ về trước, bóp chặt cánh mũi." },
{ name: "Khàn tiếng", group: "Hô hấp", keywords: ["mất giọng", "khàn giọng"], risk: "Thấp", advice: "Hạn chế nói to, uống nước giá đỗ." },
{ name: "Viêm phổi nhẹ", group: "Hô hấp", keywords: ["ho nặng", "sốt cao", "khó thở"], risk: "Cao", advice: "Cần đến bác sĩ chụp X-quang phổi ngay." },
{ name: "Ngạt mũi đêm", group: "Hô hấp", keywords: ["khó thở khi nằm", "nghẹt mũi đêm"], risk: "Thấp", advice: "Kê cao gối khi ngủ và dùng tinh dầu tràm." },

/* ================= TIÊU HÓA (16-35) ================= */
{ name: "Đau dạ dày", group: "Tiêu hóa", keywords: ["đau bụng trên", "ợ chua", "buồn nôn"], risk: "Trung bình", advice: "Ăn uống đúng giờ, tránh đồ chua cay." },
{ name: "Trào ngược dạ dày", group: "Tiêu hóa", keywords: ["ợ nóng", "nóng ngực", "nghẹn cổ"], risk: "Trung bình", advice: "Không nằm ngay sau khi ăn." },
{ name: "Tiêu chảy", group: "Tiêu hóa", keywords: ["đi ngoài", "phân lỏng", "đau bụng"], risk: "Trung bình", advice: "Bù nước Oresol và ăn cháo loãng." },
{ name: "Táo bón", group: "Tiêu hóa", keywords: ["khó đi ngoài", "đầy hơi"], risk: "Thấp", advice: "Ăn nhiều chất xơ (rau xanh, khoai lang)." },
{ name: "Ngộ độc thực phẩm", group: "Tiêu hóa", keywords: ["nôn mửa", "đau quặn bụng", "tiêu chảy sau ăn"], risk: "Cao", advice: "Uống nhiều nước và đến cơ sở y tế gần nhất." },
{ name: "Đầy bụng", group: "Tiêu hóa", keywords: ["chướng bụng", "khó tiêu"], risk: "Thấp", advice: "Uống trà gừng ấm và xoa bụng." },
{ name: "Viêm ruột thừa", group: "Tiêu hóa", keywords: ["đau bụng phải", "đau hố chậu"], risk: "Rất cao", advice: "Đi cấp cứu ngay, không được tự uống thuốc." },
{ name: "Nhiệt miệng", group: "Tiêu hóa", keywords: ["loét miệng", "đau niêm mạc"], risk: "Thấp", advice: "Bổ sung Vitamin C và uống nước mát." },
{ name: "Nhiễm giun", group: "Tiêu hóa", keywords: ["ngứa hậu môn", "đau bụng vặt"], risk: "Trung bình", advice: "Tẩy giun định kỳ 6 tháng một lần." },
{ name: "Dị ứng đồ ăn", group: "Tiêu hóa", keywords: ["nổi mẩn sau ăn", "ngứa họng sau ăn"], risk: "Cao", advice: "Ngừng ăn thực phẩm đó và dùng thuốc dị ứng." },
{ name: "Hội chứng ruột kích thích", group: "Tiêu hóa", keywords: ["đau bụng khi lo lắng", "đi ngoài khi thi"], risk: "Trung bình", advice: "Giữ tinh thần thoải mái, tránh Cafein." },
{ name: "Viêm loét dạ dày", group: "Tiêu hóa", keywords: ["đau dạ dày cấp", "nôn ra máu"], risk: "Rất cao", advice: "Đến bệnh viện nội soi dạ dày ngay." },
{ name: "Đau bụng kinh", group: "Tiêu hóa", keywords: ["đau bụng dưới nữ", "đau lưng tới kỳ"], risk: "Thấp", advice: "Chườm ấm và uống nước gừng." },
{ name: "Sôi bụng", group: "Tiêu hóa", keywords: ["bụng kêu", "đầy hơi"], risk: "Thấp", advice: "Hạn chế đồ uống có gas và sữa." },
{ name: "Co thắt đại tràng", group: "Tiêu hóa", keywords: ["đau bụng quặn", "mót rặn"], risk: "Trung bình", advice: "Ăn chín uống sôi, tránh đồ sống." },

/* ================= THẦN KINH & TÂM LÝ (36-55) ================= */
{ name: "Đau đầu do căng thẳng", group: "Thần kinh", keywords: ["đau đầu", "nhức đầu"], risk: "Thấp", advice: "Nghỉ ngơi, rời xa màn hình máy tính." },
{ name: "Migraine", group: "Thần kinh", keywords: ["đau nửa đầu", "sợ ánh sáng"], risk: "Trung bình", advice: "Nằm nghỉ trong phòng tối và yên tĩnh." },
{ name: "Stress học đường", group: "Thần kinh", keywords: ["căng thẳng", "mệt mỏi", "khó tập trung"], risk: "Trung bình", advice: "Sắp xếp lại lịch học, đi dạo nhẹ nhàng." },
{ name: "Mất ngủ", group: "Thần kinh", keywords: ["khó ngủ", "trằn trọc"], risk: "Trung bình", advice: "Tắt điện thoại trước khi ngủ 1 tiếng." },
{ name: "Chóng mặt", group: "Thần kinh", keywords: ["hoa mắt", "xây xẩm"], risk: "Trung bình", advice: "Đứng dậy từ từ, bổ sung thực phẩm giàu sắt." },
{ name: "Hạ đường huyết", group: "Thần kinh", keywords: ["run tay", "đói lả", "toát mồ hôi"], risk: "Cao", advice: "Uống nước đường hoặc ăn kẹo ngay." },
{ name: "Say nắng", group: "Thần kinh", keywords: ["đau đầu nắng", "khát nước cực độ"], risk: "Cao", advice: "Vào chỗ mát, chườm khăn ẩm lên trán." },
{ name: "Suy nhược cơ thể", group: "Thần kinh", keywords: ["kiệt sức", "uể oải"], risk: "Trung bình", advice: "Ăn uống đủ chất và ngủ đủ 8 tiếng." },
{ name: "Hồi hộp/Lo âu", group: "Thần kinh", keywords: ["tim đập nhanh", "run rẩy"], risk: "Thấp", advice: "Tập hít thở sâu theo nhịp 4-7-8." },
{ name: "Say tàu xe", group: "Thần kinh", keywords: ["buồn nôn đi xe", "chóng mặt đi xe"], risk: "Thấp", advice: "Ngửi vỏ quýt hoặc dùng miếng dán chống say." },
{ name: "Đau đầu do thiếu ngủ", group: "Thần kinh", keywords: ["nhức đầu do thức khuya"], risk: "Trung bình", advice: "Ngủ bù và không dùng trà/cafe buổi tối." },
{ name: "Rối loạn nhịp sinh học", group: "Thần kinh", keywords: ["ngủ ngày cày đêm"], risk: "Trung bình", advice: "Tập thói quen dậy sớm và tập thể dục sáng." },

/* ================= CƠ XƯƠNG KHỚP (56-75) ================= */
{ name: "Đau vai gáy", group: "Cơ xương", keywords: ["đau vai", "mỏi gáy", "cứng cổ"], risk: "Thấp", advice: "Tập các bài vận động cổ nhẹ nhàng." },
{ name: "Đau lưng", group: "Cơ xương", keywords: ["đau lưng", "mỏi lưng"], risk: "Thấp", advice: "Chỉnh lại tư thế ngồi học thẳng lưng." },
{ name: "Chuột rút", group: "Cơ xương", keywords: ["chuột rút", "co cơ"], risk: "Thấp", advice: "Bổ sung Canxi và Magie qua thực phẩm." },
{ name: "Căng cơ", group: "Cơ xương", keywords: ["đau cơ", "nhức cơ sau tập"], risk: "Thấp", advice: "Chườm ấm và massage vùng cơ bị đau." },
{ name: "Bong gân", group: "Cơ xương", keywords: ["sưng chân", "đau mắt cá"], risk: "Trung bình", advice: "Chườm đá ngay lập tức và băng ép." },
{ name: "Mỏi tay do viết bài", group: "Cơ xương", keywords: ["mỏi ngón tay", "đau bàn tay"], risk: "Thấp", advice: "Thư giãn tay sau mỗi 30 phút viết." },
{ name: "Vẹo cột sống", group: "Cơ xương", keywords: ["lệch lưng", "lệch vai"], risk: "Trung bình", advice: "Tránh xách cặp nặng một bên vai." },
{ name: "Đau đầu gối", group: "Cơ xương", keywords: ["nhức đầu gối", "lạo xạo khớp"], risk: "Thấp", advice: "Tránh ngồi xổm quá lâu." },
{ name: "Tê bì chân tay", group: "Cơ xương", keywords: ["tê tay", "tê chân"], risk: "Thấp", advice: "Vận động tay chân thường xuyên để lưu thông máu." },
{ name: "Chấn thương thể thao", group: "Cơ xương", keywords: ["va chạm", "bầm tím"], risk: "Trung bình", advice: "Sử dụng thuốc tan bầm và nghỉ ngơi." },

/* ================= MẮT & DA LIỄU (76-95) ================= */
{ name: "Mỏi mắt", group: "Mắt", keywords: ["mỏi mắt", "mờ mắt"], risk: "Thấp", advice: "Nhìn xa 20 feet sau mỗi 20 phút." },
{ name: "Khô mắt", group: "Mắt", keywords: ["khô mắt", "cộm mắt"], risk: "Thấp", advice: "Nhỏ nước muối sinh lý hoặc nước mắt nhân tạo." },
{ name: "Đau mắt đỏ", group: "Mắt", keywords: ["mắt đỏ", "nhiều ghèn"], risk: "Trung bình", advice: "Cách ly đồ dùng cá nhân để tránh lây lan." },
{ name: "Lẹo mắt", group: "Mắt", keywords: ["sưng mí", "mụn ở mắt"], risk: "Thấp", advice: "Chườm khăn ấm để mụn nhanh tan." },
{ name: "Mụn trứng cá", group: "Da", keywords: ["mụn", "nổi mụn"], risk: "Thấp", advice: "Rửa mặt sạch và không tự ý nặn mụn." },
{ name: "Mề đay", group: "Da", keywords: ["ngứa da", "nổi sẩn"], risk: "Trung bình", advice: "Tìm nguyên nhân gây dị ứng để phòng tránh." },
{ name: "Cháy nắng", group: "Da", keywords: ["da đỏ nắng", "rát da"], risk: "Thấp", advice: "Sử dụng gel lô hội để làm dịu da." },
{ name: "Hắc lào", group: "Da", keywords: ["ngứa vòng tròn", "lác đồng tiền"], risk: "Trung bình", advice: "Giữ da khô ráo và bôi thuốc trị nấm." },
{ name: "Lang ben", group: "Da", keywords: ["đốm trắng", "loang lổ"], risk: "Thấp", advice: "Tắm rửa sạch sẽ, tránh dùng chung khăn tắm." },
{ name: "Rôm sảy", group: "Da", keywords: ["hạt đỏ ngứa", "mẩn ngứa nóng"], risk: "Thấp", advice: "Mặc đồ thoáng mát và tắm nước lá." },
{ name: "Viêm da kiến ba khoang", group: "Da", keywords: ["phỏng da vệt dài", "rát da kiến"], risk: "Trung bình", advice: "Rửa bằng nước sạch, bôi thuốc mỡ làm dịu." },
{ name: "Ghẻ", group: "Da", keywords: ["ngứa kẽ tay", "ngứa đêm"], risk: "Trung bình", advice: "Vệ sinh giường chiếu, dùng thuốc bôi chuyên dụng." },
{ name: "Mụn cóc", group: "Da", keywords: ["mụn cứng tay", "mụn ké"], risk: "Thấp", advice: "Đến da liễu để xử lý bằng nitơ lỏng." },

/* ================= DINH DƯỠNG & TRUYỀN NHIỄM (96-100) ================= */
{ name: "Thiếu máu", group: "Dinh dưỡng", keywords: ["xanh xao", "chóng mặt thiếu máu"], risk: "Trung bình", advice: "Ăn nhiều thịt đỏ và rau đậm màu." },
{ name: "Thiếu Canxi", group: "Dinh dưỡng", keywords: ["tê chân tay", "dễ gãy móng"], risk: "Thấp", advice: "Bổ sung sữa và tắm nắng sáng." },
{ name: "Sốt xuất huyết", group: "Truyền nhiễm", keywords: ["sốt cao liên tục", "phát ban đỏ"], risk: "Rất cao", advice: "Đi xét nghiệm máu ngay tại bệnh viện." },
{ name: "Thủy đậu", group: "Truyền nhiễm", keywords: ["mụn nước khắp người", "ngứa toàn thân"], risk: "Trung bình", advice: "Tránh gãi vỡ mụn và bôi thuốc xanh." },
{ name: "Quai bị", group: "Truyền nhiễm", keywords: ["sưng quai hàm", "sốt sưng tai"], risk: "Cao", advice: "Nghỉ ngơi tuyệt đối, tránh vận động mạnh." }
];
/**
 * Hàm chính để xử lý khi người dùng gửi tin nhắn
 */
function checkSymptoms() {
    const inputElement = document.getElementById("symptomInput");
    const chatBox = document.getElementById("chatBox");
    const userText = inputElement.value.trim();

    // 1. Kiểm tra nếu ô nhập trống
    if (userText === "") return;

    // 2. Hiển thị tin nhắn của người dùng lên màn hình
    appendMessage("user", userText);
    
    // Xóa nội dung ô nhập sau khi gửi
    inputElement.value = "";

    // 3. Hiển thị trạng thái "AI đang suy nghĩ..."
    const loadingId = "loading-" + Date.now();
    const loadingHtml = `<div class="typing-indicator" id="${loadingId}"><span>.</span><span>.</span><span>.</span></div>`;
    appendMessage("ai", loadingHtml);

    // 4. Tìm kiếm bệnh trong database sau một khoảng trễ nhẹ (giả lập AI phản hồi)
    setTimeout(() => {
        // Xóa dòng loading
        const loadingElement = document.getElementById(loadingId);
        if (loadingElement) loadingElement.closest('.message').remove();

        const inputLow = userText.toLowerCase();
        let matchedDiseases = diseasesDatabase.filter(disease => {
            return disease.keywords.some(keyword => inputLow.includes(keyword));
        });

        // 5. Tạo nội dung phản hồi
        if (matchedDiseases.length > 0) {
            let responseHtml = `<p>Dựa trên các triệu chứng bạn mô tả, HealthScan tìm thấy thông tin sau:</p>`;
            
            matchedDiseases.forEach(disease => {
                // Xác định màu sắc dựa trên mức độ rủi ro
                let riskColor = "#27ae60"; // Thấp (Xanh lá)
                let riskIcon = "✅";

                if (disease.risk === "Trung bình") {
                    riskColor = "#f39c12"; // Trung bình (Vàng cam)
                    riskIcon = "⚠️";
                } else if (disease.risk === "Cao" || disease.risk === "Rất cao") {
                    riskColor = "#e74c3c"; // Cao/Rất cao (Đỏ)
                    riskIcon = "🚨";
                }

                responseHtml += `
                    <div class="disease-card" style="border-left: 5px solid ${riskColor};">
                        <strong style="color: ${riskColor}; font-size: 1.1em;">${riskIcon} ${disease.name}</strong><br>
                        <small style="color: #7f8c8d;">Nhóm: ${disease.group} | Rủi ro: ${disease.risk}</small>
                        <div style="margin-top: 8px; border-top: 1px solid #eee; padding-top: 5px;">
                            <b>💡 Lời khuyên:</b> ${disease.advice}
                        </div>
                    </div>
                `;
            });

            responseHtml += `
                <p style="font-size: 0.85em; margin-top: 15px; color: #95a5a6; font-style: italic;">
                    * Lưu ý: Đây là dữ liệu tham khảo dựa trên thuật toán mảng. Nếu triệu chứng không thuyên giảm, hãy báo ngay cho thầy cô hoặc phòng y tế trường.
                </p>`;
            
            appendMessage("ai", responseHtml);
        } else {
            appendMessage("ai", "Xin lỗi, mình chưa tìm thấy thông tin khớp với mô tả này. Bạn thử nhập từ khóa ngắn gọn hơn như 'đau bụng', 'nhức đầu' hoặc 'mỏi mắt' xem sao nhé?");
        }

/**
 * Hàm phụ trợ để đẩy tin nhắn vào khung chat
 * @param {string} sender - 'user' hoặc 'ai'
 * @param {string} text - Nội dung tin nhắn (chấp nhận HTML)
 */
function appendMessage(sender, text) {
    const chatBox = document.getElementById("chatBox");
    const messageWrapper = document.createElement("div");
    
    // Thêm class để định dạng CSS sau này
    messageWrapper.className = `message-wrapper ${sender}-wrapper`;
    
    const messageContent = `
        <div class="message ${sender}-message">
            ${text}
        </div>
    `;
    
    messageWrapper.innerHTML = messageContent;
    chatBox.appendChild(messageWrapper);

    // Tự động cuộn xuống cuối cùng khi có tin nhắn mới
    chatBox.scrollTop = chatBox.scrollHeight;
}

/**
 * Lắng nghe sự kiện nhấn phím Enter để gửi tin nhắn tiện hơn
 */
document.addEventListener("DOMContentLoaded", () => {
    const inputField = document.getElementById("symptomInput");
    if (inputField) {
        inputField.addEventListener("keypress", function(event) {
            if (event.key === "Enter") {
                event.preventDefault();
                checkSymptoms();
            }
        });
    }
});
        adviceBox.innerHTML = "Nếu triệu chứng nặng, hãy gặp bác sĩ ngay.";
    }
}
