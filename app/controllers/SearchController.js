// ==========================================================================
// The M-Project - Mobile HTML5 Application Framework
// Generated with: Espresso 
//
// Project: MobileTank
// Controller: SearchController
// ==========================================================================

MobileTank.SearchController = M.Controller.extend({

    /* sample controller property */
    searchCriteria: '',

    udid: null,

    results: '',

    marken:null,

    spritarten:null,
    suchradius:null,
    suchmodus:null,
    anzeige:null,


    /*
     * Sample function
     * To handle the first load of a page.
     */
    init: function(isFirstLoad) {
        if (isFirstLoad) {

            //var xml = '<?xml version="1.0" encoding="UTF-8"?><stations><station id="7dcb9de" brand="16" selfreport="0" checked="1"><stationname>RAN</stationname><country>DE</country><adress>Hedelfinger Str. 17</adress><plz>70327</plz><city>Stuttgart</city><coordinates lat="48.76971" lon="9.24734" /><fuel type="2" currency="EUR" price_current="1.619" update="17.05.2012, 00:07" /></station><station id="d9e26bf5" brand="16" selfreport="0" checked="0"><stationname>Dalacker</stationname><country>DE</country><adress>Nürtinger Str. 24</adress><plz>72622</plz><city>Nürtingen</city><coordinates lat="48.6182289123535" lon="9.31328010559082" /><fuel type="2" currency="EUR" price_current="1.609" update="17.05.2012, 09:26" /></station><station id="a60834f8" brand="16" selfreport="0" checked="1"><stationname>SB Tankstelle</stationname><country>DE</country><adress>Weilstr. 105</adress><plz>73734</plz><city>Esslingen</city><coordinates lat="48.7352896" lon="9.2874727" /><fuel type="2" currency="EUR" price_current="1.619" update="17.05.2012, 12:09" /></station><station id="1e1b354d" brand="16" selfreport="0" checked="0"><stationname>Vogel-Garagen</stationname><country>DE</country><adress>Salzburger Str. 46</adress><plz>70469</plz><city>Stuttgart</city><coordinates lat="48.8113784790039" lon="9.15076065063477" /></station><station id="8c745ee3" brand="1" selfreport="0" checked="0"><stationname></stationname><country>DE</country><adress>Friesenstr. 34</adress><plz>71640</plz><city>Ludwigsburg</city><coordinates lat="48.8935012817383" lon="9.22373962402344" /></station><station id="4ffb18a2" brand="16" selfreport="0" checked="0"><stationname>Bavaria Petrol</stationname><country>DE</country><adress>Tilsiter Str. 15</adress><plz>71065</plz><city>Sindelfingen</city><coordinates lat="48.7032051086426" lon="9.03133678436279" /><fuel type="2" currency="EUR" price_current="1.614" update="16.05.2012, 18:45" /></station><station id="7e593788" brand="1" selfreport="0" checked="0"><stationname></stationname><country>DE</country><adress>Rommelshauser Str. 30</adress><plz>70734</plz><city>Fellbach</city><coordinates lat="48.8053245544434" lon="9.2839527130127" /></station><station id="647d36e8" brand="16" selfreport="0" checked="1"><stationname>HEM</stationname><country>DE</country><adress>Aldinger Str. 83</adress><plz>70806</plz><city>Kornwestheim</city><coordinates lat="48.86731" lon="9.19956" /><fuel type="2" currency="EUR" price_current="1.639" update="16.05.2012, 14:30" /></station><station id="633a911d" brand="16" selfreport="0" checked="0"><stationname>MTB Auto Heidt</stationname><country>DE</country><adress>Nürtinger Str. 90</adress><plz>72663</plz><city>Großbettlingen</city><coordinates lat="48.5961112976074" lon="9.31072998046875" /></station><station id="910c66a9" brand="16" selfreport="0" checked="0"><stationname>real,-</stationname><country>DE</country><adress>Ruhrstr. 5</adress><plz>71332</plz><city>Waiblingen</city><coordinates lat="48.8175506591797" lon="9.29965972900391" /><fuel type="2" currency="EUR" price_current="1.619" update="15.05.2012, 11:19" /></station><station id="f06938d7" brand="16" selfreport="0" checked="1"><stationname>Miedtank </stationname><country>DE</country><adress>Handwerkstr. 35</adress><plz>70565</plz><city>Stuttgart</city><coordinates lat="48.7195866" lon="9.1246844" /><fuel type="2" currency="EUR" price_current="1.619" update="16.05.2012, 12:57" /></station><station id="c8eb464a" brand="1" selfreport="0" checked="0"><stationname></stationname><country>DE</country><adress>Heilbronner Str. 392</adress><plz>70191</plz><city>Stuttgart</city><coordinates lat="48.8214416503906" lon="9.17496013641357" /><fuel type="2" currency="EUR" price_current="1.649" update="17.05.2012, 07:43" /></station><station id="b53d4dd3" brand="16" selfreport="0" checked="0"><stationname>Raiffeisen</stationname><country>DE</country><adress>Winnender Str. 50</adress><plz>71563</plz><city>Affalterbach</city><coordinates lat="48.9206199645996" lon="9.3300895690918" /></station><station id="50943c4a" brand="1" selfreport="0" checked="0"><stationname></stationname><country>DE</country><adress>Obertürkheimer Str. 21</adress><plz>73733</plz><city>Esslingen - Mettingen</city><coordinates lat="48.7510795593262" lon="9.27515029907227" /></station><station id="8ed63ca3" brand="1" selfreport="0" checked="1"><stationname></stationname><country>DE</country><adress>Umgehungsstr. 65</adress><plz>71144</plz><city>Steinenbronn</city><coordinates lat="48.65871" lon="9.12333" /></station><station id="a3353d13" brand="16" selfreport="0" checked="1"><stationname>Mr. Wash</stationname><country>DE</country><adress>Heilbronner Str. 309</adress><plz>70469</plz><city>Stuttgart</city><coordinates lat="48.814924" lon="9.1779963" /><fuel type="2" currency="EUR" price_current="1.629" update="17.05.2012, 00:06" /></station><station id="a72a3d72" brand="16" selfreport="0" checked="1"><stationname>Bavaria Petrol</stationname><country>DE</country><adress>Porschestr. 3</adress><plz>71634</plz><city>Ludwigsburg</city><coordinates lat="48.9205418" lon="9.1509299" /><fuel type="2" currency="EUR" price_current="1.604" update="16.05.2012, 19:49" /></station><station id="55463e0b" brand="16" selfreport="0" checked="0"><stationname>Auto Nitschke</stationname><country>DE</country><adress>Fritz-Müller-Allee 2</adress><plz>71409</plz><city>Schwaikheim</city><coordinates lat="48.8685989379883" lon="9.35359954833984" /><fuel type="2" currency="EUR" price_current="1.609" update="15.05.2012, 19:18" /></station><station id="01113e91" brand="16" selfreport="0" checked="1"><stationname>SB-Tankstelle Ansorge </stationname><country>DE</country><adress>Hackstr. 6</adress><plz>70190</plz><city>Stuttgart</city><coordinates lat="48.78913" lon="9.19731" /><fuel type="2" currency="EUR" price_current="1.619" update="17.05.2012, 00:06" /></station><station id="97543f54" brand="16" selfreport="0" checked="1"><stationname>HEM</stationname><country>DE</country><adress>Robert-Bosch-Str. 13</adress><plz>71701</plz><city>Schwieberdingen</city><coordinates lat="48.88137" lon="9.07918" /><fuel type="2" currency="EUR" price_current="1.639" update="16.05.2012, 16:53" /></station><station id="8f6f40e0" brand="16" selfreport="0" checked="0"><stationname>SB-Tankstelle</stationname><country>DE</country><adress>Gröninger Weg 4</adress><plz>74321</plz><city>Bietigheim-Bissingen</city><coordinates lat="48.9441471" lon="9.1422673" /><fuel type="2" currency="EUR" price_current="1.639" update="16.05.2012, 23:10" /></station><station id="1e1a4123" brand="1" selfreport="0" checked="0"><stationname></stationname><country>DE</country><adress>Kriegsbergstr. 55</adress><plz>70174</plz><city>Stuttgart</city><coordinates lat="48.7824211120605" lon="9.17374992370605" /><fuel type="2" currency="EUR" price_current="1.649" update="17.05.2012, 08:29" /></station><station id="99b342e7" brand="16" selfreport="0" checked="1"><stationname>HEM</stationname><country>DE</country><adress>Arnoldstr. 45-49</adress><plz>70378</plz><city>Stuttgart</city><coordinates lat="48.84024" lon="9.22652" /><fuel type="2" currency="EUR" price_current="1.619" update="16.05.2012, 21:54" /></station><station id="465a44dc" brand="16" selfreport="0" checked="0"><stationname>Freie Tankstelle</stationname><country>DE</country><adress>Seerosenstr. 48</adress><plz>70563</plz><city>Stuttgart</city><coordinates lat="48.7337989807129" lon="9.10696983337402" /><fuel type="2" currency="EUR" price_current="1.619" update="16.05.2012, 17:26" /></station><station id="6789450c" brand="16" selfreport="0" checked="1"><stationname>RAN</stationname><country>DE</country><adress>Siemensstr. 8</adress><plz>71254</plz><city>Ditzingen</city><coordinates lat="48.8232984" lon="9.0715219" /><fuel type="2" currency="EUR" price_current="1.599" update="16.05.2012, 18:45" /></station><station id="9da34550" brand="16" selfreport="0" checked="0"><stationname>MTB</stationname><country>DE</country><adress>Möhringer Str. 18</adress><plz>70794</plz><city>Filderstadt-Sielmingen</city><coordinates lat="48.6760406494141" lon="9.23628997802734" /><fuel type="2" currency="EUR" price_current="1.639" update="17.05.2012, 08:51" /></station><station id="7e75460f" brand="16" selfreport="0" checked="0"><stationname>Wiedemann</stationname><country>DE</country><adress>Südstr. 74</adress><plz>71404</plz><city>Korb</city><coordinates lat="48.8377685546875" lon="9.36011409759521" /></station><station id="e61e4978" brand="16" selfreport="0" checked="1"><stationname></stationname><country>DE</country><adress>Aicher Str. 52</adress><plz>72631</plz><city>Aichtal</city><coordinates lat="48.6241" lon="9.21502" /></station><station id="1f2049dd" brand="16" selfreport="0" checked="0"><stationname>RAN</stationname><country>DE</country><adress>Engelbergstr. 5</adress><plz>70499</plz><city>Stuttgart</city><coordinates lat="48.8039588928223" lon="9.10130023956299" /><fuel type="2" currency="EUR" price_current="1.599" update="16.05.2012, 19:57" /></station><station id="50b54b4f" brand="1" selfreport="0" checked="0"><stationname></stationname><country>DE</country><adress>Karlstr. 60</adress><plz>71394</plz><city>Rommelshausen</city><coordinates lat="48.8081855773926" lon="9.32300853729248" /><fuel type="2" currency="EUR" price_current="1.639" update="16.05.2012, 16:21" /></station><station id="66bf4ca4" brand="16" selfreport="0" checked="0"><stationname>Ludwig</stationname><country>DE</country><adress>Maienwalterstr. 7</adress><plz>73733</plz><city>Esslingen</city><coordinates lat="48.7572364807129" lon="9.29977226257324" /><fuel type="2" currency="EUR" price_current="1.649" update="17.05.2012, 13:11" /></station><station id="59104eaf" brand="16" selfreport="0" checked="0"><stationname>Freie Tankstelle Hees</stationname><country>DE</country><adress>Daimlerstr. 2</adress><plz>70736</plz><city>Fellbach</city><coordinates lat="48.8427314758301" lon="9.25802993774414" /><fuel type="2" currency="EUR" price_current="1.619" update="17.05.2012, 12:50" /></station><station id="48dd4f8a" brand="16" selfreport="0" checked="0"><stationname>Lorinser</stationname><country>DE</country><adress>Alte Bundesstr. 45</adress><plz>71332</plz><city>Waiblingen</city><coordinates lat="48.8221626281738" lon="9.31541347503662" /><fuel type="2" currency="EUR" price_current="1.639" update="16.05.2012, 16:53" /></station><station id="37614fc6" brand="16" selfreport="0" checked="0"><stationname>EnBW Tankstelle</stationname><country>DE</country><adress>Talstr. 117</adress><plz>70188</plz><city>Stuttgart</city><coordinates lat="48.7888412475586" lon="9.21848964691162" /></station><station id="b9344feb" brand="16" selfreport="0" checked="0"><stationname>Minol</stationname><country>DE</country><adress>Mundelsheimer Str. 34</adress><plz>74385</plz><city>Pleidelsheim</city><coordinates lat="48.964241027832" lon="9.20477962493896" /><fuel type="2" currency="EUR" price_current="1.649" update="15.05.2012, 14:23" /></station><station id="c5a45077" brand="16" selfreport="0" checked="1"><stationname>Steinmaßl</stationname><country>DE</country><adress>Poppenweiler Str. 8</adress><plz>71672</plz><city>Marbach</city><coordinates lat="48.9369659423828" lon="9.25936031341553" /><fuel type="2" currency="EUR" price_current="1.659" update="14.05.2012, 16:07" /></station><station id="652250da" brand="1" selfreport="0" checked="1"><stationname></stationname><country>DE</country><adress>Stuttgarter Str. 24</adress><plz>70839</plz><city>Gerlingen</city><coordinates lat="48.7891126" lon="9.0493707" /><fuel type="2" currency="EUR" price_current="1.679" update="15.05.2012, 07:39" /></station><station id="d45750e6" brand="16" selfreport="0" checked="0"><stationname>Kaufland</stationname><country>DE</country><adress>Steinbeisstr. 15</adress><plz>71711</plz><city>Steinheim</city><coordinates lat="48.9695091247559" lon="9.26736259460449" /><fuel type="2" currency="EUR" price_current="1.620" update="17.05.2012, 10:47" /></station><station id="203f537d" brand="16" selfreport="0" checked="1"><stationname>Rühle Brennstoffe</stationname><country>DE</country><adress>Schorndorfer Str. 17</adress><plz>71384</plz><city>Weinstadt-Endersbach</city><coordinates lat="48.81457" lon="9.37085" /><fuel type="2" currency="EUR" price_current="1.609" update="17.05.2012, 12:55" /></station><station id="073153a2" brand="16" selfreport="0" checked="0"><stationname>ACE Freie Tankstelle</stationname><country>DE</country><adress>Schmidener Str. 233</adress><plz>70374</plz><city>Stuttgart</city><coordinates lat="48.8182716369629" lon="9.24088382720947" /><fuel type="2" currency="EUR" price_current="1.619" update="16.05.2012, 18:45" /></station><station id="d92d5405" brand="16" selfreport="0" checked="0"><stationname>Autoport</stationname><country>DE</country><adress>Hafenbahnstr. 15</adress><plz>70329</plz><city>Stuttgart</city><coordinates lat="48.7610511779785" lon="9.26632595062256" /><fuel type="2" currency="EUR" price_current="1.619" update="16.05.2012, 09:25" /></station><station id="e7025676" brand="1" selfreport="0" checked="0"><stationname></stationname><country>DE</country><adress>Nürnberger Str. 18</adress><plz>70374</plz><city>Stuttgart-Cannstatt</city><coordinates lat="48.8058013916016" lon="9.23361968994141" /><fuel type="2" currency="EUR" price_current="1.649" update="15.05.2012, 12:30" /></station><station id="c67356dc" brand="16" selfreport="0" checked="1"><stationname>Sprint</stationname><country>DE</country><adress>Rotweg 28</adress><plz>70437</plz><city>Stuttgart</city><coordinates lat="48.83366" lon="9.18271" /><fuel type="2" currency="EUR" price_current="1.619" update="15.05.2012, 19:42" /></station><station id="e6aa56f6" brand="16" selfreport="0" checked="1"><stationname>real,-</stationname><country>DE</country><adress>Weilimdorfer Str. 91</adress><plz>70839</plz><city>Gerlingen</city><coordinates lat="48.80607" lon="9.07577" /><fuel type="2" currency="EUR" price_current="1.589" update="16.05.2012, 18:42" /></station><station id="7ee5571d" brand="16" selfreport="0" checked="1"><stationname>HEM</stationname><country>DE</country><adress>Gutenbergstr. 11</adress><plz>71101</plz><city>Schönaich</city><coordinates lat="48.66928" lon="9.0722" /><fuel type="2" currency="EUR" price_current="1.599" update="16.05.2012, 22:14" /></station><station id="5a9f5816" brand="1" selfreport="0" checked="0"><stationname></stationname><country>DE</country><adress>Hedelfinger Str. 73</adress><plz>70327</plz><city>Stuttgart</city><coordinates lat="48.7663612365723" lon="9.24995040893555" /><fuel type="2" currency="EUR" price_current="1.649" update="15.05.2012, 11:11" /></station><station id="663c5a4a" brand="16" selfreport="0" checked="0"><stationname>Autohaus Nägele</stationname><country>DE</country><adress>Gartenstr. 31</adress><plz>74394</plz><city>Hessigheim</city><coordinates lat="48.9926605224609" lon="9.18970012664795" /></station><station id="447f692a" brand="16" selfreport="0" checked="1"><stationname>Hofmeister</stationname><country>DE</country><adress>Poststr. 65</adress><plz>71229</plz><city>Leonberg</city><coordinates lat="48.79614" lon="9.0034" /><fuel type="2" currency="EUR" price_current="1.579" update="15.05.2012, 18:27" /></station><station id="49866e6e" brand="16" selfreport="0" checked="0"><stationname>Freie Tankstelle Blank</stationname><country>DE</country><adress>Stuttgarter Str. 111</adress><plz>70806</plz><city>Kornwestheim</city><coordinates lat="48.8568305969238" lon="9.18556976318359" /><fuel type="2" currency="EUR" price_current="1.619" update="14.05.2012, 19:16" /></station><station id="19eb600b" brand="16" selfreport="0" checked="1"><stationname>Deininger</stationname><country>DE</country><adress>Gottlieb-Daimler-Str. 4</adress><plz>72622</plz><city>Nürtingen</city><coordinates lat="48.6177947" lon="9.3440284" /><fuel type="2" currency="EUR" price_current="1.639" update="15.05.2012, 10:50" /></station><station id="658e618b" brand="16" selfreport="0" checked="1"><stationname>Freie Tankstelle</stationname><country>DE</country><adress>Höhenstr. 10</adress><plz>70736</plz><city>Fellbach</city><coordinates lat="48.8141402" lon="9.2605328" /><fuel type="2" currency="EUR" price_current="1.639" update="16.05.2012, 15:55" /></station><station id="bc1b6273" brand="16" selfreport="0" checked="0"><stationname>Autohaus Knecht GmbH</stationname><country>DE</country><adress>Gutenbergstr. 5</adress><plz>72124</plz><city>Pliezhausen</city><coordinates lat="48.5661697387695" lon="9.19596004486084" /></station><station id="39bc6923" brand="1" selfreport="0" checked="0"><stationname></stationname><country>DE</country><adress>Schönbuchstr. 40</adress><plz>71032</plz><city>Böblingen</city><coordinates lat="48.673469543457" lon="9.01484966278076" /><fuel type="2" currency="EUR" price_current="1.639" update="16.05.2012, 18:04" /></station><station id="96f4659f" brand="16" selfreport="0" checked="1"><stationname>SB Tankstelle an der Metro</stationname><country>DE</country><adress>Motorstr. 16</adress><plz>70825</plz><city>Korntal-Münchingen /Weilimdorf</city><coordinates lat="48.82788" lon="9.10877" /><fuel type="2" currency="EUR" price_current="1.589" update="16.05.2012, 18:44" /></station><station id="fb4e6b53" brand="1" selfreport="0" checked="1"><stationname></stationname><country>DE</country><adress>Welfenstr. 32</adress><plz>70599</plz><city>Stuttgart</city><coordinates lat="48.7196388244629" lon="9.20788955688477" /><fuel type="2" currency="EUR" price_current="1.639" update="16.05.2012, 18:39" /></station><station id="7dea6fb7" brand="1" selfreport="0" checked="0"><stationname></stationname><country>DE</country><adress>Hanns-Martin-Schleyer-Str. 1</adress><plz>71063</plz><city>Sindelfingen</city><coordinates lat="48.7036590576172" lon="9.00164985656738" /><fuel type="2" currency="EUR" price_current="1.649" update="16.05.2012, 10:52" /></station><station id="1b49709a" brand="16" selfreport="0" checked="0"><stationname>Autohaus Zimmermann</stationname><country>DE</country><adress>Karl-Benz-Str. 9</adress><plz>71093</plz><city>Weil im Schönbuch</city><coordinates lat="48.6192855834961" lon="9.03864002227783" /></station><station id="23007192" brand="16" selfreport="0" checked="1"><stationname>Schopp</stationname><country>DE</country><adress>Einsiedelstr. 23</adress><plz>72135</plz><city>Dettenhausen</city><coordinates lat="48.6004863" lon="9.1014632" /></station><station id="df8a72cb" brand="1" selfreport="0" checked="1"><stationname></stationname><country>DE</country><adress>Großingersheimerstr. 5</adress><plz>74321</plz><city>Bietigheim-Bissingen</city><coordinates lat="48.95947" lon="9.13322" /><fuel type="2" currency="EUR" price_current="1.599" update="16.05.2012, 17:46" /></station><station id="64c07dfd" brand="1" selfreport="0" checked="0"><stationname></stationname><country>DE</country><adress>Wuermstr. 40</adress><plz>71065</plz><city>Sindelfingen</city><coordinates lat="48.704231262207" lon="9.00769996643066" /></station><station id="beeb7891" brand="16" selfreport="0" checked="1"><stationname>Öl Heim</stationname><country>DE</country><adress>Gottlieb-Daimler-Str. 17</adress><plz>71093</plz><city>Weil im Schönbuch</city><coordinates lat="48.620594" lon="9.0361635" /></station><station id="a96e8181" brand="16" selfreport="0" checked="1"><stationname>Regenwald-Raststätte Denkendorf</stationname><country>DE</country><adress>Hoher Rain 2</adress><plz>73770</plz><city>Denkendorf</city><coordinates lat="48.6929041" lon="9.3049404" /></station><station id="dece8922" brand="16" selfreport="0" checked="0"><stationname>Freie Tankstelle Breitling &amp; B</stationname><country>DE</country><adress>Eberhardstr. 70</adress><plz>70736</plz><city>Fellbach</city><coordinates lat="48.8168106079102" lon="9.28088188171387" /><fuel type="2" currency="EUR" price_current="1.649" update="15.05.2012, 08:54" /></station><station id="6f848f20" brand="16" selfreport="0" checked="1"><stationname>Freie Tankstelle</stationname><country>DE</country><adress>Aldinger Str. 98</adress><plz>70806</plz><city>Kornwestheim</city><coordinates lat="48.86667" lon="9.20348" /><fuel type="2" currency="EUR" price_current="1.609" update="15.05.2012, 19:43" /></station><station id="b09093d5" brand="16" selfreport="0" checked="1"><stationname>Freie Tankstelle Dede</stationname><country>DE</country><adress>Neckarwiesenstr. 7</adress><plz>70188</plz><city>Stuttgart</city><coordinates lat="48.7815212" lon="9.2292644" /><fuel type="2" currency="EUR" price_current="1.639" update="15.05.2012, 11:07" /></station><station id="3016aa3a" brand="16" selfreport="0" checked="1"><stationname>Center Tank (Jet)</stationname><country>DE</country><adress>Wannenrain 30</adress><plz>73733</plz><city>Esslingen am Neckar - Weil</city><coordinates lat="48.7397516" lon="9.2681281" /><fuel type="2" currency="EUR" price_current="1.579" update="17.05.2012, 12:07" /></station><station id="2cc1b428" brand="1" selfreport="0" checked="0"><stationname></stationname><country>DE</country><adress>Siemensstr. 21</adress><plz>71254</plz><city>Ditzingen</city><coordinates lat="48.8229165222559" lon="9.06925218107402" /></station><station id="31a5b41d" brand="16" selfreport="0" checked="0"><stationname>Hem</stationname><country>DE</country><adress>Siemensstr. 7</adress><plz>71701</plz><city>Schwieberdingen</city><coordinates lat="48.88209345" lon="9.07966874" /><fuel type="2" currency="EUR" price_current="1.639" update="16.05.2012, 16:50" /></station></stations>';
            //this.parseXML(xml);
            MobileTank.RequestController.getCookie();

            MobileTank.BrandViewController.init();
            MobileTank.FuelViewController.init();

            this.marken = {id:'0',name:'Marken',chosen:'Alle'};

            this.spritarten = {id:'1',name:'Spritarten', chosen:'Alle'};

            this.suchradius = {id:'2',name:'Suchradius',chosen:'5km'};


            this.suchmodus = {id:'3',name:'Suchmodus',chosen:'Bitte Wählen'};

            this.suchmodus = {id:'3',name:'Suchmodus',chosen:'Position oder PLZ'};


            this.anzeige = {id:'4',name:'Anzeige',chosen:'Alle'};
        }

        this.setSearchCriteria();


    },

    setSearchCriteria:function() {

        var search = [];
        search.push(this.marken, this.spritarten, this.suchradius, this.suchmodus, this.anzeige);
        this.set('searchCriteria', search);
    },

    aggregateSearchInformation:function() {


        //Variablen checken
        if (this.checkAggregation() == 0) {

            var brands = MobileTank.BrandViewController.getSelection();
            var fuels = MobileTank.FuelViewController.getSelection();
            var radius = MobileTank.RadiusViewController.getSelection();
            var displayMode = MobileTank.DisplayModeViewController.getSelection();
            var mode = MobileTank.ModeViewController.getSelection();

            var searchRequest = MobileTank.SearchRequestModel.createRecord({
                brands:brands,
                fuels:fuels,
                radius:radius,
                displayMode: displayMode,
                location:mode[0],
                zipcode:mode[1]
            });
            console.log(searchRequest);
            MobileTank.RequestController.searchStationList(searchRequest);
        }
        else {
            //aggregation error
            console.log('Error');
        }

//BEi Fehler Request verhindern und auf fehlerhafte auswahl hinweisen


        /*var searchRequest = MobileTank.SearchRequestModel.createRecord({
         brands:MobileTank.BrandViewController.getSelection(),
         fuels:MobileTank.FuelViewController.getSelection(),
         radius:MobileTank.RadiusViewController.getSelection(),
         displayMode: MobileTank.DisplayModeViewController.getSelection()
         });*/


//call Request Method with parameters: brands fuels radius
    },

    checkAggregation:function() {

        console.log('Check#1');
        var flag = 0;

        if (MobileTank.BrandViewController.getSelection() == -1) {
            MobileTank.BrandViewController.alertMethod();
            flag = -1;
        }
        if (MobileTank.FuelViewController.getSelection() == -1) {
            MobileTank.FuelViewController.alertMethod();
            flag = -1;
        }
        if (MobileTank.ModeViewController.getSelection() == -1) {
            MobileTank.ModeViewController.alertMethod();
            flag = -1;
        }

        return flag;
    },
    handleStationList:function(data) {
        xmlDoc = $.parseXML(data);
        $xml = $(xmlDoc);
        console.log('handleStationList');
        var stations = [];

        $xml.find('station').each(function() {
            //$station = $(this).find('station');
            //console.log($station.find('stationname').text());
            stations.push(MobileTank.Station.createRecord({
                id:$(this).attr('id'),
                brand:$(this).attr('brand'),
                stationname:$(this).find('stationname').text(),
                country:$(this).find('country').text(),
                adress:$(this).find('adress').text(),
                plz:$(this).find('plz').text(),
                city:$(this).find('city').text(),
                latitude:$(this).find('coordinates').attr('lat'),
                longitude:$(this).find('coordinates').attr('lon'),
                fuel:MobileTank.Fuel.createRecord({
                    type: $(this).find('fuel').attr('type'),
                    currency:$(this).find('fuel').attr('currency'),
                    price_current:$(this).find('fuel').attr('price_current'),
                    update:$(this).find('fuel').attr('update')
                })
            }));

        });
        console.log(stations);

        if (stations.length == 0) {
            M.DialogView.alert({
                title: 'Fehler',
                message: 'Keine Tankstellen gefunden.',
                confirmButtonValue: 'Ok',
                callbacks: {
                    confirm: {
                        action: function() {
                        }
                    }
                }
            });
        } else {
            this.set('results', stations);
            MobileTank.NavigationController.switchToResultsView();
        }

    }
});
