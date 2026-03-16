/**
 * HealthScan Pro 
 * Phiên bản: 3.3 (Tối trải nghiệm, Highlight Keywords & Safety First)
 * Tác giả: Nguyễn Minh Đức
 */


// 1. 150 loại bệnh thường gặp ở học sinh
const diseasesDatabase = [
    /* --- HÔ HẤP (20 bệnh) --- */
    { name: "Cảm cúm", group: "Hô hấp", keywords: ["sốt", "ho", "sổ mũi", "mệt mỏi", "đau người"], risk: "Trung bình", advice: "Nghỉ ngơi, uống nhiều nước ấm và bổ sung vitamin C." },
    { name: "Cảm lạnh", group: "Hô hấp", keywords: ["hắt hơi", "chảy nước mũi", "nghẹt mũi", "viêm mũi"], risk: "Thấp", advice: "Giữ ấm cơ thể và súc miệng nước muối." },
    { name: "Viêm họng", group: "Hô hấp", keywords: ["đau họng", "rát họng", "khó nuốt"], risk: "Thấp", advice: "Uống nước ấm và hạn chế đồ lạnh." },
    { name: "Viêm phế quản", group: "Hô hấp", keywords: ["ho kéo dài", "tức ngực", "khó thở", "đờm"], risk: "Trung bình", advice: "Tránh khói bụi và giữ ấm phổi." },
    { name: "Hen suyễn", group: "Hô hấp", keywords: ["khò khè", "khó thở", "tức ngực"], risk: "Cao", advice: "Mang theo thuốc xịt dự phòng và tránh vận động quá sức." },
    { name: "Viêm xoang", group: "Hô hấp", keywords: ["đau trán", "nhức mũi", "nghẹt mũi lâu ngày"], risk: "Thấp", advice: "Rửa mũi bằng nước muối sinh lý thường xuyên." },
    { name: "Viêm phổi", group: "Hô hấp", keywords: ["ho nặng", "đau ngực khi thở", "sốt cao", "run người"], risk: "Rất cao", advice: "Cần đến bệnh viện chụp X-quang phổi ngay." },
    { name: "Lao phổi", group: "Hô hấp", keywords: ["ho ra máu", "sụt cân", "sốt nhẹ về chiều"], risk: "Rất cao", advice: "Cách ly và điều trị theo phác đồ y tế dài hạn." },
    { name: "Viêm amidan", group: "Hô hấp", keywords: ["sưng họng", "nuốt vướng", "hơi thở hôi"], risk: "Thấp", advice: "Súc họng kỹ, nếu sốt cao cần dùng kháng sinh theo chỉ định." },
    { name: "Ngưng thở khi ngủ", group: "Hô hấp", keywords: ["ngủ ngáy", "mệt mỏi ban ngày", "giật mình khi ngủ"], risk: "Trung bình", advice: "Kiểm tra cân nặng và tư thế nằm ngủ." },
    { name: "Viêm mũi dị ứng", group: "Hô hấp", keywords: ["hắt hơi liên tục", "ngứa mũi", "chảy nước mũi trong"], risk: "Thấp", advice: "Tránh bụi, phấn hoa và dùng thuốc kháng histamine nếu cần." },
    { name: "Viêm thanh quản", group: "Hô hấp", keywords: ["khàn tiếng", "mất tiếng", "đau họng khi nói"], risk: "Thấp", advice: "Hạn chế nói lớn và uống nước ấm." },
    { name: "Ho gà", group: "Hô hấp", keywords: ["ho rũ rượi", "ho kéo dài", "khó thở sau cơn ho"], risk: "Cao", advice: "Cần khám bác sĩ và điều trị kháng sinh sớm." },
    { name: "Viêm tiểu phế quản", group: "Hô hấp", keywords: ["khó thở", "thở nhanh", "ho khò khè"], risk: "Cao", advice: "Cần theo dõi hô hấp và đi khám sớm." },
    { name: "Viêm mũi vận mạch", group: "Hô hấp", keywords: ["nghẹt mũi", "chảy nước mũi", "không sốt"], risk: "Thấp", advice: "Dùng nước muối rửa mũi và tránh khói thuốc." },
    { name: "Phù thanh quản", group: "Hô hấp", keywords: ["khó thở cấp", "khàn tiếng", "sốt cao"], risk: "Rất cao", advice: "Cấp cứu ngay, nguy cơ tắc đường thở." },
    { name: "Viêm mũi xoang mạn", group: "Hô hấp", keywords: ["đau nhức kéo dài", "mùi khó chịu", "nghẹt mũi dai dẳng"], risk: "Trung bình", advice: "Khám chuyên khoa và cân nhắc dùng kháng sinh hoặc phẫu thuật nếu mạn tính." },
    { name: "Cúm mùa", group: "Hô hấp", keywords: ["sốt cao đột ngột", "đau cơ", "mệt mỏi"], risk: "Cao", advice: "Nghỉ ngơi, bù nước; đi khám nếu khó thở hoặc sốt kéo dài." },
    { name: "Viêm phổi do vi khuẩn", group: "Hô hấp", keywords: ["sốt cao", "ho có đờm xanh", "khó thở"], risk: "Rất cao", advice: "Khám và điều trị kháng sinh theo chỉ dẫn bác sĩ." },

    /* --- TIÊU HÓA (20 bệnh) --- */
    { name: "Đau dạ dày", group: "Tiêu hóa", keywords: ["đau bụng trên", "ợ chua", "buồn nôn", "đau bao tử"], risk: "Trung bình", advice: "Ăn uống đúng giờ, tránh đồ chua cay và căng thẳng." },
    { name: "Ngộ độc thực phẩm", group: "Tiêu hóa", keywords: ["nôn mửa", "đau quặn bụng", "tiêu chảy sau ăn"], risk: "Cao", advice: "Uống nhiều nước Oresol và đến cơ sở y tế gần nhất." },
    { name: "Viêm ruột thừa", group: "Tiêu hóa", keywords: ["đau bụng phải", "đau hố chậu", "sốt nhẹ kèm đau bụng"], risk: "Rất cao", advice: "Đi cấp cứu ngay, không được tự uống thuốc giảm đau!" },
    { name: "Trào ngược dạ dày (GERD)", group: "Tiêu hóa", keywords: ["nóng rát ngực", "ợ hơi", "đắng miệng"], risk: "Trung bình", advice: "Không nằm ngay sau khi ăn, chia nhỏ bữa ăn." },
    { name: "Táo bón", group: "Tiêu hóa", keywords: ["khó đi ngoài", "đau bụng dưới", "phân cứng"], risk: "Thấp", advice: "Ăn nhiều rau xanh, uống đủ nước và vận động." },
    { name: "Tiêu chảy", group: "Tiêu hóa", keywords: ["đi ngoài nhiều lần", "mất nước", "bụng kêu"], risk: "Trung bình", advice: "Uống bù nước Oresol, ăn cháo loãng với muối." },
    { name: "Viêm gan A", group: "Tiêu hóa", keywords: ["vàng mắt", "vàng da", "mệt mỏi", "nước tiểu đậm"], risk: "Cao", advice: "Nghỉ ngơi tuyệt đối, hạn chế dầu mỡ và đồ uống có cồn." },
    { name: "Rối loạn tiêu hóa", group: "Tiêu hóa", keywords: ["đầy hơi", "chướng bụng", "khó tiêu"], risk: "Thấp", advice: "Dùng thêm men vi sinh và ăn đồ dễ tiêu." },
    { name: "Viêm loét đại tràng", group: "Tiêu hóa", keywords: ["đau bụng co thắt", "đi ngoài ra máu"], risk: "Cao", advice: "Cần nội soi và khám chuyên khoa tiêu hóa." },
    { name: "Viêm dạ dày", group: "Tiêu hóa", keywords: ["đau vùng thượng vị", "buồn nôn", "ợ hơi"], risk: "Trung bình", advice: "Ăn uống điều độ và tránh thức ăn cay nóng." },
    { name: "Nhiễm giun kim", group: "Tiêu hóa", keywords: ["ngứa hậu môn", "khó ngủ", "đau bụng nhẹ"], risk: "Thấp", advice: "Tẩy giun định kỳ và giữ vệ sinh tay." },
    { name: "Nhiễm giun đũa", group: "Tiêu hóa", keywords: ["đau bụng", "chán ăn", "sụt cân"], risk: "Trung bình", advice: "Uống thuốc tẩy giun theo hướng dẫn." },
    { name: "Đầy hơi", group: "Tiêu hóa", keywords: ["bụng căng", "ợ hơi nhiều", "khó tiêu"], risk: "Thấp", advice: "Tránh đồ uống có gas và ăn chậm." },
    { name: "Không dung nạp lactose", group: "Tiêu hóa", keywords: ["đau bụng sau uống sữa", "tiêu chảy", "đầy hơi"], risk: "Thấp", advice: "Hạn chế sữa và dùng sản phẩm không lactose." },
    { name: "Rò hậu môn", group: "Tiêu hóa", keywords: ["đau vùng hậu môn", "chảy mủ", "khó chịu khi ngồi"], risk: "Trung bình", advice: "Khám ngoại và điều trị ngoại khoa khi cần." },
    { name: "Hội chứng ruột kích thích (IBS)", group: "Tiêu hóa", keywords: ["đau bụng thay đổi", "đi ngoài thất thường", "đầy hơi"], risk: "Thấp", advice: "Điều chỉnh chế độ ăn, giảm stress." },
    { name: "Sỏi mật", group: "Tiêu hóa", keywords: ["đau hạ sườn phải", "buồn nôn sau ăn dầu mỡ"], risk: "Trung bình", advice: "Khám chuyên khoa và cân nhắc mổ nếu nhiều cơn đau." },
    { name: "Viêm tụy cấp", group: "Tiêu hóa", keywords: ["đau bụng trên dữ dội", "nôn nhiều", "sốt"], risk: "Rất cao", advice: "Cần nhập viện cấp cứu ngay." },
    { name: "Polyp đại tràng", group: "Tiêu hóa", keywords: ["đi ngoài ra máu nhẹ", "rối loạn thói quen đại tiện"], risk: "Trung bình", advice: "Nội soi kiểm tra và theo dõi." },

    /* --- TÂM LÝ & THẦN KINH (20 bệnh) --- */
    { name: "Stress học đường", group: "Tâm lý", keywords: ["căng thẳng", "áp lực", "mệt mỏi", "khó tập trung", "lo âu"], risk: "Trung bình", advice: "Hãy dành thời gian nghỉ ngơi, tập hít thở sâu và chia sẻ với người thân." },
    { name: "Rối loạn lo âu", group: "Tâm lý", keywords: ["hồi hộp", "tim đập nhanh", "vã mồ hôi", "sợ hãi vô cớ"], risk: "Trung bình", advice: "Học cách thiền định và tham vấn tâm lý nếu cần." },
    { name: "Trầm cảm", group: "Tâm lý", keywords: ["buồn bã kéo dài", "mất hứng thú", "muốn cô độc", "rối loạn giấc ngủ"], risk: "Cao", advice: "Đừng ngại tìm kiếm sự giúp đỡ từ bác sĩ tâm lý." },
    { name: "Migraine", group: "Thần kinh", keywords: ["đau nửa đầu", "sợ ánh sáng", "nhức đầu từng cơn"], risk: "Trung bình", advice: "Nằm nghỉ trong phòng tối và yên tĩnh." },
    { name: "Mất ngủ", group: "Thần kinh", keywords: ["khó ngủ", "trằn trọc", "ngủ không sâu giấc"], risk: "Thấp", advice: "Hạn chế điện thoại trước khi ngủ, uống trà tâm sen." },
    { name: "Hạ đường huyết", group: "Thần kinh", keywords: ["run tay", "đói lả", "toát mồ hôi", "bủn rủn"], risk: "Cao", advice: "Uống ngay 1 cốc nước đường hoặc ăn kẹo ngọt." },
    { name: "Động kinh", group: "Thần kinh", keywords: ["co giật", "sùi bọt mép", "mất ý thức tạm thời"], risk: "Rất cao", advice: "Để người bệnh nằm nghiêng, tránh vật cứng và gọi cấp cứu." },
    { name: "Rối loạn giấc ngủ", group: "Tâm lý", keywords: ["ngủ ít", "thức khuya", "mệt mỏi ban ngày"], risk: "Trung bình", advice: "Đi ngủ đúng giờ và giảm dùng thiết bị điện tử ban đêm." },
    { name: "Ám ảnh học tập", group: "Tâm lý", keywords: ["lo lắng thi cử", "mất ngủ trước kỳ thi", "áp lực học tập"], risk: "Trung bình", advice: "Cân bằng thời gian học và nghỉ." },
    { name: "Rối loạn tăng động giảm chú ý (ADHD)", group: "Thần kinh", keywords: ["khó tập trung", "hiếu động", "dễ mất tập trung"], risk: "Trung bình", advice: "Tham vấn chuyên gia tâm lý học đường." },
    { name: "Rối loạn ăn uống (ăn ít/ăn quá mức)", group: "Tâm lý", keywords: ["thay đổi cân nặng", "ám ảnh về thân hình", "ăn không kiểm soát"], risk: "Cao", advice: "Tìm trợ giúp chuyên gia dinh dưỡng và tâm lý." },
    { name: "Rối loạn căng thẳng sau chấn thương (PTSD)", group: "Tâm lý", keywords: ["ám ảnh ký ức", "tránh nhớ lại sự kiện", "giấc ngủ rối loạn"], risk: "Cao", advice: "Tìm chuyên gia tâm lý để trị liệu chuyên sâu." },
    { name: "Chứng sợ xã hội", group: "Tâm lý", keywords: ["sợ giao tiếp", "lao động nhóm khó khăn", "đỏ mặt khi nói"], risk: "Trung bình", advice: "Tham vấn liệu pháp hành vi nhận thức." },
    { name: "Rối loạn ám ảnh cưỡng chế (OCD)", group: "Tâm lý", keywords: ["lo lắng lặp đi lặp lại", "hành vi cưỡng chế"], risk: "Cao", advice: "Tìm chuyên gia tâm lý để đánh giá và điều trị." },
    { name: "Rối loạn giọng nói do căng thẳng", group: "Tâm lý", keywords: ["khàn tiếng khi lo lắng", "mất tiếng tạm thời"], risk: "Thấp", advice: "Tập thở và giảm áp lực tâm lý." },
    { name: "Suy giảm nhận thức nhẹ", group: "Thần kinh", keywords: ["hay quên", "khó nhớ tên"], risk: "Trung bình", advice: "Tập luyện trí nhớ và kiểm tra y tế nếu tăng dần." },
    { name: "Cơn hoảng sợ (panic attack)", group: "Tâm lý", keywords: ["hồi hộp dữ dội", "khó thở", "choáng váng"], risk: "Trung bình", advice: "Hít thở sâu, ngồi yên và tìm trợ giúp y tế nếu cần." },
    { name: "Rối loạn hành vi thiếu kiểm soát", group: "Tâm lý", keywords: ["bùng nổ giận dữ", "hành vi bạo lực nhẹ"], risk: "Cao", advice: "Tham vấn chuyên gia để xử lý hành vi." },

    /* --- DA LIỄU & TRUYỀN NHIỄM (20 bệnh) --- */
    { name: "Sốt xuất huyết", group: "Truyền nhiễm", keywords: ["sốt cao liên tục", "phát ban đỏ", "xuất huyết", "đau hốc mắt"], risk: "Rất cao", advice: "Đi xét nghiệm máu ngay. Không tự ý uống Aspirin!" },
    { name: "Thủy đậu", group: "Truyền nhiễm", keywords: ["mụn nước toàn thân", "ngứa", "sốt nhẹ"], risk: "Trung bình", advice: "Tránh gãi vỡ mụn, giữ vệ sinh da sạch sẽ." },
    { name: "Tay chân miệng", group: "Truyền nhiễm", keywords: ["loét miệng", "phỏng nước ở tay chân", "trẻ em sốt"], risk: "Trung bình", advice: "Cách ly để tránh lây lan, theo dõi sát cơn sốt." },
    { name: "Mề đay", group: "Da liễu", keywords: ["ngứa", "nổi mẩn đỏ", "sưng tấy da"], risk: "Thấp", advice: "Tìm nguyên nhân dị ứng và dùng thuốc chống dị ứng." },
    { name: "Zona thần kinh", group: "Da liễu", keywords: ["mụn nước theo dải", "đau rát như bỏng"], risk: "Trung bình", advice: "Giữ khô vết thương, dùng thuốc kháng virus sớm." },
    { name: "Mụn trứng cá nặng", group: "Da liễu", keywords: ["mụn bọc", "viêm da", "mụn mủ"], risk: "Thấp", advice: "Vệ sinh da mặt đúng cách, không tự ý nặn mụn." },
    { name: "Nấm da", group: "Da liễu", keywords: ["ngứa da", "vòng tròn đỏ trên da", "tróc vảy"], risk: "Thấp", advice: "Giữ da khô ráo và dùng thuốc chống nấm." },
    { name: "Lang ben", group: "Da liễu", keywords: ["đốm trắng trên da", "ít ngứa", "vùng da loang lổ"], risk: "Thấp", advice: "Dùng thuốc bôi chống nấm theo hướng dẫn." },
    { name: "Viêm da dị ứng (chàm)", group: "Da liễu", keywords: ["ngứa dữ dội", "da đỏ", "phát ban"], risk: "Thấp", advice: "Tránh tác nhân gây dị ứng; bôi kem dưỡng ẩm và thuốc theo chỉ định." },
    { name: "Chốc lở (impetigo)", group: "Da liễu", keywords: ["mụn nước", "vết loét vàng", "ngứa"], risk: "Trung bình", advice: "Giữ vệ sinh da và dùng kháng sinh nếu cần." },
    { name: "Viêm nang lông", group: "Da liễu", keywords: ["mụn nhỏ quanh lỗ chân lông", "ngứa", "da đỏ"], risk: "Thấp", advice: "Giữ vệ sinh da và tránh ma sát mạnh." },
    { name: "Rận tóc", group: "Da liễu", keywords: ["ngứa da đầu", "phân rận trên tóc", "đầu nhiều gàu"], risk: "Thấp", advice: "Dùng dầu gội sát trùng và chải sạch kĩ." },
    { name: "Viêm da do ánh nắng", group: "Da liễu", keywords: ["đỏ rát sau nắng", "phồng rộp"], risk: "Thấp", advice: "Bôi kem chống nắng và tránh nắng quá lâu." },
    { name: "Nhiễm trùng vết thương", group: "Truyền nhiễm", keywords: ["đỏ, sưng quanh vết thương", "chảy mủ", "sốt nhẹ"], risk: "Trung bình", advice: "Vệ sinh và đi khám để có kháng sinh đúng chỉ định." },
    { name: "Sởi", group: "Truyền nhiễm", keywords: ["sốt cao", "phát ban", "ho", "chảy nước mũi"], risk: "Cao", advice: "Cần khám bác sĩ và cách ly." },
    { name: "Quai bị", group: "Truyền nhiễm", keywords: ["sưng tuyến mang tai", "đau hàm", "sốt"], risk: "Trung bình", advice: "Nghỉ ngơi và tránh tiếp xúc người khác." },
    { name: "Cúm A (influenza A)", group: "Truyền nhiễm", keywords: ["sốt cao", "đau đầu", "ho khan", "mệt mỏi"], risk: "Cao", advice: "Theo dõi sốt và đi khám nếu nặng." },
    { name: "COVID-19 nhẹ", group: "Truyền nhiễm", keywords: ["sốt", "ho", "mất vị giác", "đau họng"], risk: "Trung bình", advice: "Cách ly và nghỉ ngơi." },

    /* --- MẮT, TAI MŨI HỌNG & CƠ XƯƠNG (20 bệnh) --- */
    { name: "Mỏi mắt kỹ thuật số", group: "Mắt", keywords: ["mỏi mắt", "mờ mắt", "khô mắt", "nhìn máy tính lâu"], risk: "Thấp", advice: "Áp dụng quy tắc 20-20-20: nhìn xa 6m mỗi 20 phút." },
    { name: "Viêm kết mạc (Đau mắt đỏ)", group: "Mắt", keywords: ["mắt đỏ", "chảy nước mắt", "ghèn mắt"], risk: "Thấp", advice: "Dùng nước muối sinh lý nhỏ mắt và tránh dùng chung khăn mặt." },
    { name: "Khô mắt", group: "Mắt", keywords: ["khô mắt", "cộm mắt", "mỏi mắt"], risk: "Thấp", advice: "Nhỏ nước mắt nhân tạo và nghỉ ngơi mắt." },
    { name: "Loạn thị", group: "Mắt", keywords: ["nhìn mờ", "nhìn méo hình", "nhức mắt"], risk: "Thấp", advice: "Khám mắt và đeo kính phù hợp." },
    { name: "Viêm bờ mi", group: "Mắt", keywords: ["ngứa mí mắt", "mắt đỏ", "ghèn mắt"], risk: "Thấp", advice: "Vệ sinh mí mắt sạch sẽ." },
    { name: "Viêm tai giữa", group: "Tai mũi họng", keywords: ["đau tai", "nghe kém", "sốt nhẹ"], risk: "Trung bình", advice: "Đi khám tai mũi họng sớm." },
    { name: "Viêm tai ngoài (tai người bơi)", group: "Tai mũi họng", keywords: ["đau tai", "ngứa ống tai", "chảy dịch"], risk: "Thấp", advice: "Giữ tai khô và khám nếu chảy mủ." },
    { name: "Chảy máu cam", group: "Tai mũi họng", keywords: ["chảy máu mũi", "khó cầm máu"], risk: "Thấp", advice: "Ngồi gập người về trước, bóp mũi 10 phút; đi khám nếu lặp lại." },
    { name: "Viêm amiđan mãn tính", group: "Tai mũi họng", keywords: ["hơi thở hôi", "nuốt vướng", "sưng amiđan"], risk: "Trung bình", advice: "Khám chuyên khoa để cân nhắc cắt amiđan nếu tái phát." },
    { name: "Đau răng sâu", group: "Răng miệng", keywords: ["đau nhói răng", "nhạy cảm với lạnh/nóng"], risk: "Trung bình", advice: "Đến nha khoa để trám hoặc điều trị tuỷ nếu cần." },
    { name: "Viêm lợi", group: "Răng miệng", keywords: ["chảy máu lợi", "sưng lợi", "hôi miệng"], risk: "Thấp", advice: "Vệ sinh răng miệng kỹ và khám nha khoa." },
    { name: "Đau vai gáy", group: "Cơ xương", keywords: ["đau vai", "mỏi gáy", "cứng cổ", "ngồi lâu"], risk: "Thấp", advice: "Tập các bài vận động cổ nhẹ nhàng và chỉnh lại tư thế ngồi." },
    { name: "Thoát vị đĩa đệm", group: "Cơ xương", keywords: ["tê bì chân tay", "đau lưng dữ dội", "khó vận động"], risk: "Cao", advice: "Khám chuyên khoa chấn thương chỉnh hình." },
    { name: "Chuột rút", group: "Cơ xương", keywords: ["co cơ đột ngột", "đau bắp chân", "cứng cơ"], risk: "Thấp", advice: "Bổ sung nước và khoáng chất." },
    { name: "Viêm gân", group: "Cơ xương", keywords: ["đau khớp khi vận động", "sưng nhẹ", "khó cử động"], risk: "Thấp", advice: "Nghỉ ngơi và tránh vận động mạnh." },
    { name: "Trật khớp nhẹ", group: "Cơ xương", keywords: ["đau sau chấn thương", "sưng", "khó cử động"], risk: "Trung bình", advice: "Cố định tạm thời và đi khám chuyên khoa nếu nặng." },
    { name: "Gãy xương nghi ngờ", group: "Cơ xương", keywords: ["đau dữ dội", "biến dạng", "không cử động được"], risk: "Rất cao", advice: "Cần cấp cứu và chụp X-quang." },

    /* --- NỘI TIẾT, HUYẾT HỌC, TIM MẠCH, THẬN (15 bệnh) --- */
    { name: "Thiếu máu", group: "Huyết học", keywords: ["da xanh xao", "chóng mặt", "hoa mắt", "móng tay giòn"], risk: "Trung bình", advice: "Bổ sung thực phẩm giàu sắt như thịt bò, gan, rau đậm màu." },
    { name: "Cường giáp", group: "Nội tiết", keywords: ["tim đập nhanh", "sụt cân nhanh", "run tay", "mắt lồi"], risk: "Cao", advice: "Cần xét nghiệm hormone tuyến giáp." },
    { name: "Suy giáp nhẹ", group: "Nội tiết", keywords: ["mệt mỏi", "sụt năng lượng", "tăng cân nhẹ"], risk: "Trung bình", advice: "Khám và xét nghiệm TSH; điều trị thay thế nếu cần." },
    { name: "Đái tháo đường loại 1/2 (tiền sử học sinh)", group: "Nội tiết", keywords: ["khát nhiều", "tiểu nhiều", "sụt cân"], risk: "Cao", advice: "Kiểm tra đường huyết và theo dõi chuyên khoa nội tiết." },
    { name: "Huyết áp thấp", group: "Tim mạch", keywords: ["chóng mặt", "choáng váng", "mệt mỏi"], risk: "Thấp", advice: "Uống đủ nước và nghỉ ngơi." },
    { name: "Rối loạn nhịp tim nhẹ", group: "Tim mạch", keywords: ["tim đập nhanh", "hồi hộp", "khó thở nhẹ"], risk: "Trung bình", advice: "Hạn chế caffeine và kiểm tra tim mạch." },
    { name: "Viêm cầu thận cấp", group: "Thận", keywords: ["phù", "tiểu ít", "nước tiểu sẫm màu"], risk: "Cao", advice: "Khám chuyên khoa thận và làm xét nghiệm nước tiểu." },
    { name: "Sỏi thận nhẹ", group: "Thận", keywords: ["đau hông lưng", "tiểu buốt", "đau quặn"], risk: "Trung bình", advice: "Uống nhiều nước và khám siêu âm nếu đau kéo dài." },
    { name: "Viêm bàng quang (UTI)", group: "Thận", keywords: ["tiểu buốt", "tiểu rắt", "đau bụng dưới"], risk: "Trung bình", advice: "Uống nhiều nước và đi khám để dùng kháng sinh nếu cần." },
    { name: "Rối loạn mỡ máu nhẹ", group: "Tim mạch", keywords: ["không triệu chứng", "mỡ máu cao khi xét nghiệm"], risk: "Trung bình", advice: "Thay đổi chế độ ăn và vận động." },
    { name: "Hội chứng buồng trứng đa nang (PCOS) - tuổi thanh thiếu niên", group: "Nội tiết", keywords: ["rối loạn kinh nguyệt", "mọc mụn", "tăng cân"], risk: "Trung bình", advice: "Khám chuyên khoa nội tiết sản phụ khoa." },
    { name: "Thiếu vitamin D", group: "Dinh dưỡng", keywords: ["mỏi cơ", "đau xương", "mệt mỏi"], risk: "Thấp", advice: "Tắm nắng, bổ sung vitamin D theo chỉ dẫn." },
    { name: "Rối loạn điện giải (hạ natri/hạ kali)", group: "Nội tiết", keywords: ["chuột rút", "yếu cơ", "rối loạn nhịp"], risk: "Cao", advice: "Đi khám để xét nghiệm máu và bù điện giải." },

    /* --- RĂNG MIỆNG, SẢN, KHÁC (10 bệnh) --- */
    { name: "Sâu răng", group: "Răng miệng", keywords: ["đau răng khi ăn ngọt", "nhạy cảm"], risk: "Trung bình", advice: "Đến nha khoa để trám, vệ sinh răng miệng tốt." },
    { name: "Áp xe răng", group: "Răng miệng", keywords: ["đau răng dữ dội", "sưng mặt", "sốt"], risk: "Cao", advice: "Khám nha khoa để dẫn lưu và điều trị kháng sinh." },
    { name: "Viêm lợi trùm (trẻ mọc răng)", group: "Răng miệng", keywords: ["sưng nướu", "đau lợi"], risk: "Thấp", advice: "Vệ sinh, súc miệng và khám nha khoa." },
    { name: "Bỏng nhiệt nhẹ", group: "Khác", keywords: ["đỏ rát", "phồng rộp nhỏ"], risk: "Trung bình", advice: "Làm mát bằng nước sạch và bôi gel làm mát; đi khám nếu rộng hoặc sâu." },
    { name: "Vết cắt nhỏ", group: "Khác", keywords: ["chảy máu", "đau"], risk: "Thấp", advice: "Rửa sạch, băng và theo dõi nhiễm trùng." },
    { name: "Chuột rút kinh nguyệt nhẹ", group: "Sản phụ khoa", keywords: ["đau bụng khi hành kinh", "mất ăn"], risk: "Thấp", advice: "Uống thuốc giảm đau theo hướng dẫn và nghỉ ngơi." },
    { name: "Viêm nhiễm nấm âm đạo", group: "Sản phụ khoa", keywords: ["ngứa vùng kín", "khí hư bất thường"], risk: "Trung bình", advice: "Đến khám phụ khoa để điều trị đúng thuốc." },
    { name: "Cước chân tay (tê cóng)", group: "Khác", keywords: ["tê cứng chi do lạnh", "da trắng"], risk: "Thấp", advice: "Làm ấm từ từ, tránh chà xát mạnh." },
    { name: "Phản ứng dị ứng cấp (phát ban nặng)", group: "Khác", keywords: ["sưng mặt", "khó thở", "phát ban lan"], risk: "Rất cao", advice: "Cấp cứu ngay, tiêm epinephrine nếu có hướng dẫn." },

    /* --- DỰ PHÒNG VÀ GIÁO DỤC SỨC KHỎE (5 mục hỗ trợ) --- */
    { name: "Thiếu nước", group: "Dinh dưỡng", keywords: ["khát", "nước tiểu vàng", "mệt"], risk: "Trung bình", advice: "Uống nước đều, tránh uống nhiều một lúc." },
    { name: "Thiếu ngủ mãn", group: "Tâm lý", keywords: ["mệt mỏi mãn", "khó tập trung"], risk: "Trung bình", advice: "Xây dựng lịch ngủ đều đặn và hạn chế thiết bị trước khi ngủ." },
    { name: "Dinh dưỡng kém ở tuổi học sinh", group: "Dinh dưỡng", keywords: ["sụt cân", "mệt mỏi", "chậm lớn"], risk: "Trung bình", advice: "Ăn đủ nhóm chất và khám dinh dưỡng nếu cần." },
    { name: "Vắc-xin chưa đủ", group: "Truyền nhiễm", keywords: ["không có triệu chứng cụ thể"], risk: "Thấp", advice: "Kiểm tra lịch tiêm chủng và bổ sung mũi thiếu." },
    { name: "Hàng loạt lây nhiễm tại lớp học (outbreak)", group: "Truyền nhiễm", keywords: ["nhiều học sinh cùng triệu chứng", "tăng số ca"], risk: "Cao", advice: "Báo y tế trường, cách ly và tăng cường vệ sinh." }
];

// 2. KHỞI TẠO BIẾN GIAO DIỆN
const chatBox = document.getElementById("chatBox");
const inputField = document.getElementById("symptomInput");
const sendBtn = document.getElementById("sendBtn");

// Hàm lọc ký tự đặc biệt để bảo mật
function escapeHTML(str) {
    const p = document.createElement("p");
    p.textContent = str;
    return p.innerHTML;
}

// 3. LOGIC HIỂN THỊ TIN NHẮN
function appendMessage(sender, content, isHTML = false) {
    if (!chatBox) return;
    const wrapper = document.createElement("div");
    wrapper.className = `message-wrapper ${sender}-wrapper`;
    
    const time = new Date().toLocaleTimeString('vi-VN', { hour: '2-digit', minute: '2-digit' });
    
    wrapper.innerHTML = `
        <div class="message ${sender}-message">
            <div class="msg-content">${isHTML ? content : escapeHTML(content)}</div>
        </div>
        <span class="msg-time">${sender === 'ai' ? 'HealthScan AI' : 'Bạn'} • ${time}</span>
    `;
    
    chatBox.appendChild(wrapper);
    chatBox.scrollTo({ top: chatBox.scrollHeight, behavior: 'smooth' });
}

function showTyping() {
    if (!chatBox) return;
    const typingDiv = document.createElement("div");
    typingDiv.id = "typing-indicator";
    typingDiv.className = "message-wrapper ai-wrapper";
    typingDiv.innerHTML = `
        <div class="message ai-message">
            <div class="typing-dots"><span class="dot"></span><span class="dot"></span><span class="dot"></span></div>
        </div>
    `;
    chatBox.appendChild(typingDiv);
    chatBox.scrollTop = chatBox.scrollHeight;
}

function removeTyping() {
    const indicator = document.getElementById("typing-indicator");
    if (indicator) indicator.remove();
}

// 4. THUẬT TOÁN PHÂN TÍCH (ĐÃ TỐI ƯU TÍNH ĐIỂM)
function checkSymptoms() {
    if (!inputField) return;
    const text = inputField.value.trim();
    if (!text) return;

    appendMessage("user", text);
    inputField.value = "";
    showTyping();

    setTimeout(() => {
        removeTyping();
        const textLower = text.toLowerCase();
        let results = [];

        diseasesDatabase.forEach(disease => {
            let score = 0;
            let matchedKeywords = [];

            disease.keywords.forEach(keyword => {
                if (textLower.includes(keyword.toLowerCase())) {
                    score += 10;
                    // Cộng thêm điểm ưu tiên cho từ khóa dài hoặc mức độ rủi ro
                    if (disease.risk === "Rất cao") score += 5; 
                    matchedKeywords.push(keyword);
                }
            });

            if (score > 0) {
                results.push({ ...disease, score, matchedKeywords });
            }
        });

        // Sắp xếp: Ưu tiên điểm cao nhất, sau đó đến rủi ro cao nhất
        results.sort((a, b) => b.score - a.score);

        if (results.length === 0) {
            appendMessage("ai", `Chào Đức, mình chưa xác định rõ triệu chứng này. Bạn mô tả kỹ hơn (ví dụ: đau ở đâu, có sốt không...) để mình hỗ trợ tốt hơn nhé!`);
        } else {
            renderDiseaseCards(results, textLower);
        }
    }, 800);
}

// 5. RENDER KẾT QUẢ CÓ HIGHLIGHT
function renderDiseaseCards(results, userInput) {
    appendMessage("ai", "Dựa trên các triệu chứng bạn cung cấp, đây là phân tích của mình:");

    results.slice(0, 2).forEach((disease, index) => {
        const riskColor = disease.risk === "Rất cao" ? "#ef4444" : (disease.risk === "Cao" ? "#f59e0b" : "#10b981");
        
        // Highlight các từ khóa mà người dùng đã nhập trúng
        let adviceHighlighted = disease.advice;
        disease.matchedKeywords.forEach(kw => {
            const reg = new RegExp(`(${kw})`, 'gi');
            adviceHighlighted = adviceHighlighted.replace(reg, `<b style="color:${riskColor}">$1</b>`);
        });

        const cardHTML = `
            <div class="disease-card" style="border-left: 5px solid ${riskColor}; background: #ffffff; padding: 15px; border-radius: 12px; margin-bottom: 15px; box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1);">
                <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:8px">
                    <strong style="font-size:1.1rem; color:#1e293b">${index === 0 ? '⭐ ' : ''}${disease.name}</strong>
                    <span style="font-size:0.75rem; background:#f1f5f9; padding:2px 8px; border-radius:10px; color: #64748b">${disease.group}</span>
                </div>
                <div style="font-size:0.9rem; margin-bottom:10px">
                    <span style="color:#64748b">Mức độ rủi ro:</span> 
                    <b style="color:${riskColor}">${disease.risk}</b>
                </div>
                <div style="background:#f8fafc; padding:10px; border-radius:8px; font-size:0.9rem; border: 1px dashed #cbd5e1; line-height: 1.5">
                    <i class="fa-solid fa-hand-holding-medical" style="color:#3b82f6"></i> <b>Lời khuyên:</b> ${adviceHighlighted}
                </div>
            </div>
        `;
        setTimeout(() => appendMessage("ai", cardHTML, true), index * 300);
    });

    // Disclaimer tự động
    setTimeout(() => {
        appendMessage("ai", `
            <div style="font-size:0.75rem; color:#94a3b8; font-style:italic; border-top: 1px solid #f1f5f9; pt: 8px">
                * Lưu ý: Kết quả này chỉ mang tính tham khảo. Nếu thấy mệt nhiều, Đức hãy báo ngay cho thầy cô hoặc y tế trường nhé!
            </div>
        `, true);
    }, 700);
}

// 6. KHỞI TẠO SỰ KIỆN
document.addEventListener("DOMContentLoaded", () => {
    // Cập nhật thời gian thực trên giao diện
    const timeDisplay = document.getElementById("realTime");
    if (timeDisplay) {
        const updateTime = () => { timeDisplay.innerText = new Date().toLocaleTimeString('vi-VN'); };
        setInterval(updateTime, 1000);
        updateTime();
    }

    // CSS cho Typing dots (giữ nguyên của Đức vì đã đẹp)
    const style = document.createElement('style');
    style.innerHTML = `
        .typing-dots { display: flex; gap: 4px; padding: 5px 0; }
        .dot { width: 8px; height: 8px; background: #3b82f6; border-radius: 50%; animation: typing 1s infinite; }
        .dot:nth-child(2) { animation-delay: 0.2s; }
        .dot:nth-child(3) { animation-delay: 0.4s; }
        @keyframes typing { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-5px); } }
        .disease-card { animation: slideIn 0.3s ease-out; }
        @keyframes slideIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
    `;
    document.head.appendChild(style);

    // Gán sự kiện chat
    if (inputField && sendBtn && chatBox) {
        inputField.focus();
        sendBtn.addEventListener("click", checkSymptoms);
        inputField.addEventListener("keyup", (e) => { if (e.key === "Enter") checkSymptoms(); });
    }
});

// Các hàm phụ trợ tiện ích (Clear chat, Search nhanh)
window.clearChat = () => {
    if (confirm("Làm mới cuộc trò chuyện nhé Đức?")) {
        chatBox.innerHTML = `<div class="message-wrapper ai-wrapper"><div class="message ai-message">Hệ thống đã sẵn sàng! Đức đang cảm thấy thế nào?</div></div>`;
    }
};

window.quickSearch = (s) => {
    if (inputField) {
        inputField.value = s;
        checkSymptoms();
    }
};
