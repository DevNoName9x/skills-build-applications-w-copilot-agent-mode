
# Xây dựng Ứng dụng Thể chất với GitHub Copilot Agent Mode cho Trường Trung học Mergington

## Câu chuyện về ứng dụng OctoFit Tracker dành cho Trường Trung học Mergington

Paul Octo là một giáo viên thể dục đã làm việc tại Trường Trung học Mergington hơn 8 năm. Dù rất nhiệt huyết và sáng tạo trong việc dạy thể dục, anh ngày càng lo lắng về việc học sinh ít vận động sau giờ học. Nhiều em thú nhận rằng hầu như không tập thể dục ngoài giờ thể dục bắt buộc.

Sau khi tham dự một hội thảo phát triển chuyên môn với chủ đề “Ứng dụng Công nghệ trong Giáo dục Thể chất”, Paul đã nảy ra ý tưởng tạo ra một giải pháp. Anh muốn phát triển một thứ gì đó có thể:

1. Khiến việc theo dõi thể chất trở nên thú vị và hấp dẫn  
2. Tạo ra áp lực tích cực từ bạn bè thông qua thi đua thân thiện  
3. Cho phép anh theo dõi tiến trình của học sinh từ xa  
4. Cung cấp hướng dẫn cá nhân hóa dựa trên thể trạng của từng học sinh  

## Sự ra đời của OctoFit Tracker

Paul đã phác thảo ý tưởng của mình trên một cuốn sổ tay trong giờ nghỉ trưa. Anh tưởng tượng một ứng dụng cho phép học sinh ghi lại bài tập, nhận huy hiệu thành tích và thi đấu thử thách hàng tháng. Tuy nhiên, là một giáo viên thể dục chỉ có kiến thức lập trình cơ bản, anh cảm thấy việc hiện thực hóa ý tưởng là quá khó.

Đó là khi anh tìm đến Jessica Cat, trưởng bộ phận CNTT của Trường Mergington. Jessica đề xuất dựa trên ứng dụng Monafit Tracker của Trường Mona High School, được ghi chép trong `docs/mona-high-school-fitness-tracker.md`. Cô thấy tiềm năng trong việc điều chỉnh cấu trúc và tính năng của Monafit Tracker để phù hợp với nhu cầu của Trường Mergington.

### Giai đoạn Lập kế hoạch Kỹ thuật

Trước khi bắt đầu phát triển, Paul và Jessica đã cùng xem xét kỹ kho mã nguồn và tài liệu của Monafit Tracker. Điều này tạo nền tảng vững chắc cho OctoFit Tracker, đảm bảo tuân thủ các tiêu chuẩn kỹ thuật và tận dụng mô hình thiết kế đã được kiểm chứng.

Cùng với đội CNTT, họ xác định các yêu cầu chính cho OctoFit Tracker:

### Mục tiêu Trải nghiệm Người dùng

- Giao diện đơn giản, dễ sử dụng, thiết kế dành riêng cho tuổi teen  
- Ghi nhanh hoạt động để giảm rào cản sử dụng  
- Tính năng xã hội tôn trọng quyền riêng tư của học sinh  
- Yếu tố trò chơi hóa để duy trì sự hứng thú  

### Thông số Kỹ thuật

- Ứng dụng web đáp ứng tốt trên thiết bị di động (cả Chromebook của trường và thiết bị cá nhân)  
- Xác thực an toàn dựa trên giải pháp của Monafit Tracker  
- Hệ thống xác minh hoạt động để ngăn gian lận  

## Tình trạng Phát triển Hiện tại

Paul và Jessica đã thiết lập môi trường GitHub Codespaces và đang tiến triển rất tốt với GitHub Copilot agent mode. Dựa trên cấu trúc Monafit Tracker, phiên bản nguyên mẫu của OctoFit Tracker hiện đã bao gồm:

- Hệ thống đăng ký người dùng hoạt động  
- Ghi nhận hoạt động cơ bản cho chạy bộ, đi bộ và luyện sức bền  
- Khung ban đầu cho các cuộc thi theo nhóm  
- Bảng điều khiển đơn giản hiển thị tiến độ học sinh  

## Các bước tiếp theo của Paul

Với hạ tầng cơ bản đã sẵn sàng, Paul đang tập trung vào:

1. Phát triển hệ thống tính điểm hấp dẫn, so sánh công bằng các loại hoạt động khác nhau  
2. Tạo ra các thử thách động viên phù hợp với sở thích của nhiều học sinh  
3. Xây dựng hệ thống thông báo thúc đẩy sự đều đặn nhưng không gây khó chịu  
4. Thiết kế báo cáo giúp anh nhận diện học sinh cần hỗ trợ hoặc động viên thêm  

Bộ phận CNTT rất ấn tượng với tốc độ phát triển nhờ GitHub Copilot agent mode, giúp Paul tập trung vào khía cạnh giáo dục trong khi AI lo phần kỹ thuật. Jessica Cat đặc biệt hài lòng khi OctoFit Tracker tận dụng nền tảng Monafit Tracker để đáp ứng yêu cầu đặc thù của Trường Mergington.

### Tổng quan về Hội thảo

Trong hội thảo này, bạn sẽ:

1. Thiết lập môi trường phát triển với **GitHub Codespaces**  
2. Sử dụng **GitHub Copilot** để tăng tốc phát triển với nhiều công nghệ  
3. Xây dựng các thành phần chính của ứng dụng **OctoFit Tracker** với hỗ trợ từ Copilot agent mode  
4. Học các kỹ thuật và phương pháp gợi ý hiệu quả cho **GitHub Copilot agent mode**  

### Tính năng của Ứng dụng

**OctoFit Tracker** sẽ bao gồm:

- Hồ sơ người dùng  
- Ghi chép và theo dõi hoạt động  
- Tạo và quản lý nhóm  
- Bảng xếp hạng thi đua  
- Gợi ý bài tập cá nhân hóa  

### GitHub Copilot Chat

Các mô hình hiện được hỗ trợ cho GitHub Copilot Chat:

- Claude Sonnet 3.5 (Bản thử nghiệm)  
- Claude Sonnet 3.7 (Bản thử nghiệm)  
- Claude Sonnet 3.7 Thinking (Bản thử nghiệm)  
- Gemini 2.0 Flash (Bản thử nghiệm)  
- GPT-4o  
- o1 (Bản thử nghiệm)  
- o3-mini (Bản thử nghiệm)  

#### [Giải thích về các mô hình LLM](https://docs.github.com/en/copilot/using-github-copilot/ai-models/changing-the-ai-model-for-copilot-chat#ai-models-for-copilot-chat-1)

#### Prompt engineering

- [Tài liệu chính thức về prompt engineering của GitHub](https://docs.github.com/en/copilot/using-github-copilot/prompt-engineering-for-github-copilot)  
- [Cách sử dụng GitHub Copilot: Mẹo và tình huống sử dụng](https://github.blog/2023-06-20-how-to-write-better-prompts-for-github-copilot/)  
- [Cách dùng Copilot trong IDE: mẹo và thực hành tốt](https://github.blog/2024-03-25-how-to-use-github-copilot-in-your-ide-tips-tricks-and-best-practices/)  
- [Hướng dẫn dành cho lập trình viên về prompt và LLM](https://docs.github.com/en/copilot/using-github-copilot/prompt-engineering-for-github-copilot#:~:text=A%20developer%E2%80%99s%20guide%20to%20prompt%20engineering%20and%20LLMs)  
- [GitHub Copilot: Sự trỗi dậy của Agent](https://github.blog/news-insights/product-news/github-copilot-the-agent-awakens/#agent-mode-available-in-preview-%f0%9f%a4%96)

### Công nghệ sử dụng trong ứng dụng OctoFit Tracker

Chúng ta sẽ dùng stack phát triển web hiện đại:

- **Frontend**: React.js  
- **Backend**: Python với Django REST Framework  
- **Cơ sở dữ liệu**: MongoDB  
- **Môi trường phát triển**: GitHub Codespaces  

### Cấu trúc Hội thảo

1. **Giới thiệu**
   - Tổng quan ý tưởng ứng dụng OctoFit Tracker  
   - Mô hình Copilot Chat

2. **Thiết lập ban đầu**
   - Cài đặt GitHub Codespaces  
   - Đảm bảo các tiện ích GitHub Copilot và Copilot Chat đã được cập nhật

3. **Tạo mẫu nhanh với Copilot Agent Mode**
   - Tạo cấu trúc dự án  
   - Sinh mã khung  
   - Cài đặt model, serializer, URL và view cơ bản  

4. **Xây dựng tính năng cốt lõi**
   - API ghi nhận hoạt động  
   - Quản lý nhóm  
   - Tính năng bảng xếp hạng  

5. **Phát triển Frontend và Backend**
   - Tạo các component React  
   - Giao diện đáp ứng tốt trên nhiều thiết bị  
   - Kết nối API backend  
   - Logic nghiệp vụ Django  
   - Tầng dữ liệu MongoDB  
