/**
 * HealthScan Pro - Core Logic Engine
 * Phiên bản: 3.0 (ProVip)
 * Tác giả: Nguyễn Minh Đức
 */

// 1. DATABASE NÂNG CẤP (Đã được tối ưu từ dữ liệu gốc của bạn)
const diseasesDatabase = [
    /* Hô hấp */
    { name: "Cảm cúm", group: "Hô hấp", keywords: ["sốt", "ho", "sổ mũi", "mệt mỏi", "đau người"], risk: "Trung bình", advice: "Nghỉ ngơi, uống nhiều nước ấm và bổ sung vitamin C." },
    { name: "Cảm lạnh", group: "Hô hấp", keywords: ["hắt hơi", "chảy nước mũi", "nghẹt mũi", "viêm mũi"], risk: "Thấp", advice: "Giữ ấm cơ thể và súc miệng nước muối." },
    { name: "Viêm họng", group: "Hô hấp", keywords: ["đau họng", "rát họng", "khó nuốt"], risk: "Thấp", advice: "Uống nước ấm và hạn chế đồ lạnh." },
    { name: "Viêm phế quản", group: "Hô hấp", keywords: ["ho kéo dài", "tức ngực", "khó thở"], risk: "Trung bình", advice: "Tránh khói bụi và giữ ấm phổi." },
    { name: "Hen suyễn", group: "Hô hấp", keywords: ["khò khè", "khó thở", "tức ngực"], risk: "Cao", advice: "Mang theo thuốc xịt dự phòng và tránh vận động quá sức." },
    { name: "Sốt xuất huyết", group: "Truyền nhiễm", keywords: ["sốt cao liên tục", "phát ban đỏ", "xuất huyết", "đau hốc mắt"], risk: "Rất cao", advice: "Đi xét nghiệm máu ngay tại bệnh viện. Không tự ý uống Aspirin!" },

    /* Tiêu hóa */
    { name: "Đau dạ dày", group: "Tiêu hóa", keywords: ["đau bụng trên", "ợ chua", "buồn nôn", "đau bao tử"], risk: "Trung bình", advice: "Ăn uống đúng giờ, tránh đồ chua cay và căng thẳng." },
    { name: "Ngộ độc thực phẩm", group: "Tiêu hóa", keywords: ["nôn mửa", "đau quặn bụng", "tiêu chảy sau ăn"], risk: "Cao", advice: "Uống nhiều nước Oresol và đến cơ sở y tế gần nhất." },
    { name: "Viêm ruột thừa", group: "Tiêu hóa", keywords: ["đau bụng phải", "đau hố chậu", "sốt nhẹ kèm đau bụng"], risk: "Rất cao", advice: "Đi cấp cứu ngay, không được tự uống thuốc giảm đau!" },

    /* Thần kinh & Tâm lý */
    { name: "Stress học đường", group: "Tâm lý", keywords: ["căng thẳng", "áp lực", "mệt mỏi", "khó tập trung", "lo âu"], risk: "Trung bình", advice: "Hãy dành thời gian nghỉ ngơi, tập hít thở sâu và chia sẻ với người thân." },
    { name: "Migraine", group: "Thần kinh", keywords: ["đau nửa đầu", "sợ ánh sáng", "nhức đầu từng cơn"], risk: "Trung bình", advice: "Nằm nghỉ trong phòng tối và yên tĩnh, hạn chế dùng điện thoại." },
    { name: "Hạ đường huyết", group: "Thần kinh", keywords: ["run tay", "đói lả", "toát mồ hôi", "bủn rủn"], risk: "Cao", advice: "Uống ngay 1 cốc nước đường hoặc ăn kẹo ngọt." },

    /* Cơ xương khớp & Mắt */
    { name: "Mỏi mắt kỹ thuật số", group: "Mắt", keywords: ["mỏi mắt", "mờ mắt", "khô mắt", "nhìn máy tính lâu"], risk: "Thấp", advice: "Áp dụng quy tắc 20-20-20: nhìn xa 6m mỗi 20 phút." },
    { name: "Đau vai gáy", group: "Cơ xương", keywords: ["đau vai", "mỏi gáy", "cứng cổ", "ngồi lâu"], risk: "Thấp", advice: "Tập các bài vận động cổ nhẹ nhàng và chỉnh lại tư thế ngồi." }
];

// 2. CÁC HÀM XỬ LÝ GIAO DIỆN SIÊU CẤP
const chatBox = document.getElementById("chatBox");
const inputField = document.getElementById("symptomInput");
const sendBtn = document.getElementById("sendBtn");

// Hàm thêm tin nhắn vào khung chat với hiệu ứng mượt
function appendMessage(sender, content, isHTML = false) {
    const wrapper = document.createElement("div");
    wrapper.className = `message-wrapper ${sender}-wrapper`;
    
    const time = new Date().toLocaleTimeString('vi-VN', { hour: '2-digit', minute: '2-digit' });
    
    wrapper.innerHTML = `
        <div class="message ${sender}-message">
            <div class="msg-content">${content}</div>
        </div>
        <span class="msg-time">${sender === 'ai' ? 'HealthScan AI' : 'Bạn'} • ${time}</span>
    `;
    
    chatBox.appendChild(wrapper);
    
    // Cuộn xuống dưới cùng
    chatBox.scrollTo({
        top: chatBox.scrollHeight,
        behavior: 'smooth'
    });
}

// Hiệu ứng "AI đang suy nghĩ"
function showTyping() {
    const typingDiv = document.createElement("div");
    typingDiv.id = "typing-indicator";
    typingDiv.className = "message-wrapper ai-wrapper";
    typingDiv.innerHTML = `
        <div class="message ai-message">
            <div class="typing-dots">
                <span class="dot"></span><span class="dot"></span><span class="dot"></span>
            </div>
        </div>
    `;
    chatBox.appendChild(typingDiv);
    chatBox.scrollTop = chatBox.scrollHeight;
}

function removeTyping() {
    const indicator = document.getElementById("typing-indicator");
    if (indicator) indicator.remove();
}

// 3. THUẬT TOÁN PHÂN TÍCH TRIỆU CHỨNG (WEIGHTED SEARCH)
function checkSymptoms() {
    const text = inputField.value.trim();
    if (!text) return;

    // Hiển thị tin nhắn người dùng
    appendMessage("user", escapeHTML(text));
    inputField.value = "";

    showTyping();

    // Giả lập thời gian suy nghĩ của AI (800ms)
    setTimeout(() => {
        removeTyping();
        const textLower = text.toLowerCase();
        let results = [];

        diseasesDatabase.forEach(disease => {
            let score = 0;
            disease.keywords.forEach(keyword => {
                if (textLower.includes(keyword)) {
                    score += 10; // Trọng số cơ bản
                    // Cộng thêm điểm nếu từ khóa dài (độ chính xác cao hơn)
                    if (keyword.length > 5) score += 5;
                }
            });

            if (score > 0) {
                results.push({ ...disease, score });
            }
        });

        // Sắp xếp theo điểm số cao nhất
        results.sort((a, b) => b.score - a.score);

        if (results.length === 0) {
            appendMessage("ai", "Xin lỗi Đức, mình chưa nhận diện được triệu chứng này. Bạn hãy thử mô tả kỹ hơn hoặc nhập các từ khóa như: 'sốt', 'đau bụng', 'mỏi mắt' nhé!");
        } else {
            renderDiseaseCards(results);
        }
    }, 800);
}

// 4. RENDER KẾT QUẢ DƯỚI DẠNG CARD CHUYÊN NGHIỆP
function renderDiseaseCards(results) {
    let headerMsg = "Dựa trên các triệu chứng bạn cung cấp, đây là phân tích từ hệ thống:";
    appendMessage("ai", headerMsg);

    results.slice(0, 2).forEach((disease, index) => {
        const riskColor = disease.risk === "Rất cao" ? "#ef4444" : (disease.risk === "Cao" ? "#f59e0b" : "#10b981");
        const cardHTML = `
            <div class="disease-card" style="border-left: 5px solid ${riskColor}">
                <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:8px">
                    <strong style="font-size:1.1rem; color:#1e293b">${index === 0 ? '⭐ ' : ''}${disease.name}</strong>
                    <span style="font-size:0.75rem; background:#f1f5f9; padding:2px 8px; border-radius:10px">${disease.group}</span>
                </div>
                <div style="font-size:0.9rem; margin-bottom:10px">
                    <span style="color:var(--text-muted)">Mức độ rủi ro:</span> 
                    <b style="color:${riskColor}">${disease.risk}</b>
                </div>
                <div style="background:#f8fafc; padding:10px; border-radius:8px; font-size:0.9rem; border: 1px dashed #cbd5e1">
                    <i class="fa-solid fa-lightbulb" style="color:#f59e0b"></i> <b>Lời khuyên:</b> ${disease.advice}
                </div>
            </div>
        `;
        setTimeout(() => {
            appendMessage("ai", cardHTML, true);
        }, index * 300); // Hiển thị từng card một cách mượt mà
    });

    // Thêm cảnh báo y tế cuối cùng
    setTimeout(() => {
        const disclaimer = `
            <div style="font-size:0.8rem; color:#94a3b8; font-style:italic; margin-top:10px">
                * Lưu ý: Kết quả này chỉ mang tính chất tham khảo học đường. Nếu triệu chứng nặng hơn, hãy liên hệ phòng y tế trường hoặc bác sĩ ngay lập tức.
            </div>
        `;
        appendMessage("ai", disclaimer, true);
    }, 700);
}

// 5. CÁC TIỆN ÍCH BỔ SUNG
function quickSearch(symptom) {
    inputField.value = symptom;
    checkSymptoms();
}

function clearChat() {
    if (confirm("Bạn có chắc chắn muốn làm mới cuộc trò chuyện?")) {
        chatBox.innerHTML = `
            <div class="message-wrapper ai-wrapper">
                <div class="message ai-message">Chào Đức! Hệ thống đã được làm mới. Mình có thể giúp gì cho sức khỏe của bạn lúc này?</div>
            </div>
        `;
    }
}

function escapeHTML(str) {
    const p = document.createElement("p");
    p.textContent = str;
    return p.innerHTML;
}

// Khởi tạo các sự kiện khi trang web sẵn sàng
document.addEventListener("DOMContentLoaded", () => {
    inputField.focus();
    
    // Thêm CSS cho phần Typing Indicator (vì nó sinh ra động)
    const style = document.createElement('style');
    style.innerHTML = `
        .typing-dots { display: flex; gap: 4px; padding: 5px 0; }
        .dot { width: 8px; height: 8px; background: #cbd5e1; border-radius: 50%; animation: typing 1s infinite; }
        .dot:nth-child(2) { animation-delay: 0.2s; }
        .dot:nth-child(3) { animation-delay: 0.4s; }
        @keyframes typing { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-5px); } }
    `;
    document.head.appendChild(style);

    // Gán sự kiện cho nút gửi
    sendBtn.addEventListener("click", checkSymptoms);
});
