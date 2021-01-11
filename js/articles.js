const articles = {
    'ホームページをリニューアル！': {
        title: 'ホームページをリニューアル！',
        date: '2020/2/6',
        content: '<p>マウンテンリバーのホームページが新しくなりました！</p><br><p>まだまだ見やすく作っている最中です（笑。暖かく見守っていただければ幸いですm(_ _)m</p>'
    }
};

const works = {
    gardens: {
        '「エントランスの階段にこだわった」庭。': { // タイトル
            year: 2018, // 施工年
            img_cnt: 9,  // 画像枚数
            heading: '両側から上がれるアイアンとデザインコンクリートの階段。\n「エントランスの階段にこだわった」庭。', // 見出し
            contents: [
                '緑化の芝生が映えるお庭が、素敵な真っ白な家を引き立てる。', // 画像1枚目の説明
                'モダンの中にも枕木で柔らかさを。',   // 2枚目
                `
                    両側から上がれる階段を設置。<br>
                    <br>
                    すでに玄関前にエントランスの階段とタイルが張られていたこの新築のお宅。もともとあったエントランスも
                    素敵で、少々もったいなさは感じながらも、さらにシックにモダンにかっこよく！アイアンの手すりも付けて
                    製作。周りは植栽と化粧砂利でもとの階段を隠しました。
                `, // 長い文章は''じゃなくて``で囲えば複数行立てで書ける。改行は<br>
                'カーポート側からは、入りやすいように斜めに踏み板を設置。', 
                '前には植栽を。',
                '反対側は、奥の物置へも行き来しやすいように階段とおそろいのデザインコンクリートを埋めて。',
                '',
                '枕木のスリットの周りは、土間をくりぬいて植栽も。',
                '',
            ]
        },
        '「石張りの塀がある」庭。': { // タイトル
            year: 2018, // 施工年
            img_cnt: 4,  // 画像枚数
            heading: 'エントランス前の「石張りの塀がある」庭。', // 見出し
            contents: [
                `
                    玄関前、カーポートの横も駐車スペースを兼ねたアプローチに。<br>
                    <br>
                    目隠しの塀は、モダンな石張りで。塀の向こう側には芝生と木を植えて。<br>
                    シンボルツリーに、人気のアオダモを。
                `, // 画像1枚目の説明
                '',   // 2枚目
                '塀の前にも植栽で華やかに。', // 3枚目
                '',// 4枚目
            ]
        },
        '「バラが映える洋風」の庭。': { // タイトル
            year: 2018, // 施工年
            img_cnt: 11,  // 画像枚数
            heading: '施主様がコツコツ作り上げてきたバラの庭をリガーデン。\n「バラが映える洋風」の庭。', // 見出し
            contents: [
                '新たに石畳風に、アンティークレンガを使って。', // 画像1枚目の説明
                '',   // 2枚目
                '先には石畳に囲われた花壇を。',   // 3枚目
                `
                    施主様が使っていたタイルや擬木など、新たに敷き直して。<br>
                    <br>
                    バラを筆頭に、植物全般がお好きな施主様のお庭のリガーデンをさせていただきました。
                    もともと植えられていた下草や木はほとんど移植しなおし、家の周りはすべてアプローチとして歩ける仕様に。
                    もともと使われていたレンガやタイル、擬木枕木を敷きなおしたり、新たに追加した素材もあったので、
                    雰囲気を統一するように気を付けました。
                `, // 長い文章は''じゃなくて``で囲えば複数行立てで書ける。改行は<br>
                '', 
                'もともとあったレンガと擬木を合わせて。',
                '余ったレンガでポイントに花台を。',
                'こちらももともとあった石で、盛った花壇のアプローチに。',
                '玄関とデッキの間には、ほっと一息つけるお茶スペースを。',
                '道路から見えずらいように、花ブロックの塀を立てて。',
                '',
            ]
        },
        '「大きな石壁が表札」の庭。': { // タイトル
            year: 2018, // 施工年
            img_cnt: 2,  // 画像枚数
            heading: '「大きな石壁が表札」の庭。', // 見出し
            contents: [
                '古い大谷石の門柱を取り壊して、新しく石板を立てて表札を埋め込みました。', // 画像1枚目の説明
                '',   // 2枚目
            ]
        },
        '「土色の優しい土間」の庭': { // タイトル
            year: 2018, // 施工年
            img_cnt: 11,  // 画像枚数
            heading: '落ち着きのある和の庭へ\n「土色の優しい土間」の庭。', // 見出し
            contents: [
                '玄関前からの眺め。', // 画像1枚目の説明
                '庭中央から玄関の方を向いて。',   // 2枚目
                `
                    土間と砂利と飛び石と。<br>
                    母屋の玄関わきに広がる立派な和風のお庭のリガーデンをさせていただきました。
                    もともと植えられていた芝を剥ぎ、新たにたたき風の土間と化粧砂利で草が生えないエリアを作りました。
                    飛び石はあれどなかなか広いお庭でしたので、途中ひょうたん型の苔島を作ったり、延べ段を作ったり。
                    その時々思いついたデザインで、現場にある材料を使わせていただいて、私たちも楽しみながら制作を
                    させていただきました！
                `, // 長い文章は''じゃなくて``で囲えば複数行立てで書ける。改行は<br>
                'ある石を使って延べ段を。', 
                '水鉢周りも苔や植物を移植して。',
                '飛び石に壊れた灯篭の笠を。',
                '古い石臼をポイントに埋めて。',
                '延べ段の始まりにも石臼を。',
                '苔島はそこだけで小さな世界が。',
                '土間の脇に植栽スペースを作って。',
                '',
            ]
        },
        '「カリフォルニアmix」の庭': { // タイトル
            year: 2018, // 施工年
            img_cnt: 15,  // 画像枚数
            heading: '枕木と自然石と芝と。\nカリフォルニア過ぎない「カリフォルニアmix」の庭。', // 見出し
            contents: [
                '庭を塀等で囲ってしまわず植栽で目隠しを。', // 画像1枚目の説明
                '追加の駐車スペースには枕木&砂利&芝で。',   // 2枚目
                `
                    リビングからは広めのウッドステップを。<br>
                    カッコイイお家に合わせて、カッコイイ系でカリフォルニアスタイルmixのお庭を作らせていただきました。<br>
                    こだわったのが玄関脇のドラセナともう一台分の駐車スペースとして設けた枕木&砂利エリア。
                    小さなお子さんと一緒に木たちも大きくなっていってもらえたら嬉しいです。
                `, // 長い文章は''じゃなくて``で囲えば複数行立てで書ける。改行は<br>
                '', // 説明なしは空白
                '',
                '石張りエリアを設けてBBQしたり洗濯物を干したり。',
                'ウッドフェンスは閉鎖感のないシンプルなものを。',
                'お庭の真ん中にシンボルツリーのアオダモを。',
                '珍しいシュロの四本株仕立て。',
                '脇の花壇はグラス系でまとめて。',
                '',
                '玄関脇の大きな株立ちのドラセナ。',
                '高植えにして、石と枕木でリズム感を。',
                '',
                '石の隙間にセダムを。',
            ]
        },
        '「ギリシャのリゾートで過ごす」ような庭。': { // タイトル
            year: 2017, // 施工年
            img_cnt: 15,  // 画像枚数
            heading: '真っ白な建物に合わせて \n「ギリシャのリゾートで過ごす」ような庭。', // 見出し
            contents: [
                'デッキからの正面には白い壁とシンボルツリー。', // 画像1枚目の説明
                'パーゴラからの眺め。',   // 2枚目
                'もともとのブロック塀にはアンティーク瓦を。',
                `
                    あくまでもリゾート風に。<br>
                    <br>
                    中庭の方は、真っ白のお家に合わせてギリシャをイメージして作らせていただきました。
                    色が飛んでいますが、真っ白の地面は乱形の石張りを施しています。
                `, // 長い文章は''じゃなくて``で囲えば複数行立てで書ける。改行は<br>
                '植物が育つのが楽しみです。',
                '石張りの中にセダムやハーブを。',
                '',
                'アマゾンジャラのデッキ。',
                '壺にラベンダーを合わせて。',
                'シンボルツリーに斑入りキョウチクトウを。',
                'さらに白い花壇が続きます。',
                '一番奥には大きなオータムライラック。',
                '',
                '',
                '',
            ]
        },
        '「和洋mixガーデン」': {
            year: 2018,
            img_cnt: 9,
            heading: '和風庭園をその先のリゾートガーデンへと続く「和洋mixガーデン」へReガーデン。',
            contents: [
                '',
                '玄関前には大きな鉢物を。',
                'もともと池を埋めたところに芝とレンガの小道を。',
                `
                    こちらのシンボルツリーにはカシワバアジサイを。<br>
                    昨年より作らせていただいていたお庭で、
                    こちらは玄関前の元純和風のお庭だったところをReガーデンさせていただきました。
                `,
                '',
                'レンガと枕木と。',
                'カーブの小道に丸い植栽を合わせて。',
                '庭の奥には石柱を立てて。',
                ''
            ]
        },
        '「HAIR SALON Peace」様': { // タイトル
            year: 2018, // 施工年
            img_cnt: 14,  // 画像枚数
            heading: '「HAIR SALON Peace」様', // 見出し
            contents: [
                '店舗前に鉢のオリーブを。', // 画像1枚目の説明
                '店舗内のカウンター上に垂れる植物を。',   // 2枚目
                `
                    その横にスワッグでナチュラル感を。<br>
                    新築の美容院店舗付き住宅のお庭と、ご自宅・店舗内の観葉植物とスワッグを作らせていただきました！
                `, // 長い文章は''じゃなくて``で囲えば複数行立てで書ける。改行は<br>。3枚目
                '駐車場後ろにカリフォルニアスタイルで。', // 4枚目
                '',// 説明なしは空白。5枚目
                'ソテツの存在感を存分に。',
                '',
                'ロドレイアもカッコイイ枝ぶりのものを。',
                '玄関と店舗の間にシンボルツリーのアオダモを。',
                'その足元にはデッキと植栽。',
                '',
                '',
                '隙間にピッタリのアオダモ。',
                'ステキな家とのコラボ。',
            ]
        },
        '「コンチネンタルヘア」様': { // タイトル
            year: 2017, // 施工年
            img_cnt: 9,  // 画像枚数
            heading: '「コンチネンタルヘア」様', // 見出し
            contents: [
                'コンチネンタルヘア様入り口のレンガ敷き等施工させていただきました。', // 画像1枚目の説明
                '',   // 2枚目
                '', // 3枚目
                '',// 説明なしは空白。4枚目
                '',
                '',
                '',
                'その後にアイアンのフェンスを取付けさせていただきました。',
                '',
            ]
        },
        '「エステスペースジュビランCOTTO」様': { // タイトル
            year: 2017, // 施工年
            img_cnt: 8,  // 画像枚数
            heading: '「エステスペースジュビランCOTTO」様', // 見出し
            contents: [
                '花園に新店舗を建てられたエステスペースジュビランCOTTO様の外構と植栽をさせていただきました。', // 画像1枚目の説明
                '',   // 2枚目
                '',// 説明なしは空白。
                '',
                '',
                '',
                '',
                '',
            ]
        },
        '「スタジオBe」様': { // タイトル
            year: 2017, // 施工年
            img_cnt: 3,  // 画像枚数
            heading: '「スタジオBe」様', // 見出し
            contents: [
                'スタジオBe様の植栽をさせていただきました。', // 画像1枚目の説明
                '',   // 2枚目
                '',// 説明なしは空白。
            ]
        },
        '「モダンな坪庭」': { // タイトル
            year: 2017, // 施工年
            img_cnt: 15,  // 画像枚数
            heading: '玄関から覗く「モダンな坪庭」', // 見出し
            contents: [
                `
                    玄関までのアプローチが素敵な洗い出しのお宅。<br>
                    玄関の引き戸を開けると正面に坪庭スペースがあり、そこを作らせていただきました。
                `, // 画像1枚目の説明
                '壁に囲われているので、半日陰でも大丈夫な植物を。',   // 2枚目
                '', // 3枚目
                '2階の渡り廊下からは吊り棚を作って垂れる植物を。',// 4枚目
                '',
                'シンボルツリーにカクレミノを。',
                '',
                '高低差を付けて、カッコイイ黒のレンガ敷きに。',
                '',
                '',
                '',
                '時間によって日光が差して、神秘的な空間に。',
                '2階から望む。',
                '夜もライトが照らして幻想的。',
                '',
            ]
        },
        '「プランターの植栽」': { // タイトル
            year: 2017, // 施工年
            img_cnt: 4,  // 画像枚数
            heading: '玄関前の「プランター植栽」', // 見出し
            contents: [
                `
                    玄関前に広々とした土間スペースがあるお宅。<br>
                    植物好きの方からのご依頼で、もともとあった植物のほかに新たに木でプランターを作り、
                    いくつか植物も追加して組み合わせました。
                `, // 画像1枚目の説明
                '枕木でベンチを作って花台に。',   // 2枚目
                '流木や自然石ゴロタで雰囲気作り。', // 3枚目
                '背の高い紅葉「コトノイト」が全体をまとめます。',// 4枚目
            ]
        },
        '「細いアプローチ」の庭。': { // タイトル
            year: 2016, // 施工年
            img_cnt: 14,  // 画像枚数
            heading: '家の周りをぐるりと囲む「細いアプローチ」の庭。', // 見出し
            contents: [
                `
                    家の周りの１ｍほどの通路スペース。<br>
                    普通であれば川砂利を敷いておしまいになりがちなスペースを、アプローチを兼ねたお庭へ。
                `, // 画像1枚目の説明
                '芝と石畳とで、ナチュラルモダンな雰囲気を。',   // 2枚目
                '石畳の中央には、ロシアンオリーブとオリーブを植えて。', // 3枚目
                '',// 4枚目
                '',
                '',
                '隣家との隙間も、いろんな葉色の植栽で暗くならないように。',
                '部屋から降りれるように、アイアンと木で作ったステップを。',
                '',
                '',
                '小さな畑のスペースも作って。',
                '',
                '',
                '',
            ]
        },
        '「ウッドデッキが主役」の庭。': { // タイトル
            year: 2017, // 施工年
            img_cnt: 5,  // 画像枚数
            heading: '広い庭の角に、さらに「ウッドデッキが主役」の庭を。', // 見出し
            contents: [
                `
                    広い広いお庭の一角。<br>
                    子供たちとくつろいだりＢＢＱできるスペースとして、ウッドデッキを主役とした
                    植栽プランにて作らせていただきました。
                `, // 画像1枚目の説明
                'アマゾンジャラのデッキに合わせて、花壇のレンガは白く塗って。',   // 2枚目
                '手すりはアマゾンジャラにアイアンを合わせて。', // 3枚目
                '枕木を立てたり、アメリカのフェンスを取り付けて囲われた感を。',// 4枚目
                '夜も楽しめるように、ライトアップもカッコよく。',
            ]
        },
        '「二種類」の庭。': { // タイトル
            year: 2016, // 施工年
            img_cnt: 15,  // 画像枚数
            heading: '黒壁の前の「男前な植栽」の庭と、\n白い玄関前の「モダン」な庭。', // 見出し
            contents: [
                `
                    今回は、二種類の庭を作らせていただきました。<br>
                    まずは、カッコイイ黒壁を背に「男前な植栽」の庭を。
                `, // 画像1枚目の説明
                '土留めに鉄板や自然石ごろたを使って。',   // 2枚目
                '', // 3枚目
                '',// 4枚目
                '',
                'メインツリーにユッカ・ロストラータを。',
                '品のある白い玄関前スペースは、白の乱形石張りや黒のブロックでまた違う格好良さを。',
                '',
                '',
                '',
                '',
                '枕木で二つの庭に関連性を持たせて。',
                '素敵な庭にライトアップは欠かせません。',
                '',
                '',
            ]
        },
        '「コンクリート壁が映える」庭。': { // タイトル
            year: 2016, // 施工年
            img_cnt: 2,  // 画像枚数
            heading: '「コンクリート壁が映える」庭。', // 見出し
            contents: [
                '駐車スペースの後ろに大きなコンクリート壁と枕木を立てて、方形の石張りでナチュラルモダンな庭を。', // 画像1枚目の説明
                '',   // 2枚目
            ]
        },
        '「植栽」の庭。': { // タイトル
            year: 2016, // 施工年
            img_cnt: 2,  // 画像枚数
            heading: '「植栽」の庭。', // 見出し
            contents: [
                '玄関前のアプローチ脇に植栽をさせていただきました。', // 画像1枚目の説明
                '',   // 2枚目
            ]
        }
    },
    decorations: {
        '「かんきょう庵」様': { // タイトル
            year: 2016, // 施工年
            img_cnt: 5,  // 画像枚数
            heading: '「かんきょう庵」様', // 見出し
            contents: [
                '大型観葉植物に、流木を使ったヘキサテーブルをつくらせていただきました。', // 画像1枚目の説明
                '',   // 2枚目
                '',// 説明なしは空白。
                '',
                '',
            ]
        }
    },
    creations: {

    },
    wa: {
        '「土色の優しい土間」の庭': { // タイトル
            year: 2018, // 施工年
            img_cnt: 11,  // 画像枚数
            heading: '落ち着きのある和の庭へ\n「土色の優しい土間」の庭。', // 見出し
            contents: [
                '玄関前からの眺め。', // 画像1枚目の説明
                '庭中央から玄関の方を向いて。',   // 2枚目
                `
                    土間と砂利と飛び石と。<br>
                    母屋の玄関わきに広がる立派な和風のお庭のリガーデンをさせていただきました。
                    もともと植えられていた芝を剥ぎ、新たにたたき風の土間と化粧砂利で草が生えないエリアを作りました。
                    飛び石はあれどなかなか広いお庭でしたので、途中ひょうたん型の苔島を作ったり、延べ段を作ったり。
                    その時々思いついたデザインで、現場にある材料を使わせていただいて、私たちも楽しみながら制作を
                    させていただきました！
                `, // 長い文章は''じゃなくて``で囲えば複数行立てで書ける。改行は<br>
                'ある石を使って延べ段を。', 
                '水鉢周りも苔や植物を移植して。',
                '飛び石に壊れた灯篭の笠を。',
                '古い石臼をポイントに埋めて。',
                '延べ段の始まりにも石臼を。',
                '苔島はそこだけで小さな世界が。',
                '土間の脇に植栽スペースを作って。',
                '',
            ]
        }
    }
};