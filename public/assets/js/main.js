
        document.addEventListener('DOMContentLoaded', function() {
            // Update Date Text
            const today = new Date();
            const year = today.getFullYear();
            const month = today.getMonth() + 1;
            const dateText = document.getElementById('header-date-text');
            if (dateText) {
                dateText.innerHTML = `${year}年${month}月更新`;
            }

            // Init Swiper
            var swiper = new Swiper(".mySwiper", {
                slidesPerView: 1.2,
                spaceBetween: 20,
                centeredSlides: true,
                loop: true,
                loopAdditionalSlides: 5,
                speed: 600,
                autoplay: {
                    delay: 4000,
                    disableOnInteraction: false,
                },
                pagination: {
                    el: ".swiper-pagination",
                    clickable: true,
                },
                breakpoints: {
                    768: {
                        slidesPerView: 3,
                        spaceBetween: 24,
                        centeredSlides: false
                    }
                },
            });
        });

        function switchTab(agent) {
            const contentPharma = document.getElementById('content-pharma');
            const contentYakucari = document.getElementById('content-yakucari');
            const btnPharma = document.getElementById('btn-pharma');
            const btnYakucari = document.getElementById('btn-yakucari');

            // ▼▼▼ ここを修正 ▼▼▼
            // アクティブ：z-30で最前面へ、-mb-pxで境界線を踏み越えて一体化させる
            const activeClasses = ['bg-white', 'text-accent', 'border-t-4', 'border-accent', 'py-4', '-mb-px', 'z-30', 'relative', 'rounded-t-xl', 'shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)]'];
            
            // 非アクティブ：z-10で背面に下げる、mb-0.5を削除して隙間をなくす
            const inactiveClasses = ['bg-gray-200', 'text-gray-500', 'border-t-4', 'border-transparent', 'py-3', 'z-10', 'relative', 'rounded-t-xl'];
            // ▲▲▲ 修正ここまで ▲▲▲

            const resetStyles = (btn) => {
                btn.classList.remove(...activeClasses);
                btn.classList.remove(...inactiveClasses);
                btn.classList.remove('text-orange-600', 'border-orange-500');
            };

            if (agent === 'pharma') {
                contentPharma.classList.remove('hidden');
                contentYakucari.classList.add('hidden');

                resetStyles(btnPharma);
                btnPharma.classList.add(...activeClasses);
                
                resetStyles(btnYakucari);
                btnYakucari.classList.add(...inactiveClasses);
                
            } else {
                contentPharma.classList.add('hidden');
                contentYakucari.classList.remove('hidden');

                resetStyles(btnYakucari);
                btnYakucari.classList.add(...activeClasses);
                
                // オレンジ色の調整
                btnYakucari.classList.remove('text-accent', 'border-accent');
                btnYakucari.classList.add('text-orange-600', 'border-orange-500');

                resetStyles(btnPharma);
                btnPharma.classList.add(...inactiveClasses);
            }
        }

        document.addEventListener('DOMContentLoaded', function() {
            const prefMap = {
                "Hokkaido": "北海道",
                "Aomori": "青森県",
                "Iwate": "岩手県",
                "Miyagi": "宮城県",
                "Akita": "秋田県",
                "Yamagata": "山形県",
                "Fukushima": "福島県",
                "Ibaraki": "茨城県",
                "Tochigi": "栃木県",
                "Gunma": "群馬県",
                "Saitama": "埼玉県",
                "Chiba": "千葉県",
                "Tokyo": "東京都",
                "Kanagawa": "神奈川県",
                "Niigata": "新潟県",
                "Toyama": "富山県",
                "Ishikawa": "石川県",
                "Fukui": "福井県",
                "Yamanashi": "山梨県",
                "Nagano": "長野県",
                "Gifu": "岐阜県",
                "Shizuoka": "静岡県",
                "Aichi": "愛知県",
                "Mie": "三重県",
                "Shiga": "滋賀県",
                "Kyoto": "京都府",
                "Osaka": "大阪府",
                "Hyogo": "兵庫県",
                "Nara": "奈良県",
                "Wakayama": "和歌山県",
                "Tottori": "鳥取県",
                "Shimane": "島根県",
                "Okayama": "岡山県",
                "Hiroshima": "広島県",
                "Yamaguchi": "山口県",
                "Tokushima": "徳島県",
                "Kagawa": "香川県",
                "Ehime": "愛媛県",
                "Kochi": "高知県",
                "Fukuoka": "福岡県",
                "Saga": "佐賀県",
                "Nagasaki": "長崎県",
                "Kumamoto": "熊本県",
                "Oita": "大分県",
                "Miyazaki": "宮崎県",
                "Kagoshima": "鹿児島県",
                "Okinawa": "沖縄県"
            };
            const cityMap = {
                "Sapporo": "札幌市",
                "Sendai": "仙台市",
                "Shinjuku": "新宿区",
                "Shibuya": "渋谷区",
                "Minato": "港区",
                "Setagaya": "世田谷区",
                "Chiyoda": "千代田区",
                "Chuo": "中央区",
                "Yokohama": "横浜市",
                "Kawasaki": "川崎市",
                "Saitama": "さいたま市",
                "Chiba": "千葉市",
                "Nagoya": "名古屋市",
                "Osaka": "大阪市",
                "Kyoto": "京都市",
                "Kobe": "神戸市",
                "Sakai": "堺市",
                "Fukuoka": "福岡市",
                "Kitakyushu": "北九州市",
                "Kurume": "久留米市",
                "Hakata": "博多区",
                "Tenjin": "福岡市中央区",
                "Itoshima": "糸島市",
                "Kasuga": "春日市",
                "Onojo": "大野城市",
                "Dazaifu": "太宰府市"
            };
            fetch('https://ipapi.co/json/')
                .then(response => response.json())
                .then(data => {
                    if (data.country_code === 'JP' && data.region) {
                        let regionJP = data.region;
                        for (const [en, ja] of Object.entries(prefMap)) {
                            if (regionJP.includes(en)) {
                                regionJP = ja;
                                break;
                            }
                        }
                        let cityJP = "";
                        let rawCity = data.city;
                        if (rawCity && cityMap[rawCity]) {
                            cityJP = cityMap[rawCity];
                        }
                        let finalText = regionJP;
                        if (cityJP) {
                            finalText = regionJP + cityJP;
                        }
                        if (finalText.match(/[\u3000-\u303f\u3040-\u309f\u30a0-\u30ff\uff00-\uff9f\u4e00-\u9faf\u3400-\u4dbf]/)) {
                            document.querySelectorAll('.user-area-text').forEach(el => {
                                el.textContent = finalText;
                                el.classList.add('fade-in');
                            });
                        }
                    }
                })
                .catch(err => {
                    console.log('Location fetch failed, using default text.');
                });
        });
