import { CircleChevronDown } from "lucide-react";
import {
  BackdropSection,
  FadeInOutParagraph,
} from "./components/BackdropSection";
import AlbumFloatingBackdrop from "./components/AlbumFloatingBackdrop";
import stage1Img from "./stage1.webp";
import stage2Img from "./stage2.webp";
import stage3Img from "./stage3.webp";
import stage4Img from "./stage4.webp";
import stage5Img from "./stage5.webp";
import stage6Img from "./stage6.webp";
import stage7Img from "./stage7.webp";

const years = [
  "1949-1959",
  "1960-1973",
  "1974-1983",
  "1984-1997",
  "1998-2009",
  "2010-2019",
  "2020-2026",
];

function App() {
  return (
    <main>
      {/* <!-- Section: Cover --> */}
      <section className="h-screen flex flex-col justify-center">
        <AlbumFloatingBackdrop />
        <div className="m-8">
          <span className="text-zinc-400 text-lg block">
            香港浸會大學學生會文學學會
          </span>
          <span className="text-zinc-400 text-lg block">
            二零二五至二零二六年度
          </span>
          <h2 className="text-4xl my-2">學術周</h2>
          <h1 className="text-5xl font-sans font-medium my-4">粵語歌與美學</h1>
          <h3 className="text-lg my-4 text-zinc-400">
            50年代至現今的香港流行曲及美學演變
          </h3>
          <span className="text-orange-400 text-lg flex items-center gap-1">
            下滾查看 <CircleChevronDown className="inline size-5" />
          </span>
          <div className="flex flex-col mt-8 gap-2">
            <span className="text-3xl font-bold">目錄</span>
            <ol className="list-disc ml-6">
              {years.map((stage, index) => {
                return (
                  <li className="my-2" key={index}>
                    <a
                      className="underline text-blue-300 text-lg"
                      href={`#stage${index + 1}-heading`}
                      onClick={(e) => {
                        e.preventDefault();
                        const element = document.getElementById(
                          `stage${index + 1}-heading`,
                        );
                        if (!element) return;
                        element.scrollIntoView({
                          behavior: "smooth",
                          block: "center",
                        });
                      }}
                    >
                      {stage}
                    </a>
                  </li>
                );
              })}
            </ol>
          </div>
        </div>
      </section>

      {/* <!-- Section: Stage 1 --> */}
      <BackdropSection id="stage1" backdropImage={stage1Img}>
        <h2
          className="text-center text-6xl font-black mb-64"
          id="stage1-heading"
        >
          1949-1959
        </h2>
        <FadeInOutParagraph>
          49年後，在經歷社會動盪的香港，人口雖多為粵語使用者，但流行音樂仍以國語流行曲主導。
        </FadeInOutParagraph>
        <FadeInOutParagraph>
          這些國語流行曲源自1920年代的上海，受西方爵士樂影響，歌曲風格融合傳統中國民謠與西方節奏，摒棄粵劇的腔板唱法，轉向自然發聲和AABA曲式結構，強調旋律的流暢性和節奏的輕快躍動，歌詞接地氣、描繪日常情感如愛情與離愁，雖缺乏深層文學意境，但其美學演變從傳統戲曲的華麗轉向現代都市的簡約親民，後來卻被視為「黃色歌曲」而在內地遭禁。
        </FadeInOutParagraph>
        <FadeInOutParagraph>
          不久後，上海音樂人如姚敏、李厚襄選擇南遷香港，使香港成為流行曲中心，歌曲能以簡單唱片方式出口東南亞，延續上海遺產的融合美學，為本地音樂注入創新元素。
        </FadeInOutParagraph>
        <FadeInOutParagraph>
          期間，粵劇逐漸衰退，其美學以梆黃腔調為主，歌詞典雅、強調情感深度和敘事性，但受限於保守形式，逐漸無法適應現代娛樂需求。粵語歌曲則被邊緣化，常被視為低俗，受政府管制和社會偏見限制，無法進入主流市場，其早期形式如粵語短歌借用時代曲旋律填入生活化諧趣詞彙，試圖從傳統粵曲的嚴肅美學轉向通俗娛樂，但仍無力競爭。
        </FadeInOutParagraph>
        <FadeInOutParagraph>
          而美國流行歌和菲籍歌手為國語流行曲注入新元素，如爵士即興和社交舞節奏，令粵語歌進一步式微。夜總會和歌廳的著名歌手如紫羅蓮和李寶瑩，以甜美聲線歌唱有關愛情與離愁的歌曲，迎合移民的情感需求，其演唱風格從上海的低音柔媚演變，標誌美學向情感表達的細膩轉移。
        </FadeInOutParagraph>
        <FadeInOutParagraph>
          新人如姚莉、周璇等內地歌手的崛起，標誌香港傳統歌曲向現代轉型，上海音樂遺產在香港的延續，不僅奠基後來粵語流行曲的基礎，還推動美學從單一傳統向中西合璧的多元演變，為1970年代粵語流行曲的興起鋪路。
        </FadeInOutParagraph>
      </BackdropSection>
      <BackdropSection id="stage2" backdropImage={stage2Img}>
        <h2
          className="text-center text-6xl font-black mb-64"
          id="stage2-heading"
        >
          1960-1973
        </h2>
        <FadeInOutParagraph>
          香港流行音樂經歷轉型期，社會從移民過渡心態轉向本土認同，經濟起飛形成務實崇洋的青年文化。粵語流行曲雖仍受歧視，被視為低俗，但開始透過廣告歌和短歌形式萌芽，填補傳統粵曲與國語時代曲之間的空隙。這些歌曲強調通俗口語，摒棄過度典雅或庸俗的風格，逐漸融入現代節奏，形成更親近聽眾的表達方式。
        </FadeInOutParagraph>
        <FadeInOutParagraph>
          後來媒體興起加速音樂演變，「邵氏兄弟」推廣黃梅調電影，將傳統戲曲旋律現代化，融入西方編曲元素，如《江山美人》的《扮皇帝》，讓黃梅調歌曲成為熱潮，影響後來粵語歌的旋律纏綿與情感深度。「商業電台」啟播後，粵語廣告歌如《新奇洗衣粉》開始流行，注重咬字自然與裝飾音簡潔，奠定粵語流行曲美學基礎，避免粵劇式的刻意「露字」，轉向生活化唱法。
        </FadeInOutParagraph>
        <FadeInOutParagraph>
          英文歌與美國流行曲負責高端娛樂，如夜總會由菲籍樂師控制，強調視奏能力和奔放風格，促使華人音樂人如顧嘉煇學習西方技巧，融入中西合璧元素。港產情歌如《不了情》崛起，旋律起伏迂迴，歌詞充滿詩意，標示著國語流行曲的本土化，影響粵語流行曲轉變至情感抒發與現代感。同時，工廠青年支持偶像如陳寶珠的粵語電影歌曲，雖製作粗糙，但推廣通俗主題，預示了粵語流行曲的群眾基礎。
        </FadeInOutParagraph>
        <FadeInOutParagraph>
          整體美學演變從上海餘韻轉向本土特色，外來影響如披頭四來港引發樂團熱潮，刺激本土創作如許冠傑的英文搖滾嘗試。歌唱比賽中的新人如黃霑的加入、電視普及推廣主題曲，令粵語歌逐漸擺脫歧視。其旋律在注入新血後開始悅耳易記，歌詞貼近口語，奠定七十年代粵語流行曲的雅俗共賞風格。這時期雖國語與英文歌仍佔優，但粵語元素開始滲透，反映音樂從依賴進口向本土創新過渡。
        </FadeInOutParagraph>
      </BackdropSection>
      <BackdropSection id="stage3" backdropImage={stage3Img}>
        <h2
          className="text-center text-6xl font-black mb-64"
          id="stage3-heading"
        >
          1974-1983
        </h2>
        <FadeInOutParagraph>
          香港流行曲進入粵語主導的時代，本土意識在中國政經動盪與庶民自強精神的交織下逐漸成型，促使音樂創作擺脫過客心態，轉向反映香港的本土價值與情感。
        </FadeInOutParagraph>
        <FadeInOutParagraph>
          音樂美學演變從戰戰兢兢的探索開始，採用AABA曲式確保結構嚴謹悅耳，中西合璧聲音融合傳統五音階與西洋轉調，創造新舊交融的聽覺體驗；歌詞手法沿襲粵曲傳統，先曲後詞並注重叶韻，提升通俗易唱性。
        </FadeInOutParagraph>
        <FadeInOutParagraph>
          另外，內容會捕捉小市民心態，如人生無奈與社會寫實，同時也融入俚語與方言而避免陳舊文言，讓香港流行曲從外來依賴轉向本土創新。
        </FadeInOutParagraph>
        <FadeInOutParagraph>
          大眾傳媒亦合力推動粵語流行曲普及，DJ文化透過節目如青春交響曲，介紹其創作背景，以刺激青少年消費；電視長篇劇主題曲如《啼笑姻緣》也協助消除語言歧視，綜藝節目與金曲榜更強化粵語流行曲的競爭；新秀比賽則發掘了張學友等新人的加入。
        </FadeInOutParagraph>
        <FadeInOutParagraph>
          電影如《鬼馬雙星》與音樂會轉型為集體娛樂場合，許冠傑成為核心人物，其歌曲旋律輕鬆融入搖滾元素，歌詞通俗描繪草根哲理，聲音沙啞自然，製作精緻認真，因而奠定了粵語流行曲美學基礎。
        </FadeInOutParagraph>
        <FadeInOutParagraph>
          後來日曲粵詞潮借東方韻味填補本土創作短缺，新一代樂人如奧甘寶等加入貢獻編曲，創造出強調自我、口語與文言混用的現代感詞風。而新歌手如林子祥、梅艷芳、鄧麗君等更令樂壇百花齊放。
        </FadeInOutParagraph>
        <FadeInOutParagraph>
          這個時期會融合新派電影歌與台灣民歌，其旋律注重悅耳結構，歌詞反映出社會哲理，令整體美學水平提高，由此確立香港文化身份，輸出至全球華人地區，成為文化橋樑，最終奠定粵語流行曲奇蹟基礎。此外，立體聲、Hi-Fi與Walkman以及版權法如C.A.S.H.的出現也幫助了粵語流行曲起死回生。
        </FadeInOutParagraph>
      </BackdropSection>
      <BackdropSection id="stage4" backdropImage={stage4Img}>
        <h2
          className="text-center text-6xl font-black mb-64"
          id="stage4-heading"
        >
          1984-1997
        </h2>
        <FadeInOutParagraph>
          這段時期香港社會多元化發展，經濟繁榮帶動更多消費，音樂產業空前興旺。偶像崇拜成為主流美學趨向，歌迷透過演唱會投射自我，追求感官刺激，催生天王天后如張學友、譚詠麟等，以歌藝和包裝主導市場。
        </FadeInOutParagraph>
        <FadeInOutParagraph>
          同時，卡拉OK興起民主化演唱，縮窄歌曲音域至十度內，旋律趨向簡單易唱，反映自戀式文化，但也限制創作深度。後來歌曲輸出兩岸及全球時會融入愛國情懷如《我的中國心》，反映美學從本土情感轉向跨界融合。
        </FadeInOutParagraph>
        <FadeInOutParagraph>
          而新血如林夕、黃偉文、周耀輝等的加入更令內容多元而感性，其詞曲技巧緊貼城市生活，中西元素更成熟。
        </FadeInOutParagraph>
        <FadeInOutParagraph>
          84年後，作曲家和詞家人數激增，令創作生產劇增而導致青黃不接，量多質難保持質素，產品兩極化，精品與行貨並存，當時美學上強調包容但令品質下滑。
        </FadeInOutParagraph>
        <FadeInOutParagraph>
          分眾社會與大眾共識並存，樂隊潮如達明一派、太極注入另類風格，捕捉青年孤寂，旋律生澀卻創新，歌詞沙石多但題材新穎，豐富Cantopop的多樣性。
        </FadeInOutParagraph>
        <FadeInOutParagraph>
          一系列歷史事件的發生如1979年改革開放、1984年中英聯合聲明、1989年六四事件都震撼港人，歌曲卻避談政治，更聚焦於個人情感，自由表達成心理窗口，如此的政治冷感使當代詞曲空泛，少有深度反思。
        </FadeInOutParagraph>
        <FadeInOutParagraph>
          1988年中文歌運動、1995年原創歌運動推動本地創作，雖減少改編外國歌來提升粵語主導權，但加速水準下降導致椿苗助長。
        </FadeInOutParagraph>
        <FadeInOutParagraph>
          九七回歸前興旺，天王天后校長主宰，唱片產量達1800萬張，零售值18億港元，美學注重視覺包裝與感官享受；九七回歸後反而衰敗，兩岸開放令內地音樂崛起如周杰倫、崔健，分薄香港市場，加上翻版猖狂、科技民主化創作但品質低落、社會老化與年輕歌迷偏好偶像外表、粵語流行曲產品單一乏善可陳等因素，導致粵語流行曲失佢獨特性，零售額降三分之一，美學從創新變成跟風，需重建強烈身份才能重振。
        </FadeInOutParagraph>
      </BackdropSection>
      <BackdropSection id="stage5" backdropImage={stage5Img}>
        <h2
          className="text-center text-6xl font-black mb-64"
          id="stage5-heading"
        >
          1998-2009
        </h2>

        <FadeInOutParagraph>
          香港流行曲處於由黃金年代滑落後的「轉型期」，經歷1997年金融風暴和回歸後中國內地、台灣華語流行的夾擊，粵語唱片銷售量大幅下滑，逼使粵語歌在題材與美學上尋找新方向。
        </FadeInOutParagraph>
        <FadeInOutParagraph>
          這個階段一方面延續九十年代的唱作傳統，例如陳奕迅由《K歌之王》到《Shall
          We Talk》，將都市人的壓抑、自我懷疑與親子關係寫得細膩而具戲劇性；
        </FadeInOutParagraph>
        <FadeInOutParagraph>
          另一方面，偶像派的誕生全面壟斷市場，Twins、Boy'z、謝霆鋒等人以青春、校園、戀愛為主題，歌如《女校男生》、《潛龍勿用》以輕快節奏、簡單旋律配合MV中的時尚造型和舞步，建立一套以視覺主導的偶像美學。
        </FadeInOutParagraph>
        <FadeInOutParagraph>
          製作上，這時期編曲大量運用電子鼓組和合成器，但保留強烈旋律線與副歌「位」，K歌文化與卡拉OK場景深度綁定，令許多歌一出生就被設計成「人人都要唱」，例如容祖兒《我的驕傲》、楊千嬅《小城大事》，在聲線處理上追求高音爆發與情緒宣洩，呈現出一種在現實壓力之中的浪漫逃避與勵志美學。
        </FadeInOutParagraph>
      </BackdropSection>
      <BackdropSection id="stage6" backdropImage={stage6Img}>
        <h2
          className="text-center text-6xl font-black mb-64"
          id="stage6-heading"
        >
          2010-2019
        </h2>

        <FadeInOutParagraph>
          香港流行曲進入被很多人形容為「低潮期」的階段，市場被韓國流行與國語歌分薄，唱片銷量持續大減，但在相對冷卻的商業環境中，卻孕育出更多風格實驗與獨立聲音。
        </FadeInOutParagraph>
        <FadeInOutParagraph>
          主流上，陳奕迅等天王級歌手轉向較成熟的聲音處理與多元音樂元素，例如《苦瓜》、《任我行》引入爵士、放克節奏，展現中產都會的灰色幽默。
        </FadeInOutParagraph>
        <FadeInOutParagraph>
          同時，麥浚龍在《殘酷遊戲》、《耶穌》以及後來的《羅生門》系列，把粵語流行曲塑造成一個帶有電影感與宗教隱喻的敘事宇宙，MV以大量暗色調、象徵意象構成，形成另類陰鬱的視覺美學。
        </FadeInOutParagraph>
        <FadeInOutParagraph>
          與此同時，獨立樂隊與新一代創作人如Dear
          Jane、RubberBand把搖滾、英倫流行與本地日常語境融合，例如 Dear
          Jane《哪裡只得我一個》、RubberBand《阿波羅》，以Band
          Sound、即興感與生活化歌詞回應城市壓力、身份認同與世代矛盾。
        </FadeInOutParagraph>
        <FadeInOutParagraph>
          這十年雖然欠缺九十年代那種全民齊唱的大熱金曲感覺，但在詞曲結構、編曲層次與題材深度上，卻走向「小眾而精緻」，從愛情延伸至社會觀察、自嘲、政治暗喻，為之後的「本土情緒爆發」奠下審美基礎。
        </FadeInOutParagraph>
      </BackdropSection>
      <BackdropSection id="stage7" backdropImage={stage7Img}>
        <h2
          className="text-center text-6xl font-black mb-64"
          id="stage7-heading"
        >
          2020-2026
        </h2>
        <FadeInOutParagraph>
          這常被視為「本土復興與偶像回歸」的階段，一方面是因為疫情、社會運動與移民潮令集體情緒急劇變化，另一方面則因本地男團女團成功開創新一波偶像文化，重新吸引大批年輕聽眾。
        </FadeInOutParagraph>
        <FadeInOutParagraph>
          Mirror、ERROR、COLLAR
          等組合的出現，帶來近似韓團的訓練與舞台製作模式，歌曲如
          Mirror《Ignited》、《Warrior》以 EDM、Trap、Dance Pop
          為核心，舞蹈編排與造型設計高度視覺化，MV
          借用霓虹城市、機能服飾、街頭塗鴉等元素，塑造出一種混合本地街頭與全球流行的偶像美學。
        </FadeInOutParagraph>
        <FadeInOutParagraph>
          但在語言和細節上仍然非常「香港」，例如歌詞大量使用地道廣東話語氣與都市用語，強調「我哋」這種集體身分。同時，獨立創作亦相當活躍，如姜濤《蒙著嘴說愛你》在情歌框架下夾雜疫情時代的無力感，Serrini、AGA
          等人則透過《Let Us Go Then, You and
          I》、《一加一》之類作品，用詩意與細膩旋律處理愛情與離散主題。
        </FadeInOutParagraph>
        <FadeInOutParagraph>
          這幾年不少歌曲直接或間接回應移民、告別與記憶，例如關於「留與走」、「再見香港」的歌，往往用溫柔編曲、低飽和色調MV
          與舊區景象，營造一種既懷舊又傷感的美學氛圍。
        </FadeInOutParagraph>
        <FadeInOutParagraph>
          總體而言，這一階段的香港流行曲一邊擁抱高度商業化的偶像工業與網絡宣傳，一邊在歌詞與影像上強調本土情感、離散經驗與日常生活細節，形成既外向又內省的複合風格。
        </FadeInOutParagraph>
      </BackdropSection>
    </main>
  );
}

export default App;
