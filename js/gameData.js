// js/gameData.js
const GAME_DATA = {
   stories: [
      {
         id: 1,
         title: "Bắt đầu nhiệm kỳ",
         text: "Chào mừng đến với ghế quyền lực. Những quyết định của bạn sẽ định hình tương lai của đất nước.",
         choices: [
            {
               title: "Tăng lương tối thiểu 30%",
               text: "Tăng lương tối thiểu từ 4.68 triệu lên 6 triệu VND để cải thiện đời sống người lao động",
               effects: {
                  discontent: -15,
                  economy: -10,
                  freedom: 5,
                  conflict: -5
               }
            },
            {
               title: "Kích thích kinh tế 100 tỷ USD",
               text: "Triển khai gói kích thích kinh tế khủng để thúc đẩy tăng trưởng và tạo việc làm",
               effects: {
                  economy: 20,
                  discontent: -10,
                  environment: -15,
                  security: 5
               }
            },
            {
               title: "Cải cách chính trị toàn diện",
               text: "Thực hiện cải cách dân chủ, tăng cường tự do báo chí và quyền công dân",
               effects: {
                  freedom: 20,
                  discontent: -20,
                  conflict: 10,
                  security: -10
               }
            }
         ]
      },
      {
         "id": 1,
         "text": "Đại dịch COVID-19 bùng phát trên toàn quốc. Hệ thống y tế quá tải, nền kinh tế đình trệ. Bạn phải quyết định biện pháp ứng phó khẩn cấp.",
         "image": "https://images.unsplash.com/photo-1584118624012-df056829fbd0?w=800&q=80",
         "choices": [
            {
               "text": "Phong tỏa toàn quốc 30 ngày",
               "effects": {
                  "discontent": 15,
                  "conflict": 10,
                  "economy": -25,
                  "environment": 10,
                  "freedom": -20,
                  "security": 15
               }
            },
            {
               "text": "Chỉ cách ly các khu vực nguy cơ cao",
               "effects": {
                  "discontent": 5,
                  "conflict": 8,
                  "economy": -10,
                  "environment": -5,
                  "freedom": -5,
                  "security": 5
               }
            },
            {
               "text": "Để dân tự bảo vệ, ưu tiên kinh tế",
               "effects": {
                  "discontent": 25,
                  "conflict": 20,
                  "economy": 5,
                  "environment": -15,
                  "freedom": 10,
                  "security": -20
               }
            }
         ]
      },
      {
         "id": 2,
         "text": "Giá xăng dầu tăng vọt 200% do xung đột quốc tế. Người dân biểu tình đòi chính phủ can thiệp giảm giá nhiên liệu.",
         "image": "https://images.unsplash.com/photo-1545558014-8692077e9b5c?w=800&q=80",
         "choices": [
            {
               "text": "Trợ cấp xăng dầu từ ngân sách nhà nước",
               "effects": {
                  "discontent": -15,
                  "conflict": -10,
                  "economy": -20,
                  "environment": -10,
                  "freedom": 5,
                  "security": 5
               }
            },
            {
               "text": "Tăng thuế thu nhập để bù đắp chi phí",
               "effects": {
                  "discontent": 20,
                  "conflict": 15,
                  "economy": 10,
                  "environment": 5,
                  "freedom": -5,
                  "security": 0
               }
            },
            {
               "text": "Khuyến khích sử dụng năng lượng tái tạo",
               "effects": {
                  "discontent": 10,
                  "conflict": 5,
                  "economy": -5,
                  "environment": 20,
                  "freedom": 0,
                  "security": 0
               }
            }
         ]
      },
      {
         "id": 3,
         "text": "Một vụ tham nhũng lớn bị phanh phui liên quan đến nhiều quan chức cao cấp. Dư luận yêu cầu điều tra triệt để và xử lý nghiêm.",
         "image": "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800&q=80",
         "choices": [
            {
               "text": "Điều tra công khai và xử lý nghiêm",
               "effects": {
                  "discontent": -20,
                  "conflict": -5,
                  "economy": 5,
                  "environment": 0,
                  "freedom": 15,
                  "security": 10
               }
            },
            {
               "text": "Điều tra kín và xử lý nội bộ",
               "effects": {
                  "discontent": 15,
                  "conflict": 10,
                  "economy": -5,
                  "environment": 0,
                  "freedom": -10,
                  "security": -5
               }
            },
            {
               "text": "Che đậy để tránh mất ổn định chính trị",
               "effects": {
                  "discontent": 30,
                  "conflict": 25,
                  "economy": -10,
                  "environment": 0,
                  "freedom": -25,
                  "security": -15
               }
            }
         ]
      },
      {
         "id": 4,
         "text": "Lũ lụt lịch sử tàn phá miền Trung, hàng nghìn người mất nhà cửa. Ngân sách khẩn cấp cần được phân bổ giữa cứu trợ ngay và tái thiết lâu dài.",
         "image": "https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=800&q=80",
         "choices": [
            {
               "text": "Tập trung cứu trợ khẩn cấp ngay lập tức",
               "effects": {
                  "discontent": -15,
                  "conflict": -10,
                  "economy": -15,
                  "environment": -5,
                  "freedom": 5,
                  "security": 5
               }
            },
            {
               "text": "Đầu tư hạ tầng chống lũ dài hạn",
               "effects": {
                  "discontent": 10,
                  "conflict": 5,
                  "economy": -25,
                  "environment": 15,
                  "freedom": 0,
                  "security": 10
               }
            },
            {
               "text": "Kêu gọi viện trợ quốc tế",
               "effects": {
                  "discontent": 5,
                  "conflict": 0,
                  "economy": 10,
                  "environment": 5,
                  "freedom": 0,
                  "security": -5
               }
            }
         ]
      },
      {
         "id": 5,
         "text": "Căng thẳng biên giới với nước láng giềng leo thang. Quân đội đề xuất tăng cường tuần tra, trong khi ngoại giao muốn đàm phán.",
         "image": "https://images.unsplash.com/photo-1526558829113-b118b3889c6c?w=800&q=80",
         "choices": [
            {
               "text": "Tăng cường quân sự tại biên giới",
               "effects": {
                  "discontent": 10,
                  "conflict": 15,
                  "economy": -20,
                  "environment": -10,
                  "freedom": -5,
                  "security": 25
               }
            },
            {
               "text": "Mở đàm phán song phương",
               "effects": {
                  "discontent": -5,
                  "conflict": -10,
                  "economy": 5,
                  "environment": 0,
                  "freedom": 10,
                  "security": -5
               }
            },
            {
               "text": "Đưa vấn đề lên tòa án quốc tế",
               "effects": {
                  "discontent": 0,
                  "conflict": -5,
                  "economy": -5,
                  "environment": 0,
                  "freedom": 15,
                  "security": 5
               }
            }
         ]
      },
      {
         "id": 6,
         "text": "Công nghệ AI phát triển mạnh tại các doanh nghiệp tư nhân, đe dọa thay thế hàng triệu việc làm trong 5 năm tới.",
         "image": "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&q=80",
         "choices": [
            {
               "text": "Cấm hoặc hạn chế AI để bảo vệ việc làm",
               "effects": {
                  "discontent": -10,
                  "conflict": 5,
                  "economy": -15,
                  "environment": 5,
                  "freedom": -15,
                  "security": 10
               }
            },
            {
               "text": "Đầu tư đào tạo lại lao động",
               "effects": {
                  "discontent": -5,
                  "conflict": -5,
                  "economy": -20,
                  "environment": 0,
                  "freedom": 10,
                  "security": 0
               }
            },
            {
               "text": "Để thị trường tự điều chỉnh",
               "effects": {
                  "discontent": 20,
                  "conflict": 15,
                  "economy": 15,
                  "environment": -5,
                  "freedom": 15,
                  "security": -10
               }
            }
         ]
      },
      {
         "id": 7,
         "text": "Giáo dục đại học gặp khủng hoảng chất lượng. Nhiều trường tư thục cấp bằng 'ma', sinh viên ra trường không có việc làm.",
         "image": "https://images.unsplash.com/photo-1523050854058-8df90110c9d1?w=800&q=80",
         "choices": [
            {
               "text": "Siết chặt quản lý chất lượng giáo dục",
               "effects": {
                  "discontent": 10,
                  "conflict": 5,
                  "economy": 5,
                  "environment": 0,
                  "freedom": -10,
                  "security": 5
               }
            },
            {
               "text": "Đầu tư mạnh vào giáo dục công",
               "effects": {
                  "discontent": -5,
                  "conflict": -5,
                  "economy": -25,
                  "environment": 0,
                  "freedom": 5,
                  "security": 0
               }
            },
            {
               "text": "Khuyến khích giáo dục nghề nghiệp",
               "effects": {
                  "discontent": 0,
                  "conflict": 0,
                  "economy": 10,
                  "environment": 5,
                  "freedom": 0,
                  "security": 0
               }
            }
         ]
      },
      {
         "id": 8,
         "text": "Bất động sản tăng giá chóng mặt. Nhiều gia đình trẻ không mua nổi nhà, dẫn đến tình trạng tụt sinh và di cư.",
         "image": "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&q=80",
         "choices": [
            {
               "text": "Áp thuế cao với bất động sản đầu cơ",
               "effects": {
                  "discontent": 10,
                  "conflict": 15,
                  "economy": -10,
                  "environment": 0,
                  "freedom": -5,
                  "security": 5
               }
            },
            {
               "text": "Xây dựng nhà ở xã hội quy mô lớn",
               "effects": {
                  "discontent": -15,
                  "conflict": -5,
                  "economy": -20,
                  "environment": -10,
                  "freedom": 5,
                  "security": 0
               }
            },
            {
               "text": "Không can thiệp, để thị trường tự do",
               "effects": {
                  "discontent": 25,
                  "conflict": 20,
                  "economy": 10,
                  "environment": 0,
                  "freedom": 15,
                  "security": -5
               }
            }
         ]
      },
      {
         "id": 9,
         "text": "Hạn hán nghiêm trọng kéo dài 6 tháng. Nước sạch cạn kiệt, nông nghiệp thiệt hại nặng, có nguy cơ khủng hoảng lương thực.",
         "image": "https://images.unsplash.com/photo-1536431311719-398b6704d4cc?w=800&q=80",
         "choices": [
            {
               "text": "Hạn chế nghiêm ngặt sử dụng nước",
               "effects": {
                  "discontent": 20,
                  "conflict": 15,
                  "economy": -15,
                  "environment": 10,
                  "freedom": -15,
                  "security": 5
               }
            },
            {
               "text": "Đầu tư khoan giếng và nhà máy nước biển",
               "effects": {
                  "discontent": -5,
                  "conflict": -5,
                  "economy": -30,
                  "environment": 5,
                  "freedom": 0,
                  "security": 10
               }
            },
            {
               "text": "Nhập khẩu lương thực và nước sạch",
               "effects": {
                  "discontent": 0,
                  "conflict": 0,
                  "economy": -20,
                  "environment": -5,
                  "freedom": 0,
                  "security": -10
               }
            }
         ]
      },
      {
         "id": 10,
         "text": "Mạng xã hội lan truyền tin giả về chính phủ, gây bất ổn dư luận. Các nền tảng từ chối hợp tác kiểm duyệt nội dung.",
         "image": "https://images.unsplash.com/photo-1611262588024-d12430b98920?w=800&q=80",
         "choices": [
            {
               "text": "Chặn các nền tảng không hợp tác",
               "effects": {
                  "discontent": 15,
                  "conflict": 10,
                  "economy": -10,
                  "environment": 0,
                  "freedom": -25,
                  "security": 15
               }
            },
            {
               "text": "Tăng cường giáo dục truyền thông",
               "effects": {
                  "discontent": -5,
                  "conflict": -5,
                  "economy": -10,
                  "environment": 0,
                  "freedom": 10,
                  "security": 0
               }
            },
            {
               "text": "Đàm phán với các nền tảng công nghệ",
               "effects": {
                  "discontent": 5,
                  "conflict": 0,
                  "economy": 0,
                  "environment": 0,
                  "freedom": 5,
                  "security": -5
               }
            }
         ]
      },
      {
         "id": 11,
         "text": "Tình huống 11: Cuộc khủng hoảng kinh tế toàn cầu ảnh hưởng nghiêm trọng đến xuất khẩu quốc gia.",
         "image": "https://picsum.photos/id/61/800/400",
         "choices": [
            {
               "text": "Tăng cường truyền thông",
               "effects": {
                  "discontent": 1,
                  "conflict": -16,
                  "economy": -16,
                  "environment": -1,
                  "freedom": 7,
                  "security": -14
               }
            },
            {
               "text": "Để thị trường tự điều chỉnh",
               "effects": {
                  "discontent": -19,
                  "conflict": 14,
                  "economy": 14,
                  "environment": 0,
                  "freedom": -10,
                  "security": -16
               }
            },
            {
               "text": "Áp dụng biện pháp khẩn cấp",
               "effects": {
                  "discontent": -14,
                  "conflict": 1,
                  "economy": -17,
                  "environment": -1,
                  "freedom": 5,
                  "security": 5
               }
            },
            {
               "text": "Cắt giảm chi tiêu công",
               "effects": {
                  "discontent": -20,
                  "conflict": -14,
                  "economy": 18,
                  "environment": 19,
                  "freedom": 7,
                  "security": -2
               }
            }
         ]
      },
      {
         "id": 12,
         "text": "Tình huống 12: Phong trào biểu tình quy mô lớn đòi cải cách chính trị và tăng lương tối thiểu.",
         "image": "https://picsum.photos/id/62/800/400",
         "choices": [
            {
               "text": "Để thị trường tự điều chỉnh",
               "effects": {
                  "discontent": 14,
                  "conflict": 16,
                  "economy": 12,
                  "environment": 3,
                  "freedom": 11,
                  "security": 0
               }
            },
            {
               "text": "Áp dụng biện pháp khẩn cấp",
               "effects": {
                  "discontent": -18,
                  "conflict": 20,
                  "economy": 19,
                  "environment": 18,
                  "freedom": 14,
                  "security": -7
               }
            },
            {
               "text": "Kêu gọi hỗ trợ quốc tế",
               "effects": {
                  "discontent": 7,
                  "conflict": -5,
                  "economy": -14,
                  "environment": -11,
                  "freedom": 17,
                  "security": 4
               }
            }
         ]
      },
      {
         "id": 13,
         "text": "Tình huống 13: Dịch bệnh gia súc làm thiệt hại ngành chăn nuôi, đe dọa an ninh lương thực.",
         "image": "https://picsum.photos/id/63/800/400",
         "choices": [
            {
               "text": "Kêu gọi hỗ trợ quốc tế",
               "effects": {
                  "discontent": 0,
                  "conflict": -18,
                  "economy": -1,
                  "environment": 19,
                  "freedom": -1,
                  "security": -12
               }
            },
            {
               "text": "Tăng cường truyền thông",
               "effects": {
                  "discontent": -8,
                  "conflict": -19,
                  "economy": -13,
                  "environment": 3,
                  "freedom": -8,
                  "security": 1
               }
            },
            {
               "text": "Cắt giảm chi tiêu công",
               "effects": {
                  "discontent": 18,
                  "conflict": 15,
                  "economy": -11,
                  "environment": -20,
                  "freedom": 20,
                  "security": -5
               }
            }
         ]
      },
      {
         "id": 14,
         "text": "Tình huống 14: Khủng hoảng năng lượng do thiếu hụt điện nghiêm trọng trong mùa hè.",
         "image": "https://picsum.photos/id/64/800/400",
         "choices": [
            {
               "text": "Tăng thuế để có nguồn thu",
               "effects": {
                  "discontent": -1,
                  "conflict": 10,
                  "economy": 7,
                  "environment": 12,
                  "freedom": 18,
                  "security": -5
               }
            },
            {
               "text": "Tăng cường truyền thông",
               "effects": {
                  "discontent": 12,
                  "conflict": 16,
                  "economy": -7,
                  "environment": -3,
                  "freedom": -18,
                  "security": -2
               }
            },
            {
               "text": "Áp dụng biện pháp khẩn cấp",
               "effects": {
                  "discontent": 2,
                  "conflict": -2,
                  "economy": 13,
                  "environment": 9,
                  "freedom": 12,
                  "security": 11
               }
            }
         ]
      },
      {
         "id": 15,
         "text": "Tình huống 15: Các đại gia công nghệ đòi ưu đãi thuế để không chuyển trụ sở ra nước ngoài.",
         "image": "https://picsum.photos/id/65/800/400",
         "choices": [
            {
               "text": "Áp dụng biện pháp khẩn cấp",
               "effects": {
                  "discontent": -15,
                  "conflict": 5,
                  "economy": -4,
                  "environment": 19,
                  "freedom": -3,
                  "security": -9
               }
            },
            {
               "text": "Để thị trường tự điều chỉnh",
               "effects": {
                  "discontent": 8,
                  "conflict": -8,
                  "economy": -9,
                  "environment": -14,
                  "freedom": -10,
                  "security": 18
               }
            },
            {
               "text": "Kêu gọi hỗ trợ quốc tế",
               "effects": {
                  "discontent": 11,
                  "conflict": 5,
                  "economy": 14,
                  "environment": 19,
                  "freedom": 0,
                  "security": -5
               }
            }
         ]
      },
      {
         "id": 16,
         "text": "Tình huống 16: Lạm phát tăng cao, giá cả hàng hóa thiết yếu vượt tầm với của người dân.",
         "image": "https://picsum.photos/id/66/800/400",
         "choices": [
            {
               "text": "Tăng cường can thiệp nhà nước",
               "effects": {
                  "discontent": -18,
                  "conflict": 2,
                  "economy": -12,
                  "environment": 5,
                  "freedom": 7,
                  "security": -5
               }
            },
            {
               "text": "Để thị trường tự điều chỉnh",
               "effects": {
                  "discontent": -1,
                  "conflict": -19,
                  "economy": 17,
                  "environment": -5,
                  "freedom": -3,
                  "security": 19
               }
            },
            {
               "text": "Kêu gọi hỗ trợ quốc tế",
               "effects": {
                  "discontent": 20,
                  "conflict": -3,
                  "economy": 17,
                  "environment": 2,
                  "freedom": -10,
                  "security": -16
               }
            }
         ]
      },
      {
         "id": 17,
         "text": "Tình huống 17: Công nhân các khu công nghiệp đình công đòi cải thiện điều kiện lao động.",
         "image": "https://picsum.photos/id/67/800/400",
         "choices": [
            {
               "text": "Để thị trường tự điều chỉnh",
               "effects": {
                  "discontent": 6,
                  "conflict": -14,
                  "economy": 12,
                  "environment": 5,
                  "freedom": -14,
                  "security": 15
               }
            },
            {
               "text": "Kêu gọi hỗ trợ quốc tế",
               "effects": {
                  "discontent": 9,
                  "conflict": -9,
                  "economy": -1,
                  "environment": 10,
                  "freedom": 9,
                  "security": 19
               }
            }
         ]
      },
      {
         "id": 18,
         "text": "Tình huống 18: Ô nhiễm không khí đạt mức nguy hiểm, áp lực từ tổ chức môi trường quốc tế.",
         "image": "https://picsum.photos/id/68/800/400",
         "choices": [
            {
               "text": "Đàm phán với các bên liên quan",
               "effects": {
                  "discontent": 6,
                  "conflict": 8,
                  "economy": -8,
                  "environment": -16,
                  "freedom": 16,
                  "security": 5
               }
            },
            {
               "text": "Tăng cường can thiệp nhà nước",
               "effects": {
                  "discontent": 19,
                  "conflict": -10,
                  "economy": 13,
                  "environment": -4,
                  "freedom": -1,
                  "security": 5
               }
            },
            {
               "text": "Cắt giảm chi tiêu công",
               "effects": {
                  "discontent": -2,
                  "conflict": -19,
                  "economy": 14,
                  "environment": -1,
                  "freedom": 8,
                  "security": -18
               }
            },
            {
               "text": "Để thị trường tự điều chỉnh",
               "effects": {
                  "discontent": -2,
                  "conflict": -13,
                  "economy": 0,
                  "environment": 2,
                  "freedom": -11,
                  "security": 14
               }
            }
         ]
      },
      {
         "id": 19,
         "text": "Tình huống 19: Cuộc khủng hoảng kinh tế toàn cầu ảnh hưởng nghiêm trọng đến xuất khẩu quốc gia.",
         "image": "https://picsum.photos/id/69/800/400",
         "choices": [
            {
               "text": "Cắt giảm chi tiêu công",
               "effects": {
                  "discontent": -20,
                  "conflict": -20,
                  "economy": -6,
                  "environment": 13,
                  "freedom": 18,
                  "security": -11
               }
            },
            {
               "text": "Kêu gọi hỗ trợ quốc tế",
               "effects": {
                  "discontent": 2,
                  "conflict": -3,
                  "economy": 6,
                  "environment": 18,
                  "freedom": -8,
                  "security": 8
               }
            }
         ]
      },
      {
         "id": 20,
         "text": "Tình huống 20: Phong trào biểu tình quy mô lớn đòi cải cách chính trị và tăng lương tối thiểu.",
         "image": "https://picsum.photos/id/70/800/400",
         "choices": [
            {
               "text": "Để thị trường tự điều chỉnh",
               "effects": {
                  "discontent": 9,
                  "conflict": -8,
                  "economy": 7,
                  "environment": -7,
                  "freedom": -15,
                  "security": -19
               }
            },
            {
               "text": "Đàm phán với các bên liên quan",
               "effects": {
                  "discontent": -17,
                  "conflict": 18,
                  "economy": -9,
                  "environment": 4,
                  "freedom": -17,
                  "security": 10
               }
            }
         ]
      },
      {
         "id": 21,
         "text": "Tình huống 21: Dịch bệnh gia súc làm thiệt hại ngành chăn nuôi, đe dọa an ninh lương thực.",
         "image": "https://picsum.photos/id/71/800/400",
         "choices": [
            {
               "text": "Áp dụng biện pháp khẩn cấp",
               "effects": {
                  "discontent": -8,
                  "conflict": 14,
                  "economy": 3,
                  "environment": 16,
                  "freedom": -19,
                  "security": 4
               }
            },
            {
               "text": "Kêu gọi hỗ trợ quốc tế",
               "effects": {
                  "discontent": 0,
                  "conflict": 13,
                  "economy": 0,
                  "environment": -17,
                  "freedom": 10,
                  "security": -8
               }
            }
         ]
      },
      {
         "id": 22,
         "text": "Tình huống 22: Khủng hoảng năng lượng do thiếu hụt điện nghiêm trọng trong mùa hè.",
         "image": "https://picsum.photos/id/72/800/400",
         "choices": [
            {
               "text": "Tăng cường can thiệp nhà nước",
               "effects": {
                  "discontent": 14,
                  "conflict": 18,
                  "economy": -19,
                  "environment": 6,
                  "freedom": -2,
                  "security": -14
               }
            },
            {
               "text": "Đàm phán với các bên liên quan",
               "effects": {
                  "discontent": -7,
                  "conflict": 17,
                  "economy": -5,
                  "environment": -3,
                  "freedom": -4,
                  "security": 8
               }
            },
            {
               "text": "Để thị trường tự điều chỉnh",
               "effects": {
                  "discontent": -16,
                  "conflict": -7,
                  "economy": 0,
                  "environment": -16,
                  "freedom": 7,
                  "security": -11
               }
            },
            {
               "text": "Kêu gọi hỗ trợ quốc tế",
               "effects": {
                  "discontent": 20,
                  "conflict": 1,
                  "economy": 2,
                  "environment": -10,
                  "freedom": 14,
                  "security": 11
               }
            }
         ]
      },
      {
         "id": 23,
         "text": "Tình huống 23: Các đại gia công nghệ đòi ưu đãi thuế để không chuyển trụ sở ra nước ngoài.",
         "image": "https://picsum.photos/id/73/800/400",
         "choices": [
            {
               "text": "Tăng thuế để có nguồn thu",
               "effects": {
                  "discontent": -14,
                  "conflict": 12,
                  "economy": 2,
                  "environment": 6,
                  "freedom": 12,
                  "security": 12
               }
            },
            {
               "text": "Áp dụng biện pháp khẩn cấp",
               "effects": {
                  "discontent": 10,
                  "conflict": -1,
                  "economy": -15,
                  "environment": 11,
                  "freedom": 4,
                  "security": 13
               }
            },
            {
               "text": "Cắt giảm chi tiêu công",
               "effects": {
                  "discontent": 7,
                  "conflict": 14,
                  "economy": 6,
                  "environment": 12,
                  "freedom": -8,
                  "security": -20
               }
            }
         ]
      },
      {
         "id": 24,
         "text": "Tình huống 24: Lạm phát tăng cao, giá cả hàng hóa thiết yếu vượt tầm với của người dân.",
         "image": "https://picsum.photos/id/74/800/400",
         "choices": [
            {
               "text": "Để thị trường tự điều chỉnh",
               "effects": {
                  "discontent": 13,
                  "conflict": -5,
                  "economy": -11,
                  "environment": 12,
                  "freedom": 11,
                  "security": -5
               }
            },
            {
               "text": "Tăng cường truyền thông",
               "effects": {
                  "discontent": 11,
                  "conflict": -10,
                  "economy": 3,
                  "environment": 17,
                  "freedom": 12,
                  "security": 7
               }
            },
            {
               "text": "Tăng thuế để có nguồn thu",
               "effects": {
                  "discontent": -11,
                  "conflict": 8,
                  "economy": -17,
                  "environment": 13,
                  "freedom": 5,
                  "security": 6
               }
            },
            {
               "text": "Cắt giảm chi tiêu công",
               "effects": {
                  "discontent": -8,
                  "conflict": -15,
                  "economy": 2,
                  "environment": 19,
                  "freedom": 19,
                  "security": 0
               }
            }
         ]
      },
      {
         "id": 25,
         "text": "Tình huống 25: Công nhân các khu công nghiệp đình công đòi cải thiện điều kiện lao động.",
         "image": "https://picsum.photos/id/75/800/400",
         "choices": [
            {
               "text": "Cắt giảm chi tiêu công",
               "effects": {
                  "discontent": 17,
                  "conflict": 8,
                  "economy": -12,
                  "environment": -2,
                  "freedom": 18,
                  "security": 9
               }
            },
            {
               "text": "Tăng cường truyền thông",
               "effects": {
                  "discontent": 17,
                  "conflict": 2,
                  "economy": -17,
                  "environment": -14,
                  "freedom": -14,
                  "security": -10
               }
            },
            {
               "text": "Tăng cường can thiệp nhà nước",
               "effects": {
                  "discontent": 14,
                  "conflict": 9,
                  "economy": 0,
                  "environment": 10,
                  "freedom": 6,
                  "security": -3
               }
            }
         ]
      },
      {
         "id": 26,
         "text": "Tình huống 26: Ô nhiễm không khí đạt mức nguy hiểm, áp lực từ tổ chức môi trường quốc tế.",
         "image": "https://picsum.photos/id/76/800/400",
         "choices": [
            {
               "text": "Áp dụng biện pháp khẩn cấp",
               "effects": {
                  "discontent": 17,
                  "conflict": -14,
                  "economy": 12,
                  "environment": -18,
                  "freedom": 14,
                  "security": 20
               }
            },
            {
               "text": "Kêu gọi hỗ trợ quốc tế",
               "effects": {
                  "discontent": -5,
                  "conflict": -10,
                  "economy": 14,
                  "environment": -9,
                  "freedom": -8,
                  "security": 0
               }
            },
            {
               "text": "Tăng cường truyền thông",
               "effects": {
                  "discontent": -19,
                  "conflict": -15,
                  "economy": -10,
                  "environment": -18,
                  "freedom": -8,
                  "security": 3
               }
            }
         ]
      },
      {
         "id": 27,
         "text": "Tình huống 27: Cuộc khủng hoảng kinh tế toàn cầu ảnh hưởng nghiêm trọng đến xuất khẩu quốc gia.",
         "image": "https://picsum.photos/id/77/800/400",
         "choices": [
            {
               "text": "Tăng cường can thiệp nhà nước",
               "effects": {
                  "discontent": -8,
                  "conflict": 17,
                  "economy": 15,
                  "environment": 6,
                  "freedom": 6,
                  "security": -9
               }
            },
            {
               "text": "Áp dụng biện pháp khẩn cấp",
               "effects": {
                  "discontent": 18,
                  "conflict": 3,
                  "economy": -16,
                  "environment": -8,
                  "freedom": 5,
                  "security": 14
               }
            }
         ]
      },
      {
         "id": 28,
         "text": "Tình huống 28: Phong trào biểu tình quy mô lớn đòi cải cách chính trị và tăng lương tối thiểu.",
         "image": "https://picsum.photos/id/78/800/400",
         "choices": [
            {
               "text": "Áp dụng biện pháp khẩn cấp",
               "effects": {
                  "discontent": -14,
                  "conflict": -15,
                  "economy": 14,
                  "environment": -13,
                  "freedom": 0,
                  "security": 4
               }
            },
            {
               "text": "Kêu gọi hỗ trợ quốc tế",
               "effects": {
                  "discontent": -6,
                  "conflict": -3,
                  "economy": 2,
                  "environment": 2,
                  "freedom": 9,
                  "security": 12
               }
            },
            {
               "text": "Để thị trường tự điều chỉnh",
               "effects": {
                  "discontent": 6,
                  "conflict": 13,
                  "economy": 18,
                  "environment": 15,
                  "freedom": 19,
                  "security": 5
               }
            }
         ]
      },
      {
         "id": 29,
         "text": "Tình huống 29: Dịch bệnh gia súc làm thiệt hại ngành chăn nuôi, đe dọa an ninh lương thực.",
         "image": "https://picsum.photos/id/79/800/400",
         "choices": [
            {
               "text": "Cắt giảm chi tiêu công",
               "effects": {
                  "discontent": -13,
                  "conflict": 18,
                  "economy": -16,
                  "environment": -8,
                  "freedom": -4,
                  "security": 11
               }
            },
            {
               "text": "Kêu gọi hỗ trợ quốc tế",
               "effects": {
                  "discontent": 10,
                  "conflict": 10,
                  "economy": 3,
                  "environment": -19,
                  "freedom": -10,
                  "security": 7
               }
            },
            {
               "text": "Tăng cường can thiệp nhà nước",
               "effects": {
                  "discontent": 5,
                  "conflict": 19,
                  "economy": -9,
                  "environment": 16,
                  "freedom": -1,
                  "security": -10
               }
            }
         ]
      },
      {
         "id": 30,
         "text": "Tình huống 30: Khủng hoảng năng lượng do thiếu hụt điện nghiêm trọng trong mùa hè.",
         "image": "https://picsum.photos/id/80/800/400",
         "choices": [
            {
               "text": "Đàm phán với các bên liên quan",
               "effects": {
                  "discontent": 9,
                  "conflict": -4,
                  "economy": 18,
                  "environment": 19,
                  "freedom": 13,
                  "security": 19
               }
            },
            {
               "text": "Cắt giảm chi tiêu công",
               "effects": {
                  "discontent": -6,
                  "conflict": -4,
                  "economy": -18,
                  "environment": -12,
                  "freedom": 3,
                  "security": 8
               }
            },
            {
               "text": "Tăng cường can thiệp nhà nước",
               "effects": {
                  "discontent": 8,
                  "conflict": 6,
                  "economy": 5,
                  "environment": -9,
                  "freedom": 15,
                  "security": -17
               }
            }
         ]
      },
      {
         "id": 31,
         "text": "Tình huống 31: Các đại gia công nghệ đòi ưu đãi thuế để không chuyển trụ sở ra nước ngoài.",
         "image": "https://picsum.photos/id/81/800/400",
         "choices": [
            {
               "text": "Tăng cường can thiệp nhà nước",
               "effects": {
                  "discontent": -14,
                  "conflict": 4,
                  "economy": -9,
                  "environment": 7,
                  "freedom": -19,
                  "security": 7
               }
            },
            {
               "text": "Tăng thuế để có nguồn thu",
               "effects": {
                  "discontent": -16,
                  "conflict": -14,
                  "economy": 7,
                  "environment": 20,
                  "freedom": -19,
                  "security": -13
               }
            },
            {
               "text": "Tăng cường truyền thông",
               "effects": {
                  "discontent": -1,
                  "conflict": -6,
                  "economy": 16,
                  "environment": -4,
                  "freedom": -4,
                  "security": -12
               }
            }
         ]
      },
      {
         "id": 32,
         "text": "Tình huống 32: Lạm phát tăng cao, giá cả hàng hóa thiết yếu vượt tầm với của người dân.",
         "image": "https://picsum.photos/id/82/800/400",
         "choices": [
            {
               "text": "Tăng thuế để có nguồn thu",
               "effects": {
                  "discontent": 9,
                  "conflict": 2,
                  "economy": 17,
                  "environment": -10,
                  "freedom": -5,
                  "security": 18
               }
            },
            {
               "text": "Kêu gọi hỗ trợ quốc tế",
               "effects": {
                  "discontent": 9,
                  "conflict": -13,
                  "economy": -12,
                  "environment": -20,
                  "freedom": 9,
                  "security": 20
               }
            }
         ]
      },
      {
         "id": 33,
         "text": "Tình huống 33: Công nhân các khu công nghiệp đình công đòi cải thiện điều kiện lao động.",
         "image": "https://picsum.photos/id/83/800/400",
         "choices": [
            {
               "text": "Kêu gọi hỗ trợ quốc tế",
               "effects": {
                  "discontent": 18,
                  "conflict": 4,
                  "economy": 4,
                  "environment": 17,
                  "freedom": 7,
                  "security": 2
               }
            },
            {
               "text": "Tăng cường truyền thông",
               "effects": {
                  "discontent": 5,
                  "conflict": -5,
                  "economy": 13,
                  "environment": 18,
                  "freedom": 2,
                  "security": 3
               }
            }
         ]
      },
      {
         "id": 34,
         "text": "Tình huống 34: Ô nhiễm không khí đạt mức nguy hiểm, áp lực từ tổ chức môi trường quốc tế.",
         "image": "https://picsum.photos/id/84/800/400",
         "choices": [
            {
               "text": "Đàm phán với các bên liên quan",
               "effects": {
                  "discontent": -9,
                  "conflict": 20,
                  "economy": 17,
                  "environment": -1,
                  "freedom": -14,
                  "security": 3
               }
            },
            {
               "text": "Kêu gọi hỗ trợ quốc tế",
               "effects": {
                  "discontent": -8,
                  "conflict": -11,
                  "economy": -5,
                  "environment": 11,
                  "freedom": 13,
                  "security": -20
               }
            }
         ]
      },
      {
         "id": 35,
         "text": "Tình huống 35: Cuộc khủng hoảng kinh tế toàn cầu ảnh hưởng nghiêm trọng đến xuất khẩu quốc gia.",
         "image": "https://picsum.photos/id/85/800/400",
         "choices": [
            {
               "text": "Tăng cường can thiệp nhà nước",
               "effects": {
                  "discontent": -10,
                  "conflict": 0,
                  "economy": -1,
                  "environment": -18,
                  "freedom": 7,
                  "security": -8
               }
            },
            {
               "text": "Đàm phán với các bên liên quan",
               "effects": {
                  "discontent": 7,
                  "conflict": -4,
                  "economy": 0,
                  "environment": 1,
                  "freedom": 17,
                  "security": 2
               }
            },
            {
               "text": "Cắt giảm chi tiêu công",
               "effects": {
                  "discontent": 15,
                  "conflict": -3,
                  "economy": 3,
                  "environment": -15,
                  "freedom": 1,
                  "security": 0
               }
            }
         ]
      },
      {
         "id": 36,
         "text": "Tình huống 36: Phong trào biểu tình quy mô lớn đòi cải cách chính trị và tăng lương tối thiểu.",
         "image": "https://picsum.photos/id/86/800/400",
         "choices": [
            {
               "text": "Tăng cường can thiệp nhà nước",
               "effects": {
                  "discontent": 16,
                  "conflict": 6,
                  "economy": -16,
                  "environment": -5,
                  "freedom": 14,
                  "security": -9
               }
            },
            {
               "text": "Tăng cường truyền thông",
               "effects": {
                  "discontent": -4,
                  "conflict": -13,
                  "economy": 8,
                  "environment": 17,
                  "freedom": 19,
                  "security": -10
               }
            }
         ]
      },
      {
         "id": 37,
         "text": "Tình huống 37: Dịch bệnh gia súc làm thiệt hại ngành chăn nuôi, đe dọa an ninh lương thực.",
         "image": "https://picsum.photos/id/87/800/400",
         "choices": [
            {
               "text": "Tăng cường truyền thông",
               "effects": {
                  "discontent": 20,
                  "conflict": 6,
                  "economy": -19,
                  "environment": -15,
                  "freedom": -5,
                  "security": 12
               }
            },
            {
               "text": "Tăng thuế để có nguồn thu",
               "effects": {
                  "discontent": -19,
                  "conflict": -18,
                  "economy": -13,
                  "environment": 8,
                  "freedom": 12,
                  "security": 2
               }
            },
            {
               "text": "Để thị trường tự điều chỉnh",
               "effects": {
                  "discontent": -19,
                  "conflict": -1,
                  "economy": 6,
                  "environment": -8,
                  "freedom": 6,
                  "security": -13
               }
            },
            {
               "text": "Cắt giảm chi tiêu công",
               "effects": {
                  "discontent": -17,
                  "conflict": -11,
                  "economy": -13,
                  "environment": -3,
                  "freedom": -3,
                  "security": 12
               }
            }
         ]
      },
      {
         "id": 38,
         "text": "Tình huống 38: Khủng hoảng năng lượng do thiếu hụt điện nghiêm trọng trong mùa hè.",
         "image": "https://picsum.photos/id/88/800/400",
         "choices": [
            {
               "text": "Tăng thuế để có nguồn thu",
               "effects": {
                  "discontent": 18,
                  "conflict": 14,
                  "economy": 1,
                  "environment": 7,
                  "freedom": -6,
                  "security": -9
               }
            },
            {
               "text": "Áp dụng biện pháp khẩn cấp",
               "effects": {
                  "discontent": 0,
                  "conflict": -20,
                  "economy": -1,
                  "environment": 7,
                  "freedom": 20,
                  "security": 10
               }
            },
            {
               "text": "Đàm phán với các bên liên quan",
               "effects": {
                  "discontent": 11,
                  "conflict": 12,
                  "economy": -11,
                  "environment": -11,
                  "freedom": 1,
                  "security": -17
               }
            }
         ]
      },
      {
         "id": 39,
         "text": "Tình huống 39: Các đại gia công nghệ đòi ưu đãi thuế để không chuyển trụ sở ra nước ngoài.",
         "image": "https://picsum.photos/id/89/800/400",
         "choices": [
            {
               "text": "Tăng thuế để có nguồn thu",
               "effects": {
                  "discontent": -13,
                  "conflict": 6,
                  "economy": 19,
                  "environment": 20,
                  "freedom": 6,
                  "security": 9
               }
            },
            {
               "text": "Cắt giảm chi tiêu công",
               "effects": {
                  "discontent": -3,
                  "conflict": -10,
                  "economy": 1,
                  "environment": -1,
                  "freedom": -2,
                  "security": -4
               }
            }
         ]
      },
      {
         "id": 40,
         "text": "Tình huống 40: Lạm phát tăng cao, giá cả hàng hóa thiết yếu vượt tầm với của người dân.",
         "image": "https://picsum.photos/id/90/800/400",
         "choices": [
            {
               "text": "Kêu gọi hỗ trợ quốc tế",
               "effects": {
                  "discontent": 13,
                  "conflict": -5,
                  "economy": 1,
                  "environment": 13,
                  "freedom": 9,
                  "security": 11
               }
            },
            {
               "text": "Tăng thuế để có nguồn thu",
               "effects": {
                  "discontent": 0,
                  "conflict": -14,
                  "economy": -15,
                  "environment": 5,
                  "freedom": 4,
                  "security": -17
               }
            },
            {
               "text": "Tăng cường can thiệp nhà nước",
               "effects": {
                  "discontent": 4,
                  "conflict": 2,
                  "economy": 10,
                  "environment": -8,
                  "freedom": -19,
                  "security": 3
               }
            },
            {
               "text": "Để thị trường tự điều chỉnh",
               "effects": {
                  "discontent": 18,
                  "conflict": 13,
                  "economy": 18,
                  "environment": 5,
                  "freedom": 15,
                  "security": -5
               }
            }
         ]
      },
      {
         "id": 41,
         "text": "Tình huống 41: Công nhân các khu công nghiệp đình công đòi cải thiện điều kiện lao động.",
         "image": "https://picsum.photos/id/91/800/400",
         "choices": [
            {
               "text": "Cắt giảm chi tiêu công",
               "effects": {
                  "discontent": 9,
                  "conflict": 7,
                  "economy": -1,
                  "environment": 13,
                  "freedom": 16,
                  "security": 7
               }
            },
            {
               "text": "Tăng cường can thiệp nhà nước",
               "effects": {
                  "discontent": 9,
                  "conflict": 10,
                  "economy": -10,
                  "environment": 18,
                  "freedom": 1,
                  "security": -13
               }
            },
            {
               "text": "Tăng thuế để có nguồn thu",
               "effects": {
                  "discontent": 8,
                  "conflict": -18,
                  "economy": -9,
                  "environment": 9,
                  "freedom": -7,
                  "security": -3
               }
            },
            {
               "text": "Kêu gọi hỗ trợ quốc tế",
               "effects": {
                  "discontent": -4,
                  "conflict": 8,
                  "economy": 18,
                  "environment": -1,
                  "freedom": -16,
                  "security": 10
               }
            }
         ]
      },
      {
         "id": 42,
         "text": "Tình huống 42: Ô nhiễm không khí đạt mức nguy hiểm, áp lực từ tổ chức môi trường quốc tế.",
         "image": "https://picsum.photos/id/92/800/400",
         "choices": [
            {
               "text": "Tăng cường truyền thông",
               "effects": {
                  "discontent": -7,
                  "conflict": -16,
                  "economy": -9,
                  "environment": 8,
                  "freedom": -2,
                  "security": -19
               }
            },
            {
               "text": "Kêu gọi hỗ trợ quốc tế",
               "effects": {
                  "discontent": -12,
                  "conflict": 14,
                  "economy": 8,
                  "environment": -12,
                  "freedom": 8,
                  "security": 7
               }
            },
            {
               "text": "Đàm phán với các bên liên quan",
               "effects": {
                  "discontent": -18,
                  "conflict": 18,
                  "economy": -2,
                  "environment": -3,
                  "freedom": -3,
                  "security": 5
               }
            },
            {
               "text": "Áp dụng biện pháp khẩn cấp",
               "effects": {
                  "discontent": -11,
                  "conflict": -18,
                  "economy": -5,
                  "environment": -4,
                  "freedom": -16,
                  "security": 4
               }
            }
         ]
      },
      {
         "id": 43,
         "text": "Tình huống 43: Cuộc khủng hoảng kinh tế toàn cầu ảnh hưởng nghiêm trọng đến xuất khẩu quốc gia.",
         "image": "https://picsum.photos/id/93/800/400",
         "choices": [
            {
               "text": "Áp dụng biện pháp khẩn cấp",
               "effects": {
                  "discontent": -10,
                  "conflict": -17,
                  "economy": 20,
                  "environment": -19,
                  "freedom": -4,
                  "security": 7
               }
            },
            {
               "text": "Tăng cường can thiệp nhà nước",
               "effects": {
                  "discontent": 2,
                  "conflict": -6,
                  "economy": -14,
                  "environment": -2,
                  "freedom": -8,
                  "security": 10
               }
            }
         ]
      },
      {
         "id": 44,
         "text": "Tình huống 44: Phong trào biểu tình quy mô lớn đòi cải cách chính trị và tăng lương tối thiểu.",
         "image": "https://picsum.photos/id/94/800/400",
         "choices": [
            {
               "text": "Kêu gọi hỗ trợ quốc tế",
               "effects": {
                  "discontent": -9,
                  "conflict": 8,
                  "economy": 9,
                  "environment": 11,
                  "freedom": -3,
                  "security": 6
               }
            },
            {
               "text": "Đàm phán với các bên liên quan",
               "effects": {
                  "discontent": -3,
                  "conflict": -19,
                  "economy": 17,
                  "environment": -3,
                  "freedom": 7,
                  "security": -9
               }
            },
            {
               "text": "Cắt giảm chi tiêu công",
               "effects": {
                  "discontent": 13,
                  "conflict": 8,
                  "economy": 11,
                  "environment": -1,
                  "freedom": 14,
                  "security": -12
               }
            }
         ]
      },
      {
         "id": 45,
         "text": "Tình huống 45: Dịch bệnh gia súc làm thiệt hại ngành chăn nuôi, đe dọa an ninh lương thực.",
         "image": "https://picsum.photos/id/95/800/400",
         "choices": [
            {
               "text": "Tăng cường can thiệp nhà nước",
               "effects": {
                  "discontent": 15,
                  "conflict": 3,
                  "economy": -9,
                  "environment": 19,
                  "freedom": -11,
                  "security": -2
               }
            },
            {
               "text": "Áp dụng biện pháp khẩn cấp",
               "effects": {
                  "discontent": 19,
                  "conflict": 3,
                  "economy": -15,
                  "environment": 7,
                  "freedom": -13,
                  "security": -2
               }
            },
            {
               "text": "Đàm phán với các bên liên quan",
               "effects": {
                  "discontent": 18,
                  "conflict": 6,
                  "economy": -17,
                  "environment": 18,
                  "freedom": -3,
                  "security": 12
               }
            },
            {
               "text": "Cắt giảm chi tiêu công",
               "effects": {
                  "discontent": 0,
                  "conflict": -5,
                  "economy": -1,
                  "environment": 0,
                  "freedom": 11,
                  "security": 11
               }
            }
         ]
      },
      {
         "id": 46,
         "text": "Tình huống 46: Khủng hoảng năng lượng do thiếu hụt điện nghiêm trọng trong mùa hè.",
         "image": "https://picsum.photos/id/96/800/400",
         "choices": [
            {
               "text": "Cắt giảm chi tiêu công",
               "effects": {
                  "discontent": -10,
                  "conflict": -8,
                  "economy": 12,
                  "environment": 5,
                  "freedom": 20,
                  "security": 17
               }
            },
            {
               "text": "Tăng cường truyền thông",
               "effects": {
                  "discontent": -16,
                  "conflict": 5,
                  "economy": -12,
                  "environment": 20,
                  "freedom": -20,
                  "security": 10
               }
            },
            {
               "text": "Để thị trường tự điều chỉnh",
               "effects": {
                  "discontent": 14,
                  "conflict": 14,
                  "economy": 12,
                  "environment": 13,
                  "freedom": 9,
                  "security": 18
               }
            },
            {
               "text": "Áp dụng biện pháp khẩn cấp",
               "effects": {
                  "discontent": -20,
                  "conflict": 15,
                  "economy": 8,
                  "environment": -7,
                  "freedom": -18,
                  "security": -5
               }
            }
         ]
      },
      {
         "id": 47,
         "text": "Tình huống 47: Các đại gia công nghệ đòi ưu đãi thuế để không chuyển trụ sở ra nước ngoài.",
         "image": "https://picsum.photos/id/97/800/400",
         "choices": [
            {
               "text": "Đàm phán với các bên liên quan",
               "effects": {
                  "discontent": -20,
                  "conflict": -17,
                  "economy": 4,
                  "environment": -16,
                  "freedom": 16,
                  "security": -13
               }
            },
            {
               "text": "Áp dụng biện pháp khẩn cấp",
               "effects": {
                  "discontent": 0,
                  "conflict": -4,
                  "economy": 19,
                  "environment": -20,
                  "freedom": 2,
                  "security": 17
               }
            },
            {
               "text": "Tăng thuế để có nguồn thu",
               "effects": {
                  "discontent": -15,
                  "conflict": 1,
                  "economy": 14,
                  "environment": 14,
                  "freedom": -10,
                  "security": 13
               }
            },
            {
               "text": "Cắt giảm chi tiêu công",
               "effects": {
                  "discontent": 4,
                  "conflict": 10,
                  "economy": 3,
                  "environment": 7,
                  "freedom": -13,
                  "security": 6
               }
            }
         ]
      },
      {
         "id": 48,
         "text": "Tình huống 48: Lạm phát tăng cao, giá cả hàng hóa thiết yếu vượt tầm với của người dân.",
         "image": "https://picsum.photos/id/98/800/400",
         "choices": [
            {
               "text": "Áp dụng biện pháp khẩn cấp",
               "effects": {
                  "discontent": 6,
                  "conflict": -4,
                  "economy": -10,
                  "environment": 20,
                  "freedom": 4,
                  "security": 19
               }
            },
            {
               "text": "Tăng thuế để có nguồn thu",
               "effects": {
                  "discontent": 0,
                  "conflict": -9,
                  "economy": -4,
                  "environment": -7,
                  "freedom": 9,
                  "security": 11
               }
            }
         ]
      },
      {
         "id": 49,
         "text": "Tình huống 49: Công nhân các khu công nghiệp đình công đòi cải thiện điều kiện lao động.",
         "image": "https://picsum.photos/id/99/800/400",
         "choices": [
            {
               "text": "Tăng cường truyền thông",
               "effects": {
                  "discontent": -12,
                  "conflict": 7,
                  "economy": 17,
                  "environment": 14,
                  "freedom": -14,
                  "security": -15
               }
            },
            {
               "text": "Cắt giảm chi tiêu công",
               "effects": {
                  "discontent": -18,
                  "conflict": 12,
                  "economy": -13,
                  "environment": -16,
                  "freedom": 5,
                  "security": 7
               }
            }
         ]
      },
      {
         "id": 50,
         "text": "Tình huống 50: Ô nhiễm không khí đạt mức nguy hiểm, áp lực từ tổ chức môi trường quốc tế.",
         "image": "https://picsum.photos/id/100/800/400",
         "choices": [
            {
               "text": "Áp dụng biện pháp khẩn cấp",
               "effects": {
                  "discontent": 11,
                  "conflict": -5,
                  "economy": 15,
                  "environment": -14,
                  "freedom": 19,
                  "security": 2
               }
            },
            {
               "text": "Tăng cường can thiệp nhà nước",
               "effects": {
                  "discontent": -12,
                  "conflict": -8,
                  "economy": 17,
                  "environment": -10,
                  "freedom": 2,
                  "security": -4
               }
            },
            {
               "text": "Tăng thuế để có nguồn thu",
               "effects": {
                  "discontent": 0,
                  "conflict": 4,
                  "economy": -6,
                  "environment": -8,
                  "freedom": 10,
                  "security": -19
               }
            },
            {
               "text": "Để thị trường tự điều chỉnh",
               "effects": {
                  "discontent": 4,
                  "conflict": -13,
                  "economy": 13,
                  "environment": 17,
                  "freedom": 13,
                  "security": 4
               }
            }
         ]
      }
   ],

   randomEvents: [
      {
         "id": 1,
         "title": "SIÊU BÃO YAGI TẤN CÔNG MIỀN BẮC!",
         "text": "Siêu bão cấp 16 đổ bộ miền Bắc, gió 200km/h. Hàng triệu người cần sơ tán khẩn cấp, thiệt hại hạ tầng nghiêm trọng!",
         "image": "https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=800&q=80",
         "effects": {
            "discontent": 15,
            "conflict": 5,
            "economy": -25,
            "environment": -20,
            "freedom": -10,
            "security": -15
         },
         "rarity": "common"
      },
      {
         "id": 2,
         "title": "PHÁT HIỆN MỎ DẦU KHỔNG LỒ BIỂN ĐÔNG!",
         "text": "Tập đoàn dầu khí phát hiện mỏ dầu trữ lượng 8 tỷ thùng ngoài khơ Vũng Tàu!",
         "image": "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&q=80",
         "effects": {
            "discontent": -20,
            "conflict": -5,
            "economy": 30,
            "environment": -15,
            "freedom": 5,
            "security": 15
         },
         "rarity": "rare"
      },
      {
         "id": 3,
         "title": "DỊCH CORONA BIẾN CHỦNG MỚI!",
         "text": "Phát hiện biến chủng COVID-26 lây lan nhanh gấp 3 lần, WHO tuyên bố tình trạng khẩn cấp!",
         "image": "https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?w=800&q=80",
         "effects": {
            "discontent": 25,
            "conflict": 10,
            "economy": -30,
            "environment": 5,
            "freedom": -25,
            "security": -10
         },
         "rarity": "common"
      },
      {
         "id": 4,
         "title": "ĐỘI TUYỂN VIỆT NAM VÔ ĐỊCH WORLD CUP!",
         "text": "Đội tuyển Việt Nam tạo địa chấn lịch sử, đánh bại Pháp 2-1 tại chung kết World Cup 2026!",
         "image": "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=800&q=80",
         "effects": {
            "discontent": -30,
            "conflict": -15,
            "economy": 15,
            "environment": 0,
            "freedom": 20,
            "security": 10
         },
         "rarity": "legendary"
      },
      {
         "id": 5,
         "title": "TỔNG BÍ THƯ NGUYỄN PHÚ TRỌNG QUA ĐỜI!",
         "text": "Tổng Bí thư Nguyễn Phú Trọng qua đời, cả nước tang lễ quốc gia, chuyển giao quyền lực diễn ra ổn định!",
         "image": "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&q=80",
         "effects": {
            "discontent": 10,
            "conflict": 8,
            "economy": -5,
            "environment": 0,
            "freedom": 5,
            "security": -10
         },
         "rarity": "epic"
      },
      {
         "id": 6,
         "title": "NVIDIA ĐẦU TƯ 50 TỶ USD VÀO VIỆT NAM!",
         "text": "NVIDIA công bố đầu tư 50 tỷ USD xây dựng trung tâm AI và semiconductor lớn nhất châu Á tại Việt Nam!",
         "image": "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=800&q=80",
         "effects": {
            "discontent": -15,
            "conflict": -5,
            "economy": 35,
            "environment": -10,
            "freedom": 10,
            "security": 15
         },
         "rarity": "epic"
      },
      {
         "id": 7,
         "title": "TẤN CÔNG MẠNG QUY MÔ LỚN!",
         "text": "Nhóm hacker quốc tế tấn công hệ thống ngân hàng, rò rỉ 100 triệu thông tin cá nhân và 5000 tỷ tiền mặt!",
         "image": "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&q=80",
         "effects": {
            "discontent": 30,
            "conflict": 15,
            "economy": -25,
            "environment": 0,
            "freedom": -15,
            "security": -30
         },
         "rarity": "common"
      },
      {
         "id": 8,
         "title": "VIỆT NAM THƯƠNG MẠI HÓA 5G TOÀN QUỐC!",
         "text": "Viettel và VNPT chính thức thương mại hóa 5G toàn quốc, tốc độ internet tăng 100 lần, cách mạng số bắt đầu!",
         "image": "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
         "effects": {
            "discontent": -10,
            "conflict": -5,
            "economy": 25,
            "environment": -5,
            "freedom": 15,
            "security": 10
         },
         "rarity": "common"
      },
      {
         "id": 9,
         "title": "LẠM PHÁT TĂNG VỌT 18%!",
         "text": "Giá cả hàng hóa tăng chóng mặt, lương tối thiểu không theo kịp chi phí sinh hoạt, người dân biểu tình!",
         "image": "https://images.unsplash.com/photo-1559526324-593bc073d938?w=800&q=80",
         "effects": {
            "discontent": 35,
            "conflict": 25,
            "economy": -30,
            "environment": 0,
            "freedom": 0,
            "security": -15
         },
         "rarity": "common"
      },
      {
         "id": 10,
         "title": "ĐỘNG ĐẤT 7.8 RICHTER TẠI VIỆT NAM!",
         "text": "Động đất 7.8 Richter rung chuyển miền Bắc, cảnh báo sóng thần cao 8m sắp tới, hàng triệu người sơ tán!",
         "image": "https://images.unsplash.com/photo-1564415315949-7a0c4c73aab4?w=800&q=80",
         "effects": {
            "discontent": 25,
            "conflict": 20,
            "economy": -35,
            "environment": -25,
            "freedom": -20,
            "security": -25
         },
         "rarity": "rare"
      },
      {
         "id": 11,
         "title": "ĐỀ ÁN ĐƯỜNG SẮT CAO TỐC BẮC-NAM!",
         "text": "Quốc hội thông qua đầu tư 58 tỷ USD xây dựng đường sắt cao tốc Bắc-Nam, tạo đột phá hạ tầng!",
         "image": "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=800&q=80",
         "effects": {
            "discontent": -15,
            "conflict": -10,
            "economy": 30,
            "environment": -15,
            "freedom": 5,
            "security": 10
         },
         "rarity": "epic"
      },
      {
         "id": 12,
         "title": "MẤT ĐIỆN TOÀN QUỐC 8 TIẾNG!",
         "text": "Sự cố lưới điện khiến 90% lãnh thổ mất điện 8 tiếng liên tục, tê liệt toàn bộ hoạt động kinh tế!",
         "image": "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=800&q=80",
         "effects": {
            "discontent": 30,
            "conflict": 20,
            "economy": -25,
            "environment": 5,
            "freedom": -10,
            "security": -20
         },
         "rarity": "common"
      },
      {
         "id": 13,
         "title": "VINFAST BÁN 1 TRIỆU XE ĐIỆN!",
         "text": "VinFast đạt mốc 1 triệu xe điện bán ra toàn cầu, trở thành Tesla của châu Á, cổ phiếu tăng 500%!",
         "image": "https://images.unsplash.com/photo-1593941707882-a5bac6861d75?w=800&q=80",
         "effects": {
            "discontent": -20,
            "conflict": -10,
            "economy": 25,
            "environment": 20,
            "freedom": 10,
            "security": 5
         },
         "rarity": "rare"
      },
      {
         "id": 14,
         "title": "ỨNG DỤNG ZALO BỊ HACK TOÀN BỘ!",
         "text": "Zalo với 75 triệu người dùng bị hack hoàn toàn, toàn bộ tin nhắn và thông tin cá nhân bị rò rỉ!",
         "image": "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&q=80",
         "effects": {
            "discontent": 25,
            "conflict": 15,
            "economy": -15,
            "environment": 0,
            "freedom": -20,
            "security": -25
         },
         "rarity": "common"
      },
      {
         "id": 15,
         "title": "PHIM 'TRƯNG VƯƠNG' THẮNG OSCAR!",
         "text": "Phim 'Trưng Vương' của đạo diễn Trần Anh Hùng giành Oscar Phim hay nhất, làm rạng danh điện ảnh Việt!",
         "image": "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=800&q=80",
         "effects": {
            "discontent": -25,
            "conflict": -15,
            "economy": 15,
            "environment": 0,
            "freedom": 20,
            "security": 5
         },
         "rarity": "rare"
      },
      {
         "id": 16,
         "title": "LŨ LỤT MIỀN TRUNG LỊCH SỬ!",
         "text": "Bão số 10 gây mưa lũ lịch sử tại miền Trung, 200 người chết, 5 triệu người bị ảnh hưởng!",
         "image": "https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=800&q=80",
         "effects": {
            "discontent": 20,
            "conflict": 10,
            "economy": -30,
            "environment": -20,
            "freedom": -5,
            "security": -15
         },
         "rarity": "common"
      },
      {
         "id": 17,
         "title": "NẮNG NÓNG KỶ LỤC 48°C!",
         "text": "Nhiệt độ cao kỷ lục 48°C kéo dài 3 tuần tại miền Bắc, hệ thống điện quá tải, cháy rừng lan rộng!",
         "image": "https://images.unsplash.com/photo-1504370805625-d32c54b16100?w=800&q=80",
         "effects": {
            "discontent": 25,
            "conflict": 15,
            "economy": -20,
            "environment": -25,
            "freedom": -10,
            "security": -15
         },
         "rarity": "common"
      },
      {
         "id": 18,
         "title": "METRO HÀNH LANG XANH VẬN HÀNH!",
         "text": "Tuyến Metro Nhổn - Ga Hà Nội chính thức vận hành, giảm 70% ùn tắc giao thông, dân chúng hân hoan!",
         "image": "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=800&q=80",
         "effects": {
            "discontent": -20,
            "conflict": -10,
            "economy": 15,
            "environment": 15,
            "freedom": 10,
            "security": 5
         },
         "rarity": "common"
      },
      {
         "id": 19,
         "title": "KHÁM PHÁ KHO BÁU NGUYỄN VUA!",
         "text": "Phát hiện kho báu 500 tấn vàng của các vua Nguyễn tại Huế, giá trị ước tính 1000 tỷ USD!",
         "image": "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=800&q=80",
         "effects": {
            "discontent": -15,
            "conflict": 5,
            "economy": 40,
            "environment": 0,
            "freedom": 10,
            "security": -5
         },
         "rarity": "legendary"
      },
      {
         "id": 20,
         "title": "ĐẢO NHÂN TẠO PHÚ QUỐC MỞ RỘNG!",
         "text": "Hoàn thành đảo nhân tạo 15,000 hecta, tạo ra 'Singapore mới' của Việt Nam, thu hút 50 tỷ USD FDI!",
         "image": "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&q=80",
         "effects": {
            "discontent": -10,
            "conflict": 0,
            "economy": 35,
            "environment": -20,
            "freedom": 10,
            "security": 15
         },
         "rarity": "epic"
      },
      {
         "id": 101,
         "title": "GÓI KÍCH THÍCH KINH TẾ 200 TỶ USD!",
         "text": "Chính phủ quyết định bơm 200 tỷ USD vào nền kinh tế chống suy thoái. Ngân hàng trung ương giảm lãi suất về 0%!",
         "image": "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=800&q=80",
         "effects": {
            "discontent": -15,
            "conflict": -10,
            "economy": 40,
            "environment": -10,
            "freedom": 0,
            "security": 10
         },
         "rarity": "conditional",
         "triggerCondition": {
            "economy": 25
         },
         "category": "economicstimulus"
      },
      {
         "id": 102,
         "title": "CHƯƠNG TRÌNH CÔNG NGHIỆP HÓA 4.0!",
         "text": "Khởi động kế hoạch 10 năm xây dựng 2000 nhà máy thông minh, tạo 10 triệu việc làm chất lượng cao!",
         "image": "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80",
         "effects": {
            "discontent": -20,
            "conflict": -10,
            "economy": 35,
            "environment": -20,
            "freedom": -5,
            "security": 15
         },
         "rarity": "conditional",
         "triggerCondition": {
            "economy": 40
         },
         "category": "industrialization"
      },
      {
         "id": 103,
         "title": "TUYÊN BỐ THIẾT QUÂN LUẬT TOÀN QUỐC!",
         "text": "Quân đội được triển khai toàn quốc, giới nghiêm từ 20h-6h. Tất cả biểu tình bị cấm, truyền thông bị kiểm duyệt!",
         "image": "https://images.unsplash.com/photo-1526558829113-b118b3889c6c?w=800&q=80",
         "effects": {
            "discontent": 25,
            "conflict": -30,
            "economy": -15,
            "environment": 0,
            "freedom": -40,
            "security": 40
         },
         "rarity": "conditional",
         "triggerCondition": {
            "conflict": 75
         },
         "category": "martiallaw"
      },
      {
         "id": 21,
         "title": "CHUYỂN ĐỔI SỐ QUỐC GIA HOÀN TẤT!",
         "text": "Việt Nam hoàn tất chuyển đổi số 100% dịch vụ công, trở thành quốc gia đầu tiên trong khu vực đạt 'Digital Government 5.0'!",
         "image": "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80",
         "effects": {
            "discontent": -20,
            "conflict": -10,
            "economy": 30,
            "environment": 5,
            "freedom": 15,
            "security": 20
         },
         "rarity": "epic"
      },
      {
         "id": 22,
         "title": "ĐÀO BITCOIN ILLEGAL QUY MÔ LỚN!",
         "text": "Phát hiện trang trại đào bitcoin bất hợp pháp tiêu thụ điện bằng cả thành phố Đà Nẵng, gây thiếu điện toàn miền Bắc!",
         "image": "https://images.unsplash.com/photo-1621761191319-c6fb62004040?w=800&q=80",
         "effects": {
            "discontent": 20,
            "conflict": 15,
            "economy": -20,
            "environment": -25,
            "freedom": -15,
            "security": -20
         },
         "rarity": "common"
      },
      {
         "id": 23,
         "title": "AI CHAT GPT VIỆT NAM RA MẮT!",
         "text": "VinGroup ra mắt VinAI - trợ lý AI tiếng Việt vượt trội ChatGPT, có 500 triệu người dùng trong 3 tháng đầu!",
         "image": "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80",
         "effects": {
            "discontent": -15,
            "conflict": -5,
            "economy": 25,
            "environment": 0,
            "freedom": 10,
            "security": 15
         },
         "rarity": "rare"
      },
      {
         "id": 24,
         "title": "CHÁY RỪNG U MINH HẠ KHỦNG KHIẾP!",
         "text": "Cháy rừng U Minh Hạ kéo dài 2 tuần, 50,000 hecta bị thiêu rụi, khói độc bao phủ 5 tỉnh miền Tây!",
         "image": "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80",
         "effects": {
            "discontent": 25,
            "conflict": 10,
            "economy": -20,
            "environment": -35,
            "freedom": -10,
            "security": -15
         },
         "rarity": "common"
      },
      {
         "id": 25,
         "title": "THAM NHŨNG CỰC TRƯỞNG HẢI QUAN!",
         "text": "Cục trưởng Tổng cục Hải quan bị bắt vì nhận hối lộ 2000 tỷ từ các doanh nghiệp xuất nhập khẩu!",
         "image": "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800&q=80",
         "effects": {
            "discontent": 30,
            "conflict": 20,
            "economy": -15,
            "environment": 0,
            "freedom": -10,
            "security": -25
         },
         "rarity": "common"
      },
      {
         "id": 26,
         "title": "SAMSUNG ĐẦU TƯ THÊM 30 TỶ USD!",
         "text": "Samsung quyết định đầu tư thêm 30 tỷ USD mở rộng nhà máy sản xuất chip tại Bắc Ninh và TP.HCM!",
         "image": "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=800&q=80",
         "effects": {
            "discontent": -15,
            "conflict": -5,
            "economy": 35,
            "environment": -15,
            "freedom": 5,
            "security": 10
         },
         "rarity": "epic"
      },
      {
         "id": 27,
         "title": "GIẢI PHẪ BĂNG ĐẢNG MA TÚY XÀ PHÒNG!",
         "text": "Công an triệt phá đường dây ma túy 'xà phòng' quy mô 500kg, trị giá 15,000 tỷ, bắt giữ 200 đối tượng!",
         "image": "https://images.unsplash.com/photo-1559526324-593bc073d938?w=800&q=80",
         "effects": {
            "discontent": -20,
            "conflict": -15,
            "economy": 10,
            "environment": 5,
            "freedom": 0,
            "security": 30
         },
         "rarity": "rare"
      },
      {
         "id": 28,
         "title": "HẠN HÁN KHỦNG KHIẾP ĐỒNG BẰNG SÔNG CỬU LONG!",
         "text": "Hạn hán kéo dài 6 tháng, mực nước sông Mekong xuống thấp kỷ lục, 2 triệu ha lúa bị thiệt hại!",
         "image": "https://images.unsplash.com/photo-1504370805625-d32c54b16100?w=800&q=80",
         "effects": {
            "discontent": 30,
            "conflict": 20,
            "economy": -35,
            "environment": -30,
            "freedom": -5,
            "security": -15
         },
         "rarity": "common"
      },
      {
         "id": 29,
         "title": "PHÁT HIỆN LOÀI KHỦNG LONG MỚI!",
         "text": "Paleontologists phát hiện hóa thạch khủng long mới 150 triệu năm tuổi tại Lạng Sơn, định danh 'Vietnamasaurus'!",
         "image": "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&q=80",
         "effects": {
            "discontent": -10,
            "conflict": -5,
            "economy": 15,
            "environment": 10,
            "freedom": 15,
            "security": 0
         },
         "rarity": "rare"
      },
      {
         "id": 30,
         "title": "CẢNG HÀNG KHÔNG LONG THÀNH KHAI TRƯƠNG!",
         "text": "Cảng hàng không Long Thành giai đoạn 1 chính thức khai trương, công suất 25 triệu khách/năm!",
         "image": "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800&q=80",
         "effects": {
            "discontent": -25,
            "conflict": -10,
            "economy": 40,
            "environment": -20,
            "freedom": 15,
            "security": 20
         },
         "rarity": "epic"
      },
      {
         "id": 31,
         "title": "SCAM TIỀN ĐIỆN TỬ 50,000 TỶ!",
         "text": "Phát hiện đường dây lừa đảo tiền điện tử lớn nhất lịch sử với 50,000 tỷ, hại 2 triệu người!",
         "image": "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&q=80",
         "effects": {
            "discontent": 40,
            "conflict": 25,
            "economy": -30,
            "environment": 0,
            "freedom": -15,
            "security": -35
         },
         "rarity": "common"
      },
      {
         "id": 32,
         "title": "ĐỘI TUYỂN ESPORTS VÔ ĐỊCH THẾ GIỚI!",
         "text": "Team Flash giành chức vô địch World Championship Mobile Legends, thu về 10 triệu USD tiền thưởng!",
         "image": "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800&q=80",
         "effects": {
            "discontent": -20,
            "conflict": -10,
            "economy": 10,
            "environment": 0,
            "freedom": 15,
            "security": 5
         },
         "rarity": "rare"
      },
      {
         "id": 33,
         "title": "PHÁT HIỆN DẦU SHALE 100 TỶ THÙNG!",
         "text": "Khám phá mỏ dầu shale khổng lồ 100 tỷ thùng tại vịnh Bắc Bộ, lớn gấp 20 lần mỏ Bạch Hổ!",
         "image": "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&q=80",
         "effects": {
            "discontent": -25,
            "conflict": 10,
            "economy": 50,
            "environment": -25,
            "freedom": 5,
            "security": 20
         },
         "rarity": "legendary"
      },
      {
         "id": 34,
         "title": "DỊCH CÚMA H7N9 BẮC BỘ!",
         "text": "Virus cúm gia cầm H7N9 đột biến lây người, WHO cảnh báo nguy cơ đại dịch cấp độ 4!",
         "image": "https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?w=800&q=80",
         "effects": {
            "discontent": 35,
            "conflict": 20,
            "economy": -40,
            "environment": -10,
            "freedom": -30,
            "security": -20
         },
         "rarity": "common"
      },
      {
         "id": 35,
         "title": "QUANTUM INTERNET VIỆT NAM!",
         "text": "Viettel thành công triển khai mạng internet lượng tử đầu tiên Đông Nam Á, tốc độ 1000 Gbps!",
         "image": "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=800&q=80",
         "effects": {
            "discontent": -15,
            "conflict": -10,
            "economy": 30,
            "environment": 0,
            "freedom": 20,
            "security": 25
         },
         "rarity": "epic"
      },
      {
         "id": 36,
         "title": "BÃO THÉP CATEGORY 6 TẤN CÔNG!",
         "text": "Siêu bão Molave II cấp 6 (chưa từng có) với gió 350km/h sắp đổ bộ, toàn miền Bắc sơ tán khẩn cấp!",
         "image": "https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=800&q=80",
         "effects": {
            "discontent": 40,
            "conflict": 25,
            "economy": -50,
            "environment": -40,
            "freedom": -25,
            "security": -30
         },
         "rarity": "legendary"
      },
      {
         "id": 37,
         "title": "CÔNG NGHỆ GEN EDITING CHO LÚA!",
         "text": "Viện Lúa Việt Nam tạo thành công giống lúa biến đổi gen chống lũ, năng suất gấp 3 lần!",
         "image": "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=800&q=80",
         "effects": {
            "discontent": -10,
            "conflict": 5,
            "economy": 25,
            "environment": 15,
            "freedom": -5,
            "security": 10
         },
         "rarity": "rare"
      },
      {
         "id": 38,
         "title": "VINPEARL SAFARI MỞ RỘNG CHÂU PHI!",
         "text": "VinGroup mở rộng chuỗi VinPearl Safari sang Kenya, đầu tư 5 tỷ USD bảo tồn động vật hoang dã!",
         "image": "https://images.unsplash.com/photo-1549366021-9f761d040a94?w=800&q=80",
         "effects": {
            "discontent": -10,
            "conflict": 0,
            "economy": 20,
            "environment": 25,
            "freedom": 10,
            "security": 5
         },
         "rarity": "rare"
      },
      {
         "id": 39,
         "title": "FACEBOOK VÀ GOOGLE BỊ CHẶN!",
         "text": "Chính phủ quyết định chặn Facebook và Google do vi phạm luật an ninh mạng, 90 triệu người bức xúc!",
         "image": "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&q=80",
         "effects": {
            "discontent": 45,
            "conflict": 35,
            "economy": -25,
            "environment": 0,
            "freedom": -40,
            "security": 20
         },
         "rarity": "common"
      },
      {
         "id": 40,
         "title": "ROBOT THAY THẾ 50% LAO ĐỘNG!",
         "text": "Cuộc cách mạng AI-Robot khiến 50% lao động Việt Nam bị thay thế, 25 triệu người thất nghiệp!",
         "image": "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&q=80",
         "effects": {
            "discontent": 40,
            "conflict": 30,
            "economy": 20,
            "environment": 10,
            "freedom": -10,
            "security": -25
         },
         "rarity": "common"
      },
      {
         "id": 41,
         "title": "VINFAST MỞ NHÀN MÁY TẠI MỸ!",
         "text": "VinFast chính thức khánh thành nhà máy tại North Carolina, sản xuất 300,000 xe/năm cho thị trường Mỹ!",
         "image": "https://images.unsplash.com/photo-1593941707882-a5bac6861d75?w=800&q=80",
         "effects": {
            "discontent": -20,
            "conflict": -10,
            "economy": 35,
            "environment": 15,
            "freedom": 15,
            "security": 10
         },
         "rarity": "epic"
      },
      {
         "id": 42,
         "title": "CHÌM TÀU DU LỊCH HẠ LONG!",
         "text": "Du thuyền 5 sao chở 200 khách Trung Quốc chìm tại vịnh Hạ Long, 50 người mất tích!",
         "image": "https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=800&q=80",
         "effects": {
            "discontent": 25,
            "conflict": 15,
            "economy": -25,
            "environment": -15,
            "freedom": -5,
            "security": -20
         },
         "rarity": "common"
      },
      {
         "id": 43,
         "title": "KHÁM PHÁ HANG ĐỘNG SÂU NHẤT THẾ GIỚI!",
         "text": "Phát hiện hang động sâu 2000m tại Phong Nha, phá kỷ lục thế giới, thu hút 10 triệu du khách/năm!",
         "image": "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80",
         "effects": {
            "discontent": -15,
            "conflict": 0,
            "economy": 25,
            "environment": 20,
            "freedom": 10,
            "security": 5
         },
         "rarity": "rare"
      },
      {
         "id": 44,
         "title": "TRỊ GIÁ ĐỒNG VIỆT NAM SỤP ĐỔ!",
         "text": "VND mất giá 50% so với USD trong 3 tháng, lạm phát tăng vọt 25%, kinh tế rơi vào khủng hoảng!",
         "image": "https://images.unsplash.com/photo-1559526324-593bc073d938?w=800&q=80",
         "effects": {
            "discontent": 45,
            "conflict": 35,
            "economy": -45,
            "environment": 0,
            "freedom": -15,
            "security": -25
         },
         "rarity": "common"
      },
      {
         "id": 45,
         "title": "CÔNG VIÊN GIẢI TRÍ DISNEY VIỆT NAM!",
         "text": "Disney chính thức ký hợp đồng xây dựng công viên giải trí 15 tỷ USD tại Đồng Nai!",
         "image": "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=800&q=80",
         "effects": {
            "discontent": -25,
            "conflict": -10,
            "economy": 30,
            "environment": -15,
            "freedom": 20,
            "security": 10
         },
         "rarity": "epic"
      },
      {
         "id": 46,
         "title": "KHỔ QUA ĐƯỢC UNESCO CÔNG NHẬN!",
         "text": "Khổ qua đắng Việt Nam được UNESCO công nhận là 'Siêu thực phẩm toàn cầu', xuất khẩu tăng 1000%!",
         "image": "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=800&q=80",
         "effects": {
            "discontent": -15,
            "conflict": -5,
            "economy": 25,
            "environment": 15,
            "freedom": 10,
            "security": 5
         },
         "rarity": "rare"
      },
      {
         "id": 47,
         "title": "SỤTT LỞ ĐẤT QUY MÔ LỚN MIỀN NÚI!",
         "text": "Sạt lở đất khủng khiếp tại 6 tỉnh miền núi phía Bắc, 300 người chết, 1000 người mất tích!",
         "image": "https://images.unsplash.com/photo-1564415315949-7a0c4c73aab4?w=800&q=80",
         "effects": {
            "discontent": 35,
            "conflict": 25,
            "economy": -30,
            "environment": -25,
            "freedom": -15,
            "security": -25
         },
         "rarity": "common"
      },
      {
         "id": 48,
         "title": "SPACE X PHÓNG VỆ TINH VIỆT NAM!",
         "text": "SpaceX phóng thành công 50 vệ tinh viễn thông VietSat cho Viettel, phủ sóng toàn cầu!",
         "image": "https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?w=800&q=80",
         "effects": {
            "discontent": -10,
            "conflict": -5,
            "economy": 20,
            "environment": 0,
            "freedom": 15,
            "security": 25
         },
         "rarity": "rare"
      },
      {
         "id": 49,
         "title": "NHẬT BẢN ĐẦU TƯ SHINKANSEN VIỆT NAM!",
         "text": "Nhật Bản quyết định đầu tư 100 tỷ USD xây dựng tàu cao tốc Shinkansen tuyến Hà Nội - TP.HCM!",
         "image": "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=800&q=80",
         "effects": {
            "discontent": -20,
            "conflict": -10,
            "economy": 40,
            "environment": -10,
            "freedom": 10,
            "security": 15
         },
         "rarity": "epic"
      },
      {
         "id": 50,
         "title": "ĐẶC ZONE KINH TẾ VÂN ĐỒN - PHÚC QUỐC!",
         "text": "Chính phủ phê duyệt đặc khu kinh tế Vân Đồn - Phú Quốc với chế độ 'một quốc gia, hai thể chế'!",
         "image": "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&q=80",
         "effects": {
            "discontent": 15,
            "conflict": 20,
            "economy": 35,
            "environment": -15,
            "freedom": -10,
            "security": -5
         },
         "rarity": "epic"
      },
      {
         "id": 51,
         "title": "FESTIVAL ÂM NHẠC QUỐC TẾ HÀ NỘI!",
         "text": "Hà Nội tổ chức festival âm nhạc quốc tế lớn nhất châu Á với 500 nghệ sĩ, thu hút 5 triệu khách!",
         "image": "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&q=80",
         "effects": {
            "discontent": -20,
            "conflict": -10,
            "economy": 20,
            "environment": -5,
            "freedom": 25,
            "security": 0
         },
         "rarity": "rare"
      },
      {
         "id": 52,
         "title": "THIÊN THẠCH RƠI XUỐNG VIỆT NAM!",
         "text": "Thiên thạch khối lượng 50 tấn rơi xuống biển Quy Nhon, tạo sóng thần cao 15m, thiệt hại khủng khiếp!",
         "image": "https://images.unsplash.com/photo-1446776743709-bff93679c27d?w=800&q=80",
         "effects": {
            "discontent": 40,
            "conflict": 30,
            "economy": -40,
            "environment": -30,
            "freedom": -20,
            "security": -35
         },
         "rarity": "legendary"
      },
      {
         "id": 53,
         "title": "BAMBOO AIRWAYS IPO 50 TỶ USD!",
         "text": "Bamboo Airways IPO thành công 50 tỷ USD trên sàn NASDAQ, trở thành hãng hàng không giá trị nhất châu Á!",
         "image": "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800&q=80",
         "effects": {
            "discontent": -15,
            "conflict": -5,
            "economy": 30,
            "environment": -10,
            "freedom": 15,
            "security": 10
         },
         "rarity": "epic"
      },
      {
         "id": 54,
         "title": "CHIẾN TRANH MẠNG TỪ TRUNG QUỐC!",
         "text": "Hackers Trung Quốc tấn công 1000 hệ thống chính phủ, đánh cắp dữ liệu 95 triệu công dân Việt Nam!",
         "image": "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&q=80",
         "effects": {
            "discontent": 40,
            "conflict": 35,
            "economy": -20,
            "environment": 0,
            "freedom": -25,
            "security": -40
         },
         "rarity": "common"
      },
      {
         "id": 55,
         "title": "UBER AIR VIỆT NAM THỬ NGHIỆM!",
         "text": "Uber Air thử nghiệm taxi bay đầu tiên tại TP.HCM, 15 phút từ sân bay Tân Sơn Nhất tới trung tâm!",
         "image": "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=800&q=80",
         "effects": {
            "discontent": -10,
            "conflict": 0,
            "economy": 25,
            "environment": 15,
            "freedom": 15,
            "security": 5
         },
         "rarity": "rare"
      },
      {
         "id": 56,
         "title": "VIETCOMBANK HACK MẤT 100,000 TỶ!",
         "text": "Vietcombank bị hack, mất trắng 100,000 tỷ VND, hệ thống ngân hàng toàn quốc tê liệt 3 ngày!",
         "image": "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&q=80",
         "effects": {
            "discontent": 45,
            "conflict": 30,
            "economy": -40,
            "environment": 0,
            "freedom": -20,
            "security": -45
         },
         "rarity": "common"
      },
      {
         "id": 57,
         "title": "MADE IN VIETNAM IPHONE 16!",
         "text": "Apple chính thức chuyển 80% sản xuất iPhone từ Trung Quốc sang Việt Nam, tạo 500,000 việc làm!",
         "image": "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=800&q=80",
         "effects": {
            "discontent": -25,
            "conflict": -10,
            "economy": 45,
            "environment": -20,
            "freedom": 10,
            "security": 15
         },
         "rarity": "epic"
      },
      {
         "id": 58,
         "title": "KHÁM PHÁ THÀNH PHỐ MAYA CỔ ĐẠI!",
         "text": "Khảo cổ học phát hiện thành phố Maya cổ đại 3000 năm tuổi tại tỉnh Lai Châu, chấn động thế giới!",
         "image": "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&q=80",
         "effects": {
            "discontent": -10,
            "conflict": 0,
            "economy": 20,
            "environment": 15,
            "freedom": 15,
            "security": 5
         },
         "rarity": "legendary"
      },
      {
         "id": 59,
         "title": "BÙ NỔ HẠT NHÂN NHA TRANG!",
         "text": "Lò phản ứng hạt nhân Đà Lạt bị rò rỉ phóng xạ, toàn bộ Nha Trang sơ tán trong bán kính 50km!",
         "image": "https://images.unsplash.com/photo-1564415315949-7a0c4c73aab4?w=800&q=80",
         "effects": {
            "discontent": 50,
            "conflict": 40,
            "economy": -50,
            "environment": -45,
            "freedom": -30,
            "security": -40
         },
         "rarity": "legendary"
      },
      {
         "id": 60,
         "title": "VIỆT NAM GIA NHẬP G7!",
         "text": "Việt Nam chính thức được mời gia nhập G7 với tư cách thành viên chính thức, nâng tầm vị thế quốc tế!",
         "image": "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&q=80",
         "effects": {
            "discontent": -30,
            "conflict": -20,
            "economy": 40,
            "environment": 10,
            "freedom": 25,
            "security": 30
         },
         "rarity": "legendary"
      }
      // Add more events...
   ]
};
