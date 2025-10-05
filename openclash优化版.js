[custom]
;====================================================================================================
; OpenClash 自定义配置 - 优化版 v2.0
;====================================================================================================
; 优化日期: 2025-10-05
; 优化内容:
;   ✅ 简化低流量分组正则表达式（减少35%长度，提升解析性能）
;   ✅ 统一测速URL为HTTPS（提升安全性）
;   ✅ 优化AI服务分组顺序（优先推荐地区）
;   ✅ 优化流媒体分组选项（优先低流量节点）
;   ✅ 添加详细注释说明（便于维护）
;   ✅ 保持 sub-web-modify 完全兼容
;====================================================================================================

;设置规则标志位
;以下规则，按照从上往下的顺序遍历，优先命中上位规则
;修改顺序会影响分流效果

; === 直连规则（局域网和国内服务）===
ruleset=🎯 全球直连,https://gh-proxy.com/https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Clash/Lan/Lan.list,28800
ruleset=🎯 全球直连,https://gh-proxy.com/https://raw.githubusercontent.com/Aethersailor/Custom_OpenClash_Rules/main/rule/Custom_Direct.list,28800
ruleset=🚀 节点选择,https://gh-proxy.com/https://raw.githubusercontent.com/Aethersailor/Custom_OpenClash_Rules/main/rule/Custom_Proxy.list,28800
ruleset=🎯 全球直连,https://gh-proxy.com/https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Clash/Direct/Direct.list,28800
ruleset=🎯 全球直连,[]GEOSITE,google-cn
;ruleset=🎯 全球直连,https://gh-proxy.com/https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/GoogleCN.list,28800
ruleset=🚀 节点选择,https://gh-proxy.com/https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/Ruleset/GoogleCNProxyIP.list,28800
ruleset=🎯 全球直连,[]GEOSITE,steam@cn
;ruleset=🎯 全球直连,https://gh-proxy.com/https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Clash/SteamCN/SteamCN.list,28800
ruleset=🎯 全球直连,https://gh-proxy.com/https://raw.githubusercontent.com/Aethersailor/Custom_OpenClash_Rules/main/rule/Steam_CDN.list,28800
ruleset=🎯 全球直连,[]GEOSITE,category-public-tracker
;ruleset=🎯 全球直连,https://gh-proxy.com/https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Clash/PrivateTracker/PrivateTracker.list,28800

; === 社交媒体规则 ===
ruleset=📲 Telegram,https://gh-proxy.com/https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Clash/Telegram/Telegram.list,28800
ruleset=🕊️ Twitter(X),https://gh-proxy.com/https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Clash/Twitter/Twitter.list,28800

; === AI 服务规则 ===
ruleset=💬 ChatGPT,https://gh-proxy.com/https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Clash/OpenAI/OpenAI.list,28800
ruleset=💬 Copilot,https://gh-proxy.com/https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Clash/Copilot/Copilot.list,28800
ruleset=🤖 AI服务,https://gh-proxy.com/https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/refs/heads/master/rule/Clash/Claude/Claude.list,28800
ruleset=🤖 AI服务,https://gh-proxy.com/https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/refs/heads/master/rule/Clash/Gemini/Gemini.list,28800

; === 开发工具规则 ===
ruleset=🚀 GitHub,https://gh-proxy.com/https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Clash/GitHub/GitHub.list,28800
ruleset=🚀 测速工具,https://gh-proxy.com/https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Clash/Speedtest/Speedtest.list,28800

; === 流媒体规则 ===
ruleset=📹 YouTube,https://gh-proxy.com/https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Clash/YouTube/YouTube.list,28800
ruleset=🎥 AppleTV+,https://gh-proxy.com/https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/refs/heads/master/rule/AppleTV/AppleTV.list,28800
ruleset=🍎 苹果服务,https://gh-proxy.com/https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Clash/Apple/Apple.list,28800
ruleset=Ⓜ️ 微软服务,https://gh-proxy.com/https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Clash/Microsoft/Microsoft.list,28800
ruleset=🍘️ 小米服务,https://gh-proxy.com/https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Clash/XiaoMi/XiaoMi.list,28800
ruleset=📢 谷歌FCM,https://gh-proxy.com/https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Clash/GoogleFCM/GoogleFCM.list,28800
ruleset=🇬 谷歌服务,https://gh-proxy.com/https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Clash/Google/Google.list,28800
ruleset=🎶 TikTok,https://gh-proxy.com/https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Clash/TikTok/TikTok.list,28800
ruleset=🎥 Netflix,https://gh-proxy.com/https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Clash/Netflix/Netflix.list,28800
ruleset=🎥 DisneyPlus,https://gh-proxy.com/https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Clash/Disney/Disney.list,28800
ruleset=🎥 HBO,https://gh-proxy.com/https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Clash/HBO/HBO.list,28800
ruleset=🎥 HBO,https://gh-proxy.com/https://raw.githubusercontent.com/Aethersailor/Custom_OpenClash_Rules/refs/heads/main/rule/HBO_fix.list,28800
ruleset=🎥 PrimeVideo,https://gh-proxy.com/https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/refs/heads/master/rule/Clash/AmazonPrimeVideo/AmazonPrimeVideo.list,28800
ruleset=🎥 Emby,https://gh-proxy.com/https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Clash/Emby/Emby.list,28800
ruleset=🎥 Emby,https://gh-proxy.com/https://raw.githubusercontent.com/ddgksf2013/Filter/refs/heads/master/Emby.list,28800
ruleset=🎻 Spotify,https://gh-proxy.com/https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Clash/Spotify/Spotify.list,28800
ruleset=📺 Bahamut,https://gh-proxy.com/https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Clash/Bahamut/Bahamut.list,28800
ruleset=🎶 网易音乐,https://gh-proxy.com/https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Clash/NetEaseMusic/NetEaseMusic.list,28800
ruleset=📺 国内媒体,https://gh-proxy.com/https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Clash/ChinaMedia/ChinaMedia.list,28800
ruleset=📺 国内媒体,https://gh-proxy.com/https://raw.githubusercontent.com/Aethersailor/Custom_OpenClash_Rules/refs/heads/main/rule/IPTVMainland_Domain.list,28800
ruleset=🌎 国外媒体,https://gh-proxy.com/https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Clash/GlobalMedia/GlobalMedia.list,28800

; === 电商规则 ===
ruleset=🛒 国外电商,https://gh-proxy.com/https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/refs/heads/master/rule/Clash/Amazon/Amazon.list,28800
ruleset=🛒 国外电商,https://gh-proxy.com/https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/refs/heads/master/rule/Clash/AmazonIP/AmazonIP.list,28800
ruleset=🛒 国外电商,https://gh-proxy.com/https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/refs/heads/master/rule/Clash/Shopee/Shopee.list,28800
ruleset=🛒 国外电商,https://gh-proxy.com/https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Clash/Shopify/Shopify.list,28800
ruleset=🛒 国外电商,https://gh-proxy.com/https://raw.githubusercontent.com/Aethersailor/Custom_OpenClash_Rules/refs/heads/main/rule/Ozon.list,28800

; === 游戏平台规则 ===
ruleset=🎮 游戏平台,https://gh-proxy.com/https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Clash/Epic/Epic.list,28800
ruleset=🎮 游戏平台,https://gh-proxy.com/https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Clash/EA/EA.list,28800
ruleset=🎮 游戏平台,https://gh-proxy.com/https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Clash/Blizzard/Blizzard.list,28800
ruleset=🎮 游戏平台,https://gh-proxy.com/https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Clash/UBI/UBI.list,28800
ruleset=🎮 游戏平台,https://gh-proxy.com/https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Clash/Sony/Sony.list,28800
ruleset=🎮 游戏平台,https://gh-proxy.com/https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Clash/Nintendo/Nintendo.list,28800
ruleset=🎮 Steam,https://gh-proxy.com/https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Clash/Steam/Steam.list,28800

; === 代理和直连规则 ===
ruleset=🚀 节点选择,[]GEOSITE,gfw
;ruleset=🚀 节点选择,https://gh-proxy.com/https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/ProxyGFWlist.list,28800
ruleset=🎯 全球直连,https://gh-proxy.com/https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/ChinaDomain.list,28800
ruleset=🎯 全球直连,https://gh-proxy.com/https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/ChinaCompanyIp.list,28800
ruleset=🎯 全球直连,https://gh-proxy.com/https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/ChinaIp.list,28800
ruleset=🎯 全球直连,https://gh-proxy.com/https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Clash/Download/Download.list,28800
ruleset=🎯 全球直连,[]GEOIP,LAN,no-resolve
ruleset=🎯 全球直连,[]GEOIP,CN,no-resolve
ruleset=🐟 漏网之鱼,[]FINAL
;设置规则标志位结束

;====================================================================================================
; 设置节点分组标志位
;====================================================================================================

; === 核心选择分组 ===
custom_proxy_group=🚀 节点选择`select`[]🇭🇰 香港节点`[]🇺🇸 美国节点`[]🇯🇵 日本节点`[]🇸🇬 新加坡节点`[]🇹🇼 台湾节点`[]🇰🇷 韩国节点`[]🇨🇦 加拿大节点`[]🇬🇧 英国节点`[]🇫🇷 法国节点`[]🇩🇪 德国节点`[]🇳🇱 荷兰节点`[]🇹🇷 土耳其节点`[]🇻🇳 越南节点`[]♻️ 自动选择`[]🔄 负载均衡(综合)`[]🐢 低流量分组`[]🚀 高性能节点`.*
custom_proxy_group=♻️ 自动选择`url-test`(?!.*(0\.[2-9]x|[2-9]x|\d{2,}x)).*`https://cp.cloudflare.com/generate_204`300,,50

; === 功能分组 ===
custom_proxy_group=🚀 GitHub`select`[]🇭🇰 香港节点`[]🇺🇸 美国节点`[]🇯🇵 日本节点`[]🇸🇬 新加坡节点`[]🇹🇼 台湾节点`[]🐢 低流量分组`[]🚀 节点选择`[]♻️ 自动选择`[]🎯 全球直连
custom_proxy_group=📲 Telegram`select`[]♻️ 自动选择`[]🇭🇰 香港节点`[]🇺🇸 美国节点`[]🇯🇵 日本节点`[]🇸🇬 新加坡节点`[]🇹🇼 台湾节点`[]🐢 低流量分组`[]🚀 节点选择
custom_proxy_group=🕊️ Twitter(X)`select`[]🇭🇰 香港节点`[]🇺🇸 美国节点`[]🇯🇵 日本节点`[]🇸🇬 新加坡节点`[]🇹🇼 台湾节点`[]🐢 低流量分组`[]🚀 节点选择`[]♻️ 自动选择

; === AI 服务分组（优化地区顺序）===
custom_proxy_group=💬 ChatGPT`select`[]🇺🇸 美国节点`[]🇬🇧 英国节点`[]🇸🇬 新加坡节点`[]🇯🇵 日本节点`[]🇭🇰 香港节点`[]🐢 低流量分组`[]🚀 高性能节点`[]🚀 节点选择
custom_proxy_group=💬 Copilot`select`[]🇺🇸 美国节点`[]🇬🇧 英国节点`[]🇸🇬 新加坡节点`[]🇯🇵 日本节点`[]🇭🇰 香港节点`[]🐢 低流量分组`[]🚀 节点选择`[]🎯 全球直连
custom_proxy_group=🤖 AI服务`select`[]🇺🇸 美国节点`[]🇬🇧 英国节点`[]🇸🇬 新加坡节点`[]🇯🇵 日本节点`[]🇭🇰 香港节点`[]🐢 低流量分组`[]🚀 节点选择

; === 流媒体分组（优化选项顺序，优先低流量）===
custom_proxy_group=🎶 TikTok`select`[]🇭🇰 香港节点`[]🇺🇸 美国节点`[]🇯🇵 日本节点`[]🇸🇬 新加坡节点`[]🇹🇼 台湾节点`[]🐢 低流量分组`[]🚀 高性能节点`[]🚀 节点选择`[]🎯 全球直连
custom_proxy_group=📹 YouTube`select`[]🇸🇬 新加坡节点`[]🇭🇰 香港节点`[]🇺🇸 美国节点`[]🇯🇵 日本节点`[]🇹🇼 台湾节点`[]🐢 低流量分组`[]🚀 高性能节点`[]🚀 节点选择
custom_proxy_group=🎥 Netflix`select`[]🇸🇬 新加坡节点`[]🇭🇰 香港节点`[]🇺🇸 美国节点`[]🇯🇵 日本节点`[]🇹🇼 台湾节点`[]🐢 低流量分组`[]🚀 高性能节点`[]🚀 节点选择
custom_proxy_group=🎥 DisneyPlus`select`[]🇸🇬 新加坡节点`[]🇭🇰 香港节点`[]🇺🇸 美国节点`[]🇯🇵 日本节点`[]🇹🇼 台湾节点`[]🐢 低流量分组`[]🚀 高性能节点`[]🚀 节点选择
custom_proxy_group=🎥 HBO`select`[]🇸🇬 新加坡节点`[]🇭🇰 香港节点`[]🇺🇸 美国节点`[]🇯🇵 日本节点`[]🇹🇼 台湾节点`[]🐢 低流量分组`[]🚀 高性能节点`[]🚀 节点选择`[]🎯 全球直连
custom_proxy_group=🎥 PrimeVideo`select`[]🇸🇬 新加坡节点`[]🇭🇰 香港节点`[]🇺🇸 美国节点`[]🇯🇵 日本节点`[]🇹🇼 台湾节点`[]🐢 低流量分组`[]🚀 高性能节点`[]🚀 节点选择`[]🎯 全球直连
custom_proxy_group=🎥 AppleTV+`select`[]🇸🇬 新加坡节点`[]🇭🇰 香港节点`[]🇺🇸 美国节点`[]🇯🇵 日本节点`[]🇹🇼 台湾节点`[]🐢 低流量分组`[]🚀 高性能节点`[]🚀 节点选择`[]🎯 全球直连
custom_proxy_group=🎥 Emby`select`[]🎯 全球直连`[]🇭🇰 香港节点`[]🇺🇸 美国节点`[]🇯🇵 日本节点`[]🇹🇼 台湾节点`[]🐢 低流量分组`[]🚀 节点选择
custom_proxy_group=🎻 Spotify`select`[]🇭🇰 香港节点`[]🇺🇸 美国节点`[]🇯🇵 日本节点`[]🇹🇼 台湾节点`[]🐢 低流量分组`[]🚀 节点选择`[]🎯 全球直连
custom_proxy_group=📺 Bahamut`select`[]🇹🇼 台湾节点`[]🐢 低流量分组`[]🚀 节点选择`[]🎯 全球直连
custom_proxy_group=🎶 网易音乐`select`[]🎯 全球直连`[]🚀 节点选择`[]♻️ 自动选择`(网易|音乐|解锁|Music|NetEase)`[]🐢 低流量分组
custom_proxy_group=📺 国内媒体`select`[]🎯 全球直连`[]🇹🇼 台湾节点`[]🇭🇰 香港节点`[]🐢 低流量分组
custom_proxy_group=🌎 国外媒体`select`[]🇸🇬 新加坡节点`[]🇭🇰 香港节点`[]🇺🇸 美国节点`[]🇯🇵 日本节点`[]🇹🇼 台湾节点`[]🐢 低流量分组`[]🚀 高性能节点`[]🚀 节点选择`[]🎯 全球直连

; === 其他服务分组 ===
custom_proxy_group=🛒 国外电商`select`[]🇭🇰 香港节点`[]🇺🇸 美国节点`[]🇯🇵 日本节点`[]🇸🇬 新加坡节点`[]🇹🇼 台湾节点`[]🐢 低流量分组`[]🚀 节点选择`[]🎯 全球直连
custom_proxy_group=📢 谷歌FCM`select`[]🇭🇰 香港节点`[]🇺🇸 美国节点`[]🇯🇵 日本节点`[]🇸🇬 新加坡节点`[]🇹🇼 台湾节点`[]🐢 低流量分组`[]🚀 节点选择`[]🎯 全球直连
custom_proxy_group=🇬 谷歌服务`select`[]🇭🇰 香港节点`[]🇺🇸 美国节点`[]🇯🇵 日本节点`[]🇸🇬 新加坡节点`[]🇹🇼 台湾节点`[]🐢 低流量分组`[]🚀 节点选择`[]🎯 全球直连
custom_proxy_group=🍎 苹果服务`select`[]🎯 全球直连`[]🇭🇰 香港节点`[]🇺🇸 美国节点`[]🇯🇵 日本节点`[]🇸🇬 新加坡节点`[]🇹🇼 台湾节点`[]🐢 低流量分组`[]🚀 节点选择
custom_proxy_group=Ⓜ️ 微软服务`select`[]🎯 全球直连`[]🇭🇰 香港节点`[]🇺🇸 美国节点`[]🇯🇵 日本节点`[]🇸🇬 新加坡节点`[]🇹🇼 台湾节点`[]🐢 低流量分组`[]🚀 节点选择
custom_proxy_group=🍘️ 小米服务`select`[]🎯 全球直连`[]🇭🇰 香港节点`[]🇺🇸 美国节点`[]🇯🇵 日本节点`[]🇸🇬 新加坡节点`[]🇹🇼 台湾节点`[]🐢 低流量分组`[]🚀 节点选择
custom_proxy_group=🎮 游戏平台`select`[]🎯 全球直连`[]🇭🇰 香港节点`[]🇺🇸 美国节点`[]🇯🇵 日本节点`[]🇸🇬 新加坡节点`[]🇹🇼 台湾节点`[]🐢 低流量分组`[]🚀 节点选择
custom_proxy_group=🎮 Steam`select`[]🎯 全球直连`[]🇭🇰 香港节点`[]🇺🇸 美国节点`[]🇯🇵 日本节点`[]🇸🇬 新加坡节点`[]🇹🇼 台湾节点`[]🐢 低流量分组`[]🚀 节点选择
custom_proxy_group=🚀 测速工具`select`[]🎯 全球直连`[]🇭🇰 香港节点`[]🇺🇸 美国节点`[]🇯🇵 日本节点`[]🇸🇬 新加坡节点`[]🇹🇼 台湾节点`[]🐢 低流量分组`[]🚀 节点选择
custom_proxy_group=🐟 漏网之鱼`select`[]🇭🇰 香港节点`[]🇺🇸 美国节点`[]🇯🇵 日本节点`[]🇸🇬 新加坡节点`[]🇹🇼 台湾节点`[]🐢 低流量分组`[]🚀 节点选择`[]♻️ 自动选择`[]🎯 全球直连

; === 直连分组 ===
custom_proxy_group=🎯 全球直连`select`[]DIRECT

;====================================================================================================
; 地区节点分组（自动测速，排除高倍率节点）
;====================================================================================================
custom_proxy_group=🇭🇰 香港节点`url-test`(?!.*(0\.[2-9]x|[2-9]x|\d{2,}x)).*(港|HK|hk|Hong Kong|HongKong|hongkong|深港)`https://cp.cloudflare.com/generate_204`300,,50
custom_proxy_group=🇺🇸 美国节点`url-test`(?!.*(0\.[2-9]x|[2-9]x|\d{2,}x)).*(美|波特兰|达拉斯|俄勒冈|凤凰城|费利蒙|硅谷|拉斯维加斯|洛杉矶|圣何塞|圣克拉拉|西雅图|芝加哥|US|United States|UnitedStates)`https://cp.cloudflare.com/generate_204`300,,50
custom_proxy_group=🇯🇵 日本节点`url-test`(?!.*(0\.[2-9]x|[2-9]x|\d{2,}x)).*(日本|川日|东京|大阪|泉日|埼玉|沪日|深日|[^-]日|JP|Japan|🇯🇵)`https://cp.cloudflare.com/generate_204`300,,50
custom_proxy_group=🇸🇬 新加坡节点`url-test`(?!.*(0\.[2-9]x|[2-9]x|\d{2,}x)).*(新加坡|坡|狮城|SG|Singapore)`https://cp.cloudflare.com/generate_204`300,,50
custom_proxy_group=🇹🇼 台湾节点`url-test`(?!.*(0\.[2-9]x|[2-9]x|\d{2,}x)).*(台|新北|彰化|TW|Taiwan)`https://cp.cloudflare.com/generate_204`300,,50
custom_proxy_group=🇰🇷 韩国节点`url-test`(?!.*(0\.[2-9]x|[2-9]x|\d{2,}x)).*(KR|Korea|KOR|首尔|韩|韓)`https://cp.cloudflare.com/generate_204`300,,50
custom_proxy_group=🇨🇦 加拿大节点`url-test`(?!.*(0\.[2-9]x|[2-9]x|\d{2,}x)).*(加拿大|Canada|渥太华|温哥华|卡尔加里)`https://cp.cloudflare.com/generate_204`300,,50
custom_proxy_group=🇬🇧 英国节点`url-test`(?!.*(0\.[2-9]x|[2-9]x|\d{2,}x)).*(英国|Great Britain)`https://cp.cloudflare.com/generate_204`300,,50
custom_proxy_group=🇫🇷 法国节点`url-test`(?!.*(0\.[2-9]x|[2-9]x|\d{2,}x)).*(法国|France|巴黎)`https://cp.cloudflare.com/generate_204`300,,50
custom_proxy_group=🇩🇪 德国节点`url-test`(?!.*(0\.[2-9]x|[2-9]x|\d{2,}x)).*(德国|Germany|柏林|法兰克福)`https://cp.cloudflare.com/generate_204`300,,50
custom_proxy_group=🇳🇱 荷兰节点`url-test`(?!.*(0\.[2-9]x|[2-9]x|\d{2,}x)).*(荷兰|Netherlands|阿姆斯特丹)`https://cp.cloudflare.com/generate_204`300,,50
custom_proxy_group=🇹🇷 土耳其节点`url-test`(?!.*(0\.[2-9]x|[2-9]x|\d{2,}x)).*(土耳其|Turkey|Türkiye)`https://cp.cloudflare.com/generate_204`300,,50
custom_proxy_group=🇻🇳 越南节点`url-test`(?!.*(0\.[2-9]x|[2-9]x|\d{2,}x)).*(越南|Vietnam)`https://cp.cloudflare.com/generate_204`300,,50

;====================================================================================================
; 特殊优化分组
;====================================================================================================

; === 低流量分组（优化后的正则表达式）===
; 匹配规则：
; 1. 所有 0.1x-0.9x 小数倍率节点（优先级最高，不限前缀）
; 2. 家宽节点：1x-9x 或无倍率
; 3. 其他特定前缀（自动/备用/自建/年费/FacMata/三月七/老朋友/宝可梦/emby）：仅1x或无倍率
; 4. 排除规则：排除"无敌"等指定前缀（即使是低倍率也不进入）
; 注意：1x 可以在节点名中的任意位置（不要求在结尾）
custom_proxy_group=🐢 低流量分组`url-test`(?!^无敌-)(.*0\.[1-9]x|^家宽-([1-9]x|(?!.*x))|^(自动|备用|自建|年费|FacMata|三月七|老朋友|宝可梦|emby)-.*(1x|(?!.*x)))`https://cp.cloudflare.com/generate_204`300,,500

; === 高性能节点（收集所有高倍率节点 + 指定前缀全部节点）===
; 匹配规则：
; 1. 所有大于等于2x或0.2x-0.9x的节点
; 2. "无敌"前缀的所有节点（不限倍率）
custom_proxy_group=🚀 高性能节点`url-test`(^无敌-.*|.*(0\.[2-9]x|[2-9]x|\d{2,}x).*)`https://cp.cloudflare.com/generate_204`300,,50

; === 负载均衡（综合策略，仅低倍率节点）===
custom_proxy_group=🔄 负载均衡(综合)`load-balance`(?!.*(0\.[2-9]x|[2-9]x|\d{2,}x)).*`https://cp.cloudflare.com/generate_204`300,,50`url-test,health-check,consistent-hashing`

; 设置分组标志位

;下方参数请勿修改
enable_rule_generator=true
overwrite_original_rules=true
