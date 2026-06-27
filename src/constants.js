export const resultInitialState = {
  score: 0,
  correctAnswers: 0,
  wrongAnswers: 0,
};

export const questions = [
  {
    question: "1. Laborant nəyi bacarmalıdır?",
    options: {
      A: "Sadalananların hamısını",
      B: "Qan yaxmasını hazırlamağı",
      C: "Sidiyin mikroskopik müayinəsi üçün çöküntünü hazırlamağı",
      D: "Biomaterialların fiziki-kimyəvi müayinəsini aparmağı",
      E: "Reaktivləri hazırlamağı",
    },
    correctAnswer: "A",
  },
  {
    question:
      "2. Laboratoriyada müayinə materialını digərləri ilə qarışıq salmamaq üçün nə etmək lazımdır?",
    options: {
      A: "Toplamaq",
      B: "Sentrifuqalaşdırmaq",
      C: "Ardıcıl yığmaq",
      D: "Qızdırmaq",
      E: "Nömrələmək (kodlaşdırmaq)",
    },
    correctAnswer: "E",
  },
  {
    question:
      "3. Laboratoriyada hansı kimyəvi maddələrlə işləmək təhlükəlidir? 1. NaOH 2. NaCl 3. HCl 4. HNO3 5. Na2CO3 6. H2SO4",
    options: {
      A: "1, 2, 5, 6",
      B: "2, 3, 4, 5",
      C: "2, 4, 5, 6",
      D: "1, 3, 4, 6",
      E: "1, 3, 4, 5",
    },
    correctAnswer: "D",
  },
  {
    question:
      "4. Laboratoriyada müayinə materialını müayinədən sonra nə etmək lazımdır?",
    options: {
      A: "Gətirilən qabla atmaq",
      B: "Zərərsizləşdirmək",
      C: "İki gün saxlamaq",
      D: "Suya tökmək",
      E: "Kağıza büküb atmaq",
    },
    correctAnswer: "B",
  },
  {
    question: "5. Qan yaranma prosesi necə adlanır?",
    options: {
      A: "Hemostaz",
      B: "Regenerasiya",
      C: "Hiperseqmentasiya",
      D: "Hiposeqmentasiya",
      E: "Hemopoez",
    },
    correctAnswer: "E",
  },
  {
    question: "6. Normal məhlul necə hazırlanır?",
    options: {
      A: "1 qr maddə,100 ml suda həll edilir",
      B: "Qram ekvivalent çəkisi məlum olan fiksanal l l. ölçülü kolbada distillə suyunda həll edilir",
      C: "5 q maddə 250 ml suda həll edilir",
      D: "Qram molekul çəkisi məlum olan fiksanal l l. suda həll edilir",
      E: "Maddənin qram molekul çəkisi hesablanıb l l. kolbada distillə suyunda həll edilir",
    },
    correctAnswer: "B",
  },
  {
    question: "7. Orqanizmin daxili maye mühitini hansı toxuma təşkil edir?",
    options: {
      A: "Qığırdaq toxuması",
      B: "Sinir toxuması",
      C: "Qan",
      D: "Əzələ toxuması",
      E: "Sümük toxuması",
    },
    correctAnswer: "C",
  },
  {
    question: "8. Plazmanın üzvi tərkibində hansı maddələr yoxdur?",
    options: {
      A: "Azotsuz üzvi maddələr",
      B: "Zülallar, fermentlər",
      C: "Vitaminlər, hormonlar",
      D: "Zülalsız azotlu maddələr",
      E: "Anionlar, kationlar",
    },
    correctAnswer: "E",
  },
  {
    question: "9. Leykoliz (leykositoliz) nədir?",
    options: {
      A: "Eritrositlərin parçalanma prosesidir",
      B: "Leykositlərin % - lə hesablanmasıdır",
      C: "Leykositlərin parçalanma prosesidir",
      D: "Leykositlərin aqqlütinasiyasıdır",
      E: "Bütün hüceyrələrin parçalanmasıdır",
    },
    correctAnswer: "C",
  },
  {
    question: "10. Rezistentlik nədir?",
    options: {
      A: "İmmunitetin zəifləməsidir",
      B: "Hüceyrənin boyanma xüsusiyyətidir",
      C: "Müxtəlif zədələndirici faktora qarşı, orqanizmin (hüceyrənin) müqavimətidir",
      D: "Müxtəlif amillərə qarşı yaranan allergik reaksiyadır",
      E: "Hüceyrələrin parçalanma prosesidir",
    },
    correctAnswer: "C",
  },
  {
    question: "11. Plazma qanın neçə faizini təşkil edir?",
    options: {
      A: "62 - 68 %",
      B: "52 - 58 %",
      C: "48 - 52 %",
      D: "42 - 48 %",
      E: "60 - 62 %",
    },
    correctAnswer: "B",
  },
  {
    question: "12. Formalı elementlər qanın neçə fazini təşkil edir?",
    options: {
      A: "42 - 48 %",
      B: "52 - 58 %",
      C: "60 - 62 %",
      D: "48 - 52 %",
      E: "62 - 68 %",
    },
    correctAnswer: "A",
  },
  {
    question: "13. Qanın xüsusi çəkisi nəyə bərabərdir?",
    options: {
      A: "1,064-1,065",
      B: "1,005-1,010",
      C: "1,050-1,060",
      D: "1,034-1,036",
      E: "1,022-1,030",
    },
    correctAnswer: "C",
  },
  {
    question: "14. Hemoqlobinsianid üsulunda hansı reaktivdən istifadə olunur?",
    options: {
      A: "İzotonik məhlul",
      B: "Harison - Fuşe məhlulu",
      C: "Fizioloji məhlul",
      D: "0, 1n hidrogen xlorid məhlulu",
      E: "Transforməedici məhlulu (Drapkin)",
    },
    correctAnswer: "E",
  },
  {
    question: "15. Hemoqlobinsianid üsulunda hansı cihazdan istifadə olunur?",
    options: {
      A: "Spirtometr",
      B: "Elektrokalorimetr",
      C: "Fotoelektrokalorimetr",
      D: "Sali hemometr",
      E: "Sentrifuqa",
    },
    correctAnswer: "C",
  },
  {
    question:
      "16. Hemoqlobinin Sali hemometrin köməyi ilə təyinində hansı reaktivdən istifadə olunur?",
    options: {
      A: "1 % - li HCl",
      B: "0, 1n NaCl",
      C: "0, 1n HNO3",
      D: "0 ,1n HCl",
      E: "10 % - li HCl",
    },
    correctAnswer: "D",
  },
  {
    question: "17. Qan yaxması üçün əşya şüşəsi necə təmizlənir?",
    options: {
      A: "Yuyulur, 45 dəq yuyucu toz məhlulunda qaynadılır",
      B: "10 %-li HCl məhlulunda saxlanılır",
      C: "1 %-li xloramin məhlulunda qaynadılır, yuyulur",
      D: "1 %-li kalium permanqanat məhlulunda saxlanılır",
      E: "1 %-li yuyucu toz məhlulunda 35-45 dəq qaynadılır, yuyulur",
    },
    correctAnswer: "E",
  },
  {
    question:
      "18. Nikiforov qarışığının tərkibi hansı reaktivlərdən ibarətdir?",
    options: {
      A: "Spirt, efir",
      B: "Spirt, yod",
      C: "H2SO4, su",
      D: "Spirt, HCl",
      E: "Efir, NaCl",
    },
    correctAnswer: "A",
  },
  {
    question:
      "19. Sitoplazması çəhrayı-bənövşəyi tozşəkilli danəli, nüvəsi 2-5 seqmentli bənövşəyi rəngli, 8 -12 mkm ölçüdə olan hüceyrə hansıdır?",
    options: {
      A: "Mieloblast",
      B: "Seqment nüvəli neytrofil",
      C: "Bazofil",
      D: "Monosit",
      E: "Limfosit",
    },
    correctAnswer: "B",
  },
  {
    question:
      "20. Sitoplazma geniş, iri, sarı-qırmızı danəli, əksər halda nüvə 2 seq¬ment¬li¬dir,¬ 10-14 mkm ölçüsü olan hansı hüceyrədir?",
    options: {
      A: "Monoblast",
      B: "Seqment nüvəli eozinofil",
      C: "Bazofil",
      D: "Seqment nüvəli neytrofil",
      E: "Eritroblast",
    },
    correctAnswer: "B",
  },
  {
    question:
      "21. Ölçüsü 7-9, 12-13 mkm olan, nüvəsi tünd bənövşəyi, sitoplazma mavi, göy rəngli, perinuklear zonalı hüceyrə hansıdır?",
    options: {
      A: "Trombosit",
      B: "Limfosit",
      C: "Monosit",
      D: "Eritrosit",
      E: "Limfoblast",
    },
    correctAnswer: "B",
  },
  {
    question:
      "22. 12-20 mkm ölçülü müxtəlif formalı iri nüvəyə, geniş boz sitoplazmaya malik bənövşəyi rəngli hüceyrə hansıdır?",
    options: {
      A: "Eritrosit",
      B: "Monosit",
      C: "Trombosit",
      D: "Limfosit",
      E: "Neytrofil",
    },
    correctAnswer: "B",
  },
  {
    question:
      "23. Ölçüsü 7-8 mkm, çəhrayı rəngli, kənarı tünd, mərkəzi zəif boyanan hüceyrə hansıdır?",
    options: {
      A: "Limfosit",
      B: "Trombosit",
      C: "Neytrofil",
      D: "Eritrosit",
      E: "Retikulosit",
    },
    correctAnswer: "D",
  },
  {
    question: "24. Hiolomer və qranulomeri olan hüceyrə hansıdır?",
    options: {
      A: "Bazofil",
      B: "Trombosit",
      C: "Eritrosit",
      D: "Neytrofil",
      E: "Eozinofil",
    },
    correctAnswer: "B",
  },
  {
    question:
      "25. Retikulositin danəlik xüsusiyyəti hansı üsulla aşkar edilir?",
    options: {
      A: "Noxt üsulu",
      B: "Maya-Qrunvalt üsulu",
      C: "Romanovski üsulu",
      D: "Papenheyin üsulu",
      E: "Supravital boyanma üsulu",
    },
    correctAnswer: "E",
  },
  {
    question: "26. Hemoqlobin hansı hüceyrənin daxilində yerləşir?",
    options: {
      A: "Limfositin",
      B: "Neytrofilin",
      C: "Eritrositin",
      D: "Trombositin",
      E: "Monositin",
    },
    correctAnswer: "C",
  },
  {
    question: "27. Eritrositin xarici səthində yerləşən maddələr hansılardır?",
    options: {
      A: "Lipidlər, sial turşusı, oliqosaxarid antigeni",
      B: "Antigen",
      C: "Hb, kalium, maqnezium",
      D: "ATF, Hb, natrium",
      E: "Hemoqlobin",
    },
    correctAnswer: "A",
  },
  {
    question: "28. Eritrositlərin daxili səthində olan maddələr hansılardır?",
    options: {
      A: "Karbon qazı",
      B: "Polisaxarid",
      C: "Sial turşusı,antigenlər",
      D: "Oliqosaxarid",
      E: "Hb, qlukoprotein",
    },
    correctAnswer: "E",
  },
  {
    question:
      "29. Eritrosit sırası hüceyrələrinin differensiasiya etməsi üçün böyrəklərdə hansı hormon hazırlanır?",
    options: {
      A: "Adrenalin",
      B: "Antidiuretin",
      C: "Noradrenalin",
      D: "Eritropoetin",
      E: "İnsulin",
    },
    correctAnswer: "D",
  },
  {
    question:
      "30. Qanın laxtalanmasında daha çox hansı qan hüceyrəsi iştirak edir?",
    options: {
      A: "Leykosit",
      B: "Endotel hüceyrə",
      C: "Trombosit",
      D: "Eritrosit",
      E: "Plazmatik hüceyrə",
    },
    correctAnswer: "C",
  },
  {
    question: "31. Trombositlərin miqdarı hansı üsulla təyin edilir?",
    options: {
      A: "Kbinq üsulu",
      B: "Fonnio üsulu",
      C: "Supravital boyanma üsulu",
      D: "Heylmeyer üsulu",
      E: "Nikolayev üsulu",
    },
    correctAnswer: "B",
  },
  {
    question: "32. Qanda leykositlərin sayılması hansı üsulla aparılır?",
    options: {
      A: "Nikolayev üsulu",
      B: "Fonnio üzrə",
      C: "Noxt boyanma üsulu",
      D: "F.E.K. üsulu(Fotoelektrokalorimetr üsulu)",
      E: "Qan yaxmasında",
    },
    correctAnswer: "A",
  },
  {
    question: "33. Meyl indeksi hansı göstərici ilə xarakterizə olunur?",
    options: {
      A: "Nüvə göstəricisi ilə",
      B: "Danəliliyə görə",
      C: "Leykositin ümumi miqdarı ilə",
      D: "Mütləq miqdarına görə",
      E: "Kimyəvi dəyişkənliyə görə",
    },
    correctAnswer: "A",
  },
  {
    question:
      "34. Toz halında Romonovski boyağı hansı boyaq maddələrindən ibarətdir?",
    options: {
      A: "Metilen abısı, briliant yaşılı",
      B: "Sudan III, metilen abısı",
      C: "Azur II və turş Eozin",
      D: "Qırmızı neytral, briliant yaşılı",
      E: "Metilen abısı, qırmızı neytral",
    },
    correctAnswer: "C",
  },
  {
    question:
      "35. Romonovski boyağının tərkibi hansı kimyəvi maddələrdən ibarətdir?",
    options: {
      A: "Romonovski tozu, Eozin, spirt",
      B: "Romonovski tozu, qliserin",
      C: "Romonovski tozu, Eozin, qliserin",
      D: "Romonovski tozu qliserin, spirt",
      E: "Romonovski tozu, metil spirt, qliserin",
    },
    correctAnswer: "E",
  },
  {
    question:
      "36. Normada 1 yaşında uşağın qan yaxmasInda limfositlərin miqdarı neçə %-dir?",
    options: {
      A: "20 - 25 %",
      B: "60 - 65 %",
      C: "19 - 25 %",
      D: "10 - 12 %",
      E: "25 - 30 %",
    },
    correctAnswer: "B",
  },
  {
    question: "37. Asidoz nədir?",
    options: {
      A: "Qanda OH ionlarının artması",
      B: "Qanda leykositlərin miqdarının artması",
      C: "Qanda bilirubinin artması",
      D: "Qanın xüsusi çəkisinin yüksəlməsi",
      E: "Qanın tərkibində H ionlarının artması",
    },
    correctAnswer: "E",
  },
  {
    question: "38. Alkoloz nədir?",
    options: {
      A: "Qanda H ionlarının artması",
      B: "Qanın pH-nın yüksəlməsi",
      C: "Qanda OH ionlarının artması",
      D: "Qanda düz bilirubinin artması",
      E: "Qanda qlobulin zülalının artması",
    },
    correctAnswer: "C",
  },
  {
    question: "39. Retikulositlər hansı boyaqla boyanır?",
    options: {
      A: "Sudan III boyağı",
      B: "Eozin boyağı",
      C: "Brilliyant krezil abısı",
      D: "Gensian violet boyağı",
      E: "Metilen göyü",
    },
    correctAnswer: "C",
  },
  {
    question: "40. Qanın ümumi müayinəsinə hansı göstəricilər aiddir?",
    options: {
      A: "Hb, leykositlər, eritrositlər, EÇS",
      B: "E.C.S-nin leykositlərin, protrombinin təyini",
      C: "Qan qrupları, Hb, laxtalanmanın təyini",
      D: "Hb, trombositlərin, qanaxmanın təyini",
      E: "Qanaxma müddətinin, hemotokritin təyini",
    },
    correctAnswer: "A",
  },
  {
    question:
      "41. EÇS (Eritrositlərin çökmə sürəti)-nin təyinində reaktivlə qanın bir-birinə nisbəti necə olur?",
    options: {
      A: "1:3",
      B: "1:4",
      C: "3:1",
      D: "2:2",
      E: "4:2",
    },
    correctAnswer: "B",
  },
  {
    question: "42. Qan yaxması neçə dərəcəli bucaq altında çəkilir?",
    options: {
      A: "50°",
      B: "35°",
      C: "45°",
      D: "20°",
      E: "90°",
    },
    correctAnswer: "C",
  },
  {
    question:
      "43. Qanda leykoformulanın sayılması üçün hansı boyaqdan istifadə olunur?",
    options: {
      A: "Azur II",
      B: "Azur I",
      C: "Maya – Qrunvalt",
      D: "Romanovski",
      E: "Turş eozin",
    },
    correctAnswer: "D",
  },
  {
    question: "44. Normada eritrositlərin yaşama müddəti nə qədərdir?",
    options: {
      A: "1 aya kimi",
      B: "9-12 gün",
      C: "30-35 gün",
      D: "90-120 gün",
      E: "1ildən çox",
    },
    correctAnswer: "D",
  },
  {
    question:
      "45. Soliklon anti-A, anti-B ilə təyinatda hansı görünüş O (I) qan qrupu olduğunu bildirir?",
    options: {
      A: "Yalnız anti-A ilə aqqlütinasiya gedir hər iki reagentlə mənfidir.",
      B: "Soliklon anti-A və anti-B ilə aqqlütinasiya reaksiyası getmir, mənfidir.",
      C: "Soliklon anti-A və anti-B ilə aqqlütinasiya reaksiyası müsbətdir.",
      D: "Soliklon anti-A ilə müsbət, anti-B ilə mənfidir.",
      E: "Soliklon anti-A ilə mənfi, anti-B ilə müsbətdir.",
    },
    correctAnswer: "C",
  },
  {
    question:
      "46. Soliklon anti-A, anti-B ilə müayinədə hansı görünüş AB (IV) qan qrupu olduğunu bildirir?",
    options: {
      A: "Yalnız anti-B ilə aqqlütinasiya reaksiyası müsbətdir",
      B: "Soliklon anti-A ilə müsbət, anti-B ilə aqqlütinasiyası mənfidir.",
      C: "Soliklon anti-A və anti-B ilə aqqlütinasiya reaksiyası mənfidir.",
      D: "Yalnız anti-A aqqlütinasiya reaksiyası müsbətdir",
      E: "Soliklon anti-A və anti-B ilə aqqlütinasiya reaksiyası müsbətdir.",
    },
    correctAnswer: "E",
  },
  {
    question: "47. Leykositoz nədir?",
    options: {
      A: "Leykositlərin miqdarının normadan az olması",
      B: "Neytrofil leykositdə toksiki danəlilik",
      C: "Leykositlərin miqdarının normada olması",
      D: "Leykositlərin miqdarının normadan çox olması",
      E: "Leykositlərin olmaması",
    },
    correctAnswer: "D",
  },
  {
    question:
      "48. Leykositlərin ayrı-ayrı növlərinin faizlə təyini necə adlanır?",
    options: {
      A: "Leykositlərdə fermentlərin təyini",
      B: "Sola meyl indeksi",
      C: "Leykoformula",
      D: "Aqqlütinasiya",
      E: "Osmotik davamlılıq",
    },
    correctAnswer: "C",
  },
  {
    question:
      "49. Fonio üzrə trombositlər qan yaxmasında neçə eritrositə görə sayılır?",
    options: {
      A: "100",
      B: "110",
      C: "10000",
      D: "1000",
      E: "500",
    },
    correctAnswer: "D",
  },
  {
    question: "50. Hemoqlobin hansı üsulla təyin edilir?",
    options: {
      A: "Düke üsulu ilə",
      B: "Hemoqlobinsionid üsulu ilə",
      C: "Qazometrlə",
      D: "Rozental kamerada",
      E: "Polyarimetrlə",
    },
    correctAnswer: "B",
  },
  {
    question:
      "51. Qanyaxmasında trombositləri saymaq üçün hansı reaktivlərdən istifadə olunur?",
    options: {
      A: "MgSO4, EDTA",
      B: "KJ, EDTA",
      C: "MgSO4, KCl",
      D: "KJ, natrium sitrat",
      E: "NaCl, KJ",
    },
    correctAnswer: "A",
  },
  {
    question: "52. Trombositlərin yaşama müddəti neçə gündür?",
    options: {
      A: "10-17 gün",
      B: "20-27 gün",
      C: "17-20 gün",
      D: "7-10 gün",
      E: "15-16 gün",
    },
    correctAnswer: "D",
  },
  {
    question:
      "53. Aşağıdakılardan hansı eritrositlərin çökmə sürətinin artmasına təsir edir?",
    options: {
      A: "Eritrositlərin miqdarının azalması",
      B: "Qanda qlobulinin artması",
      C: "Qanda xolesterinin miqdarının çoxalması",
      D: "Qanda asidoza meyllikdə",
      E: "Qanda albuminin artması",
    },
    correctAnswer: "B",
  },
  {
    question: "54. Hansı xəstəliklərdə qanda eozinofilin miqdarı artır?",
    options: {
      A: "Qarın yatalağı, anemiya",
      B: "Apendisit, poliomiyelit",
      C: "Nefrit, qastrit",
      D: "Anemiya",
      E: "Bronxial astma, askaridoz",
    },
    correctAnswer: "E",
  },
  {
    question: "55. Hansı xəstəlik zamanı retikulositoz müşahidə olunur?",
    options: {
      A: "Krupoz pnevmoniyada",
      B: "Aplastik anemiyada",
      C: "Hemolitik anemiyada",
      D: "Şüa xəstəliyində",
      E: "Miokard infarktında",
    },
    correctAnswer: "C",
  },
  {
    question:
      "56. Eritrositlərin osmotik davamlılığı əsasən hansı xəstlikdə təyin edilir?",
    options: {
      A: "Hemolitik anemiya",
      B: "Trombositopatiya",
      C: "Qastrit, meningit",
      D: "Miyelofibroz",
      E: "Kəskin posthemorragik aenmiya",
    },
    correctAnswer: "A",
  },
  {
    question:
      "57. Anemiya zamanı eritrositlərdə hansı keyfiyyət dəyişkənliyi müşahidə edilir?",
    options: {
      A: "Eozinofiliya, eozinopeniya",
      B: "Normositoz, neytropeniya",
      C: "Normoxrom, neytrofilez",
      D: "Limfositoz, monositoz",
      E: "Anizositoz, poykilositoz",
    },
    correctAnswer: "E",
  },
  {
    question: "58. Anemiya zamanı poykilosit eritrosit nədir?",
    options: {
      A: "Eritrositlərin formasının dəyişməsi",
      B: "Toksik dənəlilik xüsusiyyəti",
      C: "Eritrositlərin ölçüsünün dəyişməsi",
      D: "Yaşama müddətinin dəyişməsi",
      E: "Boyaq qəbul etmə xüsusiyyətinin dəyişməsi",
    },
    correctAnswer: "A",
  },
  {
    question: "59. Anizositoz zamanı eritrositdə hansı əlamət müşahidə olunur?",
    options: {
      A: "Ölçüsünün dəyişməsi",
      B: "Normoblast",
      C: "Anizoxrom",
      D: "Formasının dəyişməsi",
      E: "Kebot həlqəli eritrosit",
    },
    correctAnswer: "A",
  },
  {
    question: "60. Hansı anemiyada mikrositoz müşahidə olunur?",
    options: {
      A: "Kəskin posthemorragik anemiyada",
      B: "B12 vitamini çatışmazlığı anemiyasında",
      C: "Meqaloblast anemiyada",
      D: "Addison-Birmer xəstəliyində",
      E: "Dəmir çatışmazlığı anemiyasında",
    },
    correctAnswer: "E",
  },
  {
    question: "61. Hansı anemiyada meqalasitoz müşahidə olunur?",
    options: {
      A: "Posthemorragik anemiyada",
      B: "B12 vitamini, fol turşusu çatışmazlığında",
      C: "Dəmir çatışmazlığında",
      D: "Aplastik anemiyada",
      E: "Talassemiyada",
    },
    correctAnswer: "B",
  },
  {
    question: "62. Hansı anemiya zamanı sidiyin rəngi qara rəngdə olur?",
    options: {
      A: "Vitamin B12 çatışmazlığı anemiyasında",
      B: "Dəmir defisitli anemiyada",
      C: "Aplastik anemiyada",
      D: "Posthemorragik anemiyada",
      E: "Hemolitik anemiyada-qlükoza-6-fosfat dehidrogenaza ferment aktivliyinin azalması",
    },
    correctAnswer: "E",
  },
  {
    question:
      "63. Aşağıda göstərilənlərdən hansı irsi hemolitik anemiyaya səbəb ola bilər?",
    options: {
      A: "Miyelopoyezin pozulması",
      B: "İrinli-iltihabi proses",
      C: "Limfopoezin pozulması",
      D: "Eritrositdə ferment aktivliyinin pozulması",
      E: "Trombopoezin pozulması",
    },
    correctAnswer: "D",
  },
  {
    question: "64. Normada eritrositin quruluşu necə olur?",
    options: {
      A: "Dairəvi, diskə bənzər",
      B: "Oraqvari",
      C: "Ellips şəkilli",
      D: "Uzunsov şəkilli",
      E: "Şar şəkilli",
    },
    correctAnswer: "A",
  },
  {
    question: "65. Normada eritrosit hansı ölçülərdə olur?",
    options: {
      A: "Diametri 12 -13 mkm, qalınlığı 3 mkm",
      B: "Diametri 10 - 12 mkm, qalınlığı 3 mkm",
      C: "Diametri 1, 5 mkm, qalınlığı 1 mkm",
      D: "Diametri 7 - 8 mkm, qalınlığı 2 mkm",
      E: "Diametri 4 - 5 mkm, qalınlığı 3 mkm",
    },
    correctAnswer: "D",
  },
  {
    question: "66. Rəng göstəricisi normada nə qədər olur?",
    options: {
      A: "0, 4 - 0,5",
      B: "1, 5",
      C: "0, 6 - 0, 8",
      D: "0, 4 - 0,5",
      E: "0, 85 - 1, 05",
    },
    correctAnswer: "E",
  },
  {
    question: "67. Oksofil nədir?",
    options: {
      A: "Qələvi və turş boyalarla boyanma",
      B: "Neytral boyalarla boyanma",
      C: "Turş boyalarla boyanma",
      D: "Əsasi boyalarla boyanma",
      E: "Qələvi boyalarla boyanma",
    },
    correctAnswer: "C",
  },
  {
    question:
      "68. Qan yaranma prosesinin pozulması nəticəsində hansı anemiya baş verir?",
    options: {
      A: "Autoimmun hemolitik anemiya",
      B: "Posthemorragik anemiya",
      C: "Kəskin posthemorragik anemiya",
      D: "Hemolitik anemiya (qazanılma)",
      E: "Dəmir və B12 vitamini çatışmazlığı",
    },
    correctAnswer: "E",
  },
  {
    question:
      "69. Kastlın qaraciyərdə aşkar etdiyi xarici faktor (maddə) hansıdır?",
    options: {
      A: "A vitamini",
      B: "C vitamini",
      C: "E vitamini",
      D: "PP vitamini",
      E: "B12 vitamini",
    },
    correctAnswer: "E",
  },
  {
    question:
      "70. Hansı maddələrin birləşməsindən antianemik kompleks əmələ gəlir?",
    options: {
      A: "Qlükoprotein zülalı + C vitamini",
      B: "HCl + B2 vitamini",
      C: "Qlükoza + ATF komleksi",
      D: "Qlükoprotein zülalı + B12 vitamini",
      E: "Qlükoprotein zülalı + B6 vitamini",
    },
    correctAnswer: "D",
  },
  {
    question:
      "71. B12 vitamini çatışmazlığında rəng göstəricisi hansı səviyyədə olur?",
    options: {
      A: "0, 6 - 0, 8 hipoxporm",
      B: "0, 85 -1, 05, normoxrom",
      C: "0, 9 - 1, 15, normoxrom",
      D: "1 ,3 -1, 8, hiperxrom",
      E: "0, 5 - 0, 6 hipoxrom",
    },
    correctAnswer: "D",
  },
  {
    question: "72. Sola meyillilik nədir?",
    options: {
      A: "Prolimfositlərin qanda faizlə çoxalması",
      B: "Normositlərin qanda faizlə çoxalması",
      C: "Qanda yetişməmiş neytrofilin faizlə çoxalması",
      D: "Monositlərin faizlə azalması",
      E: "Qanda promonositin faizlə çoxalması",
    },
    correctAnswer: "C",
  },
  {
    question: "73. Sağa meyillilik nədir?",
    options: {
      A: "Eritrositlərin çoxalması",
      B: "Limfositlərin çoxalması",
      C: "Cavan neytrofillərin periferik qana keçməsi",
      D: "Hiperseqmentasiyalı neytrofilin çoxalması",
      E: "Bazofilin çoxalması",
    },
    correctAnswer: "D",
  },
  {
    question:
      "74. Aşağıda verilən göstəricilərdən hansı qanda patoloji vəziyyəti göstərir?",
    options: {
      A: "Leykosit – 4,0x109 l, ECS – 10 mm/s",
      B: "Leykosit – 15,0x109 l, ECS – 30 mm/s",
      C: "Leykosit – 8,0x109 l, ECS – 12 mm/s",
      D: "Leykosit – 7,0x109 l, Eritrosit – 4,0x1012 l",
      E: "Leykosit – 7,0x109 l, ECS – 2 mm/s",
    },
    correctAnswer: "B",
  },
  {
    question:
      "75. Aşağıda verilən göstəricilərdən hansı qanın normal göstəricisidir?",
    options: {
      A: "Hb – 20 q/l, Leykosit – 3,0x109 l, ECS – 2 mm/s",
      B: "Hb – 170 q/l, Leykosit – 20,0x109 l, ECS – 5 mm/s",
      C: "Hb – 130 q/l, Leykosit – 6,0x109 l, ECS – 10 mm/s",
      D: "Hb – 100 q/l, Leykosit – 3,5x109 l, ECS – 20 mm/s",
      E: "Hb – 40 q/l, Leykosit – 4,0x109 l, ECS – 20 mm/s",
    },
    correctAnswer: "C",
  },
  {
    question: "76. Hansı anemiyada sağa meyillilik müşahidə olunur?",
    options: {
      A: "Dəmir çatışmazlığında",
      B: "Posthemorragik anemiyada",
      C: "B12 vitamin çatışmazlığında",
      D: "Hemolitik anemiyada",
      E: "Aplastik anemiyada",
    },
    correctAnswer: "C",
  },
  {
    question: "77. Hemorragik diatezlərin ümumi əlaməti hansıdır?",
    options: {
      A: "Sümük kövrəkliyi",
      B: "Qanaxma müddətinin azalması",
      C: "Qanaxma ilə davam edən koaqulopatiya",
      D: "Dərinin quruması",
      E: "Trombozun əmələ gəlməsi",
    },
    correctAnswer: "C",
  },
  {
    question:
      "78. Qanın laxtalanma sisteminin pozulması ilə əlaqədar olan irsi xəstəlik hansıdır?",
    options: {
      A: "Xroniki monositar leykoz",
      B: "Hemofiliya",
      C: "Anemiya",
      D: "Kəskin leykoz",
      E: "Eritremiya",
    },
    correctAnswer: "B",
  },
  {
    question: "79. Hansı vitaminin sorulmasında ödün rolu var?",
    options: {
      A: "C vitamini",
      B: "PP vitamini",
      C: "K vitamini",
      D: "B6 vitamini",
      E: "A vitamini",
    },
    correctAnswer: "C",
  },
  {
    question: "80. Qanaxma müddəti hansı üsulla təyin edilir?",
    options: {
      A: "Burker üsulu ilə",
      B: "Nikolayev üsulu ilə",
      C: "Hemoqlobinsionid",
      D: "Duke üsulu ilə",
      E: "Suxaryev üsulu ilə",
    },
    correctAnswer: "D",
  },
  {
    question: "81. Nomada qanaxma müddəti (Duke üzrə) neçə dəqiqəyə kimidir?",
    options: {
      A: "6 dəq.",
      B: "4 dəq.",
      C: "10 dəq.",
      D: "12 dəq.",
      E: "2 dəq.",
    },
    correctAnswer: "B",
  },
  {
    question:
      "82. Kapilyar qanın laxtalanma müddəti hansı üsulla təyin edilir?",
    options: {
      A: "Fonio üsulu",
      B: "Fotometrik üsul",
      C: "Li-Uayt üsulu",
      D: "Suxaryev üsulu",
      E: "Duke üsulu",
    },
    correctAnswer: "D",
  },
  {
    question:
      "83. Eritrositlərdəki qan qrupunu göstərən aqqlütinogen hansı hərflərlə işarə olunur?",
    options: {
      A: "B və E",
      B: "B və C",
      C: "A və C",
      D: "A və B",
      E: "A və D",
    },
    correctAnswer: "D",
  },
  {
    question: "84. Aqqlütinin harada yerləşir və hansılardır?",
    options: {
      A: "Trombositdə D və E",
      B: "Qan zərdabında α və β",
      C: "Eritrositlərdə A və B",
      D: "Leykositdə β və λ",
      E: "Eritrositdə α və β",
    },
    correctAnswer: "B",
  },
  {
    question: "85. Aqqlütinasiya nədir?",
    options: {
      A: "Hüceyrələrin müxtəlif üsullarla boyanmasıdır",
      B: "Əsas boyaqla boyanan xromatindir",
      C: "Sərt gövdə üzərinə qaz və həllolmuş maddələrin udulmasıdır.",
      D: "Hissəciklərin bir-birinə yapışması və çöküntüyə düşməsidir",
      E: "Müxtəlif və eynicinsli hüceyrələrin qruplaşmasıdır",
    },
    correctAnswer: "D",
  },
  {
    question: "86. Soliklon üsulda ABO sistemində hansı amil təyin edilir?",
    options: {
      A: "Zərdabda aqqlütünogen",
      B: "Eritrositdə aqqlütinogen",
      C: "Zərdabda aqqlütinin",
      D: "Leykositdə aqqlütinin",
      E: "Eritrositdə aqqlütinin",
    },
    correctAnswer: "B",
  },
  {
    question: "87. Nə üçün O(I) qan qrupu universal donor hesab edilir?",
    options: {
      A: "Zərdabında hər iki aqqlütinin var",
      B: "Eritrositdə A aqqlütinagen var",
      C: "Eritrositdə hər iki aqqlütinogen var",
      D: "Eritrositdə B aqqlütinogen var",
      E: "Eritrositdə heç bir aqqlütinogen yoxdur",
    },
    correctAnswer: "E",
  },
  {
    question: "88. Rezus - amili hansı üsullarla təyin edilir?",
    options: {
      A: "Burker, Düke",
      B: "Şmid sınağı, zərdabla",
      C: "Soliklon anti – A, anti – B",
      D: "Standart zərdabla (anti–rezus), Soliklon anti – D",
      E: "Suxaryev, Bürker",
    },
    correctAnswer: "D",
  },
  {
    question:
      "89. Qoryayev kamerasında eritrosit neçə böyük kvadratda sayılır və hesablamada praktiki olaraq hansı rəqəmə vurulur?",
    options: {
      A: "5 kv,1000",
      B: "100 kv, 50",
      C: "5 kv,10000",
      D: "80 kv, 100",
      E: "4 kv, 100",
    },
    correctAnswer: "C",
  },
  {
    question:
      "90. Qoryayev kamerasında leykosit neçə böyük kvadratda sayılır və hesablamada praktiki olaraq hansı rəqəmə vurulur?",
    options: {
      A: "20 kv, 50-yə vurulur",
      B: "80 kv, 100-ə vurulur",
      C: "100 kv, 50–yə vurulur",
      D: "5 kv, 1000-ə vurulur",
      E: "5 kv, 10000-ə vurulur",
    },
    correctAnswer: "C",
  },
  {
    question:
      "91. Lupus erythematodes (LE)- hüceyrələrini aşkar etmək üçün hansı üsuldan istifadə edilir?",
    options: {
      A: "Kapilyar qandan yaxmanın hazırlanması",
      B: "Leykosentratdan yaxmanın hazırlanması",
      C: "Zərdabdan preparat hazırlamaqla",
      D: "Venoz qandan yaxmanın hazırlanması",
      E: "Standart eritrositdən yaxmanın hazırlanması",
    },
    correctAnswer: "B",
  },
  {
    question:
      "92. Qanla işlədikdən sonra pipet və qabların təmizlənməsində istifadə olunan qarışıq hansıdır?",
    options: {
      A: "Nikiforov qarışığı ilə",
      B: "Su, perehidrol, yuyucu toz qarışığı",
      C: "Spirt, perehidrol",
      D: "Formalen, su",
      E: "Efir spirti, formalin",
    },
    correctAnswer: "B",
  },
  {
    question:
      "93. Hansı xəstəlikdə qan yaxmasında hədəfəbənzər eritrositin görünməsi müşahidə olunur?",
    options: {
      A: "Talassemiyada",
      B: "Dəmir çatışmazlığı anemiyasında",
      C: "Kəskin posthemorrogik anemiyada",
      D: "B12 vitaimini çatışmazlığı anemiyasında",
      E: "Aplastik anemiyada",
    },
    correctAnswer: "A",
  },
  {
    question: "94. Hematokrit nədir?",
    options: {
      A: "Eritrositlərin miqdarı",
      B: "Leykositlərin,eritrositlərə olan nisbəti",
      C: "Plazmada zülalın miqdarı",
      D: "Formalı elementlər ilə plazma arasındakı nisbət",
      E: "Zərdabın miqdarı",
    },
    correctAnswer: "D",
  },
  {
    question: "95. Qanın laxtalanma prosesi neçə fazada gedir?",
    options: {
      A: "6",
      B: "1",
      C: "5",
      D: "3",
      E: "2",
    },
    correctAnswer: "D",
  },
  {
    question: "96. Qanın laxtalanmasının son məhsulu nədir?",
    options: {
      A: "Akselerin",
      B: "Tpombokinaza",
      C: "Protrombin",
      D: "Fibrin",
      E: "Tpombin",
    },
    correctAnswer: "D",
  },
  {
    question: "97. Neçə plazma faktoru var?",
    options: {
      A: "10",
      B: "13",
      C: "15",
      D: "4",
      E: "14",
    },
    correctAnswer: "B",
  },
  {
    question: "98. Fibrinoliz nədir?",
    options: {
      A: "Qanın hemoliz olması",
      B: "Qan laxtasının əriməsi",
      C: "Fibrin sapının əmələ gəlməsi",
      D: "Laxtanın əmələ gəlməsi",
      E: "Qanın qatılaşması",
    },
    correctAnswer: "B",
  },
  {
    question:
      "99. Eritrositin yaranması və inkişaf etməsi üçün hansı hormon təsir edir?",
    options: {
      A: "Noradrenalin hormonu",
      B: "Aldesteron hormonu",
      C: "Eritropoetin hormonu",
      D: "İnsulin hormonu",
      E: "Adrenalin hormon",
    },
    correctAnswer: "C",
  },
  {
    question: "100. Bir sutka ərzində böyrəklərdən neçə litr qan dövr edir?",
    options: {
      A: "1200 l",
      B: "500 l",
      C: "180 l",
      D: "1000 l",
      E: "1800 l",
    },
    correctAnswer: "E",
  },

  {
    question:
      "101. Orqanizmin bütün qanı böyrəklərdən neçə dəqiqəyə keçə bilər?",
    options: {
      A: "5 - 10 dəq",
      B: "25 - 30 dəq",
      C: "2 - 3 dəq",
      D: "50 - 60 dəq",
      E: "40 - 45 dəq",
    },
    correctAnswer: "A",
  },
  {
    question: "102. Böyrəklərin əsas iş qabiliyyəti nəyin üzərinə düşür?",
    options: {
      A: "Beyn maddəsinin",
      B: "Qabıq maddəsinin",
      C: "Böyrək ləyəninin",
      D: "Toplayıcı boruların",
      E: "Nefronların",
    },
    correctAnswer: "E",
  },
  {
    question: "103. İlk sidik qan plazmasından hansı tərkibinə görə fərqlənir?",
    options: {
      A: "Şəkərin olmamağına görə",
      B: "Hormonun olmamağına görə",
      C: "Mineral maddələrə görə",
      D: "Zülalın olmamağına görə",
      E: "Zülalın olmasına görə",
    },
    correctAnswer: "D",
  },
  {
    question: "104. Sidiyin miqdarı hansı qabla təyin edilir?",
    options: {
      A: "Pipetka ilə",
      B: "Erlenmeyer kolbası ilə",
      C: "Ölçülü silindrlə",
      D: "Kimyəvi sınaq şüşəsi ilə",
      E: "Ölçülü kolba ilə",
    },
    correctAnswer: "C",
  },
  {
    question:
      "105. Sidiyin təşkil və ifraz olunmasında hansı endokrin vəzlər iştirak edir?",
    options: {
      A: "Böyrəküstü vəzi, qalxanabənzər vəz",
      B: "Timus vəzi, limfa vəzləri",
      C: "Limfa vəziləri",
      D: "Hipofiz vəzi, böyrəküstü vəz",
      E: "Mədəaltı vəzi, hipofiz vəz",
    },
    correctAnswer: "D",
  },
  {
    question:
      "106. Normada qəbul olunan mayenin neçə % -i sidiklə ifraz olunur?",
    options: {
      A: "50 - 55 % - i",
      B: "80 - 90 % - i",
      C: "30 - 40 % - i",
      D: "60 - 80 %",
      E: "20 - 30 % - i",
    },
    correctAnswer: "D",
  },
  {
    question:
      "107. Andreyev üsulu ilə sidikdə reaksiyanı təyin etdikdə hansı indikatordan istifadə olunur?",
    options: {
      A: "Amidopirin",
      B: "Dimetilamidozabenzol",
      C: "Brom-timol abısı",
      D: "Fenoftalein",
      E: "Natrii alizarinsulfon",
    },
    correctAnswer: "C",
  },
  {
    question: "108. Keton cismiciklərinə hansı aiddir?",
    options: {
      A: "Aseton, Betta-oksiyağ turşusu",
      B: "Neytral yağlar",
      C: "Yağ turşusu",
      D: "Aminosirkə turşusu",
      E: "Sirkə turşusu",
    },
    correctAnswer: "A",
  },
  {
    question: "109. Sidikdə zülalı hansı üsulla təyin etmək olmaz?",
    options: {
      A: "Robert-Stolnikov-Brandberq üsulu",
      B: "Ekspres-test",
      C: "Hellerin həlqəvi sınağı",
      D: "Haynes-Akimov sınağı",
      E: "Sulfosalisil sınağı",
    },
    correctAnswer: "D",
  },
  {
    question:
      "110. Sidikdə leykositlərin keyfiyyət xüsusiyyətini hansı üsulla təyin etmək olar?",
    options: {
      A: "Təxmini üsul",
      B: "Romanovski-Himza",
      C: "Subravital boyanma (safroninlə)",
      D: "Qırmızı neytral",
      E: "Sudan III-lə",
    },
    correctAnswer: "C",
  },
  {
    question:
      "111. Sutkalıq diurez hansı xəstəlikdə 3-4 litrə qədər ola bilər?",
    options: {
      A: "Kəskin nefritdə",
      B: "Xroniki nefritdə",
      C: "Kəskin pielonefritdə",
      D: "Şəkərli diabetdə",
      E: "Xroniki pielonefritdə",
    },
    correctAnswer: "D",
  },
  {
    question: "112. Hansı xəstəlikdə sidik rəngsiz su kimi olur?",
    options: {
      A: "Xroniki nefrit",
      B: "Kəskin nefritdə",
      C: "Şəkərli diabet, şəkərsiz diabet",
      D: "Pielonefrit",
      E: "Nefrotik sindrom",
    },
    correctAnswer: "C",
  },
  {
    question:
      "113. Hansı xəstəlikdə sidiyin rəngi tünd, nəcisin rəngi açıq olur?",
    options: {
      A: "Kəskin nefrit",
      B: "Şəkərli diabet",
      C: "Xroniki tonzillit",
      D: "Kəskin virus hepatiti",
      E: "Hemolitik anemiya",
    },
    correctAnswer: "D",
  },
  {
    question: "114. Hansı xəstəlik zamanı sidiyin rəngi ət suyunu xatırladır?",
    options: {
      A: "Parinximatoz sarılıq",
      B: "Hemolitik anemiya",
      C: "Mexaniki sarılıq",
      D: "Kəskin nefrit, kəskin qlomerulonefrit",
      E: "Şəkərli diabet",
    },
    correctAnswer: "D",
  },
  {
    question:
      "115. Hansı xəstəlik zamanı sidikdə leykositlərin miqdarı daha çox olur?",
    options: {
      A: "Mexaniki sarılıq",
      B: "Anemiya",
      C: "Kəskin appendisit",
      D: "Sistit, pielonefrit",
      E: "Vərəm",
    },
    correctAnswer: "D",
  },
  {
    question:
      "116. Hansı xəstəlik zamanı sidikdə eritrositlərin miqdarı çoxalır?",
    options: {
      A: "Uretrit, hepatit B",
      B: "Post hemorragik anemiya",
      C: "Parinximatoz sarılıq",
      D: "Kəskin nefrit, kəskin qlomerulonefrit",
      E: "Mexaniki sarılıq",
    },
    correctAnswer: "D",
  },
  {
    question: "117. Sidikdə hüceyrəvi elementlər hansı üsullarla aşkar edilir?",
    options: {
      A: "Turşu damızdırmaqla",
      B: "Hellerin həlqəvi sınağı",
      C: "Qızdırmaqla",
      D: "Filtirdən süzməklə",
      E: "Mikroskopik",
    },
    correctAnswer: "E",
  },
  {
    question: "118. Hansı halda sidikdə silindirə daha çox rast gəlinir?",
    options: {
      A: "Anemik sindrom",
      B: "Şəkərli diabet",
      C: "Nefrotik sindrom",
      D: "Şəkərsiz diabet",
      E: "Menengial sindrom",
    },
    correctAnswer: "C",
  },
  {
    question: "119. Funksional proteinuriya hansı halda olur?",
    options: {
      A: "Nikturiyada",
      B: "Fiziki, psixi gərginlikdə",
      C: "Kanalcıq zədələnməsində",
      D: "Böyrək durğunluğunda",
      E: "Yumaqcıq zədələnməsində",
    },
    correctAnswer: "B",
  },
  {
    question: "120. Sidikdə zülal keyfiyyətcə hansı üsulla təyin edilir:",
    options: {
      A: "Haynes reaktivi ilə",
      B: "30%-li sulfosalisil turşusu ilə",
      C: "20%-li sulfosalisil turşusu ilə",
      D: "Fuşe reaktivi ilə",
      E: "10%-li qələvi ilə",
    },
    correctAnswer: "C",
  },
  {
    question: "121. Sidik isti yerdə qaldıqda qoxusu necə olur?",
    options: {
      A: "Sirkə tirşusu",
      B: "Gül qoxusu",
      C: "Ammonyak",
      D: "Aseton",
      E: "Alma qoxusu",
    },
    correctAnswer: "C",
  },
  {
    question:
      "122. Gecə diurezinin gündüz diurezindən çox olması necə adlanır?",
    options: {
      A: "Nikturiya",
      B: "Anuriya",
      C: "Oliqouriya",
      D: "Dizuriya",
      E: "Poliuriya",
    },
    correctAnswer: "A",
  },
  {
    question: "123. Neçiporenko üsulu ilə hansı sidik müayinə edilir?",
    options: {
      A: "12 saat ərzində toplanan sidik",
      B: "1 dəfəlik ifraz olunan sidiyin orta payı",
      C: "1 sutka ərzində toplanan sidik",
      D: "3 saat ərzində toplanan sidik",
      E: "5 saat ərzində toplanan sidik",
    },
    correctAnswer: "B",
  },
  {
    question: "124. Hemolitik sarılıqda sidikdə aşağıdakılardan hansı olur?",
    options: {
      A: "Urobilinuriya",
      B: "Ketonuriya",
      C: "Qlükozuriya",
      D: "Bilirubinuriya",
      E: "Proteinuriya",
    },
    correctAnswer: "A",
  },
  {
    question:
      "125. Görmə sahəsində normada sidik çöküntüsündə olan elementlər hansıdır?",
    options: {
      A: "Leykosit 1-3 ədəd, epitel 1-3 ədəd",
      B: "Erotrositlər 5-10 ədəd",
      C: "Tək-tək silindirlər",
      D: "Leykosit topalarla",
      E: "Tək-tək böyrək epiteli",
    },
    correctAnswer: "A",
  },
  {
    question: "126. Gündəlik sidiyin miqdarının çoxalması necə adlanır?",
    options: {
      A: "Nikturiya",
      B: "Oliqouriya",
      C: "Dizuriya",
      D: "Poliuriya",
      E: "Anuriya",
    },
    correctAnswer: "D",
  },
  {
    question:
      "127. Hematuriya zamanı sidikdə hansı dəyişiklik müşahidə olunur?",
    options: {
      A: "Yağların miqdarı artır",
      B: "Bilirubin miqdarı artır",
      C: "Leykositlərin miqdarı azalır",
      D: "Eritrositlərin miqdarı artır",
      E: "Urat duzları təyin edilir",
    },
    correctAnswer: "D",
  },
  {
    question: "128. Sidikdə bilirubin olduqda rəngi necə olur?",
    options: {
      A: "Tünd çay və pivə rəngində",
      B: "Çəhrayı rəngdə",
      C: "Göy rəngində",
      D: "Ət suyu rəngində",
      E: "Süd rəngində",
    },
    correctAnswer: "A",
  },
  {
    question: "129. Sidikdə uratlar hansı reaktivlə həll olur?",
    options: {
      A: "Haynes reaktivi ilə",
      B: "Larionov reaktivi ilə",
      C: "5%-li sirkə turşusu ilə",
      D: "Qələvi damızdırmaqla",
      E: "Spirt əlavə etməklə",
    },
    correctAnswer: "D",
  },
  {
    question: "130. İzostenuriya nədir?",
    options: {
      A: "Daimi olaraq xüsusi çəkisi dəyişməyən sidiyin ifraz olunmasıdır",
      B: "Daimi olaraq sidiyin xüsusi çəkisinin yüksək ifraz olunmasıdır",
      C: "Sutka ərzində sidiyin xüsusi çəkisinin xeyli interval arasında dəyişməsidir",
      D: "Sidiyin çox ifraz olunmasıdır",
      E: "Gecə diurezinin gündüz diurezindən çox ifraz olunmasıdır",
    },
    correctAnswer: "A",
  },
  {
    question: "131. Sidikdə yağlar olduqda sidik necə şəffaflaşdırılır?",
    options: {
      A: "Efir damızdırmaqla",
      B: "Qızdırmaqla",
      C: "Süzməklə",
      D: "Sentrafuqadan keçirməklə",
      E: "Qələvi damızdırmaqla",
    },
    correctAnswer: "A",
  },
  {
    question: "132. Sidikdə şəkər keyfiyyətcə hansı reaktivlə aşkar edilir?",
    options: {
      A: "Haynes Akimov reaktivi",
      B: "Larionov reaktivi",
      C: "Lakmus kağızı",
      D: "20%-li sulfosalisil turşusu",
      E: "Selena reaktivi",
    },
    correctAnswer: "A",
  },
  {
    question: "133. Sidikdə keton cisimcikləri hansı halda aşkar olunur?",
    options: {
      A: "Fiziki gərginlikdə",
      B: "Emosional gərginlikdə",
      C: "Soyuq suda çimdikdə",
      D: "Şəkərli diabetin ağır formasında",
      E: "Sidik uzun müddət istidə qaldıqda",
    },
    correctAnswer: "D",
  },
  {
    question:
      "134. “Aktiv” leykositləri aşkar etmək üçün hansı sidik müayinə edilir?",
    options: {
      A: "Təzə və səhər sidiyi",
      B: "İfraz olduqdan 3 saat sonra",
      C: "3 saat ərzində toplanan sidik",
      D: "Sutkalıq sidik",
      E: "5 saatlıq sidik",
    },
    correctAnswer: "A",
  },
  {
    question: "135. Haynes Akimov reaktivi hansı qarışıqdan ibarətdir?",
    options: {
      A: "CuSO4, NaOH, qliserin",
      B: "CuSO4, qliserin, HCl",
      C: "Qliserin, NaOH, HCl",
      D: "CuSO4, qliserin, sirkə turşusu",
      E: "NaOH, qliserin, KOH, H2SO4",
    },
    correctAnswer: "A",
  },
  {
    question:
      "136. Neçiporenkoya görə normada bir litr sidikdə nə qədər eritrositlər ola bilər?",
    options: {
      A: "10x106",
      B: "5x106",
      C: "1x106",
      D: "3x106",
      E: "4x106",
    },
    correctAnswer: "C",
  },
  {
    question:
      "137. Neçiporenkoya görə normada bir litr sidikdə leykositlərin miqdarı nə qədərdi?",
    options: {
      A: "15x106",
      B: "10x106",
      C: "20x106",
      D: "4x106",
      E: "1x106",
    },
    correctAnswer: "D",
  },
  {
    question: "138. Nə zaman sidikdə alma (meyvə) qoxusu verir?",
    options: {
      A: "Xroniki nefritdə",
      B: "Pielonefritdə",
      C: "Sistində",
      D: "Şəkərli diabetdə",
      E: "Nefrotik sindromda",
    },
    correctAnswer: "D",
  },
  {
    question: "139. Sidik nə zaman hidrogen –sulfid iyi verir?",
    options: {
      A: "Şəkərsiz diabetdə",
      B: "Bronxitdə",
      C: "Şəkərli diabetdə",
      D: "Sistitdə",
      E: "Vərəmdə",
    },
    correctAnswer: "D",
  },
  {
    question: "140. Hansı sidikdə qan piqmenti təyin edilir?",
    options: {
      A: "Təzə ifraz olunmuş sidik",
      B: "3 saat saxlanmış sidik",
      C: "2 saat saxlanmış sidik",
      D: "1 sutkalıq sidik",
      E: "3 saat ərzində toplanmış sidik",
    },
    correctAnswer: "A",
  },
  {
    question: "141. Sidikdə ağ rəngli çöküntü nə zaman müşahidə olunur?",
    options: {
      A: "Lipiduriyada",
      B: "Uraturiyada",
      C: "Fosfaturiyada",
      D: "Oksalaturiyada",
      E: "Urekimiyada",
    },
    correctAnswer: "C",
  },
  {
    question:
      "142. Sidiyin xüsusi çəkisinin təyini böyrəklərin hansı funksiyasını göstərir?",
    options: {
      A: "Süzülmə",
      B: "Reabsorbsiya",
      C: "Seçmə",
      D: "Zənginləşdirmə",
      E: "İfrazetmə",
    },
    correctAnswer: "D",
  },
  {
    question:
      "143. Hansı xəstəlikdə daha çox qələvi xassəli sidik müşahidə olunur?",
    options: {
      A: "Bronxial astmada",
      B: "Sistitdə",
      C: "Sifilisdə",
      D: "Meningitdə",
      E: "Xroniki bronxitdə",
    },
    correctAnswer: "B",
  },
  {
    question: "144. Sidikdə qan piqmenti hansı üsulla aşkar edilir?",
    options: {
      A: "Lanq sınağı, Yaffe sınağı",
      B: "Rozin sınağı, Fuşe sınağı",
      C: "Yaffe sınağı, Amidopirin sınağı",
      D: "Benzidin, Amidopirin sınağı, ekspres-test",
      E: "Geya sınağı, Şmid sınağı",
    },
    correctAnswer: "D",
  },
  {
    question: "145. Sidikdə indikan hansı üsulla təyin edilir?",
    options: {
      A: "Geya sınağı",
      B: "Amidopirin sınağı",
      C: "Rozin sınağı",
      D: "Benzidin sınağı",
      E: "Yaffe sınağı",
    },
    correctAnswer: "E",
  },
  {
    question: "146. Larionova reaktivinin tərkibi hansı maddələrdən ibarətdir?",
    options: {
      A: "1:1 NaCl və KCl",
      B: "1ml HNO3 + 100ml-1%KCl",
      C: "99 ml doymuş NaCl məhlulu + 1 ml qatı HNO3",
      D: "1:1 HNO2 və HCl",
      E: "1q NaOH + 5%-99ml NaCl",
    },
    correctAnswer: "C",
  },
  {
    question: "147. Sidikdə keton cisimcikləri hansı üsulla aşkar edilir?",
    options: {
      A: "Hellerin həlqəvi sınağı, Leqal sinağı",
      B: "Qlükotest sınağı, Albufan",
      C: "Fuse sınağı, Rozin sınağı",
      D: "Lanq, Leqal sinağı, Ekspres test",
      E: "Haynes Akimov sınağı, Pandi sınağı",
    },
    correctAnswer: "D",
  },
  {
    question: "148. Harrison-Fuşe sınağında hansı reaktivdən istifadə olunur?",
    options: {
      A: "Fuşe reaktivi, 10% NaCL",
      B: "10% BaCl2, 5% NaCl",
      C: "Fuşe reaktivi, buzlu sirkə turşusu",
      D: "10% BaCl2 + KJ",
      E: "15% BaCl2, Fuşe reaktivi",
    },
    correctAnswer: "E",
  },
  {
    question: "149. Sidikdə zülalın təyinində alınan həlqə hansı rəngdə olur?",
    options: {
      A: "Ağ",
      B: "Qırmızı",
      C: "Göy",
      D: "Sarı",
      E: "Yaşıl",
    },
    correctAnswer: "A",
  },
  {
    question:
      "150. Hellerin həlqəvi sınağında 2-3 dəqiqə müddətində alınan həlqənin qiyməti nə qədərdir?",
    options: {
      A: "0,33 q/l",
      B: "3,3 q/l",
      C: "0,66 q/l",
      D: "0,002 q/l",
      E: "0,033 q/l",
    },
    correctAnswer: "E",
  },

  {
    question:
      "151. Sidikdə Florens sınağının aparılmasında istifadə olunan reaktivlər?",
    options: {
      A: "Efir, MgSO4",
      B: "KCl, HCl, efir",
      C: "H2SO4, HCl, efir",
      D: "NaCl, efir, KJ",
      E: "H2SO4, HNO3, efir",
    },
    correctAnswer: "C",
  },
  {
    question: "152. Benzidin sınağında istifadə olunan reaktivlər?",
    options: {
      A: "H2O2, NaCl, buzlu sirkə turşusu",
      B: "Benzidin, buzlu sirkə turşusu, 3% -li H2O2",
      C: "Benzidin, HCl, H2SO4",
      D: "Amidopirin, spirt, KCl",
      E: "Buzlu sirkə turşusu, H2O2, amidopirin",
    },
    correctAnswer: "B",
  },
  {
    question: "153. Sidikdə urobilin hansı üsulla aşkar edilir?",
    options: {
      A: "Leqal sınağı",
      B: "Fuşe sınağı",
      C: "Florens sınağı, ekspres-test",
      D: "Lanq sınağı",
      E: "Qlükotest sınağı",
    },
    correctAnswer: "C",
  },
  {
    question: "154. Sidikdə biluribin hansı üsulla aşkar edilir?",
    options: {
      A: "Florens sınağı, Rozin sınağı",
      B: "Rozin sınağı, Harrison-Fuşe sınağı, Ekspres-test",
      C: "Lanq sınağı, Florens sınağı",
      D: "Lanq sınağı, Ekspres-test",
      E: "Leqal sınağı, Heller sınağı",
    },
    correctAnswer: "B",
  },
  {
    question: "155. Sidikdə şəkərin miqdarı hansı üsulla təyin edilir?",
    options: {
      A: "Leqal üsulu, Şmid sınağı",
      B: "Kalorimetr, polyarimetr, ekspres-test",
      C: "Fuşe, Qlukotest üsulu",
      D: "Lanq üsulu, Hellerin həlqəvi sınağı",
      E: "Florens üsulu, Fuşe sınağı",
    },
    correctAnswer: "B",
  },
  {
    question:
      "156. Sidikdə zülalı miqdarca təyin etdikdə hansı reaktivdən istifadə olunur?",
    options: {
      A: "Leqal reaktivi, HNO3",
      B: "Larionov reaktivi, HNO3",
      C: "Qələvi, HCl",
      D: "Fuşe reaktivi, Rozin reaktivi",
      E: "Haynes Akimov reaktivi",
    },
    correctAnswer: "B",
  },
  {
    question:
      "157. Sidik çöküntü elementlərindən hansı yalnız böyrək xarakterlidir?",
    options: {
      A: "Yastı epiteli",
      B: "Eritrositlər",
      C: "Leykositlər",
      D: "Bakteriya",
      E: "Silindlər",
    },
    correctAnswer: "E",
  },
  {
    question: "158. Sidiyin xüsusi çəkisi hansı cihazla təyin edilir?",
    options: {
      A: "Urometr",
      B: "Hemometr",
      C: "Spidometr",
      D: "Qazometr",
      E: "Arometr",
    },
    correctAnswer: "A",
  },
  {
    question:
      "159. Normada sutka ərzində sidiyin çəkisi hansı interval arasında dəyişir?",
    options: {
      A: "1,000-1,010",
      B: "1,008-1,024",
      C: "1,025-1,030",
      D: "1,030-1,040",
      E: "1,005-1,010",
    },
    correctAnswer: "B",
  },
  {
    question:
      "160. Sidiyin xüsusi çəkisinin təyini zamanı otağın temperaturu neçə dərəcə olmalıdır?",
    options: {
      A: "25-30°C",
      B: "35-40°C",
      C: "10-15°C",
      D: "30-35°C",
      E: "+15°, +25C°",
    },
    correctAnswer: "E",
  },
  {
    question: "161. Sidikdə zülal miqdarca hansı üsulla təyin edilir?",
    options: {
      A: "Sulfosalisil sınağı",
      B: "Rozin sınağı",
      C: "Brandberq-Stolnikov",
      D: "Haynes-Akimov sınağı",
      E: "Althayzen sınağı",
    },
    correctAnswer: "C",
  },
  {
    question: "162. Sidikdə bakteriya olduqda sidik necə şəffaflaşdırılır?",
    options: {
      A: "Sirkə turşusu damızdırmaqla",
      B: "Turşu damızdırmaqla",
      C: "Bakterial filtrdən keçirməklə",
      D: "Qələvi damızdırmaqla",
      E: "Sentrifuqalaşdırmaqla",
    },
    correctAnswer: "C",
  },
  {
    question:
      "163. Hansı üsulla sidiyin fiziki və kimyəvi xassələrini eyni zamanda təyin etmək olar?",
    options: {
      A: "Albufan",
      B: "Universal indiqator kağızı",
      C: "Ekspres-test-Combina",
      D: "Qlükotest",
      E: "Asidotest",
    },
    correctAnswer: "C",
  },
  {
    question: "164. Normada sidiyin pH-ı hansı xassəyə malikdir?",
    options: {
      A: "turş pH 4,0-5,0",
      B: "kəskin qələvi pH 8,0-9,0",
      C: "kəskin turş pH 2,0-3,0",
      D: "qələvi pH 7,0-8,0",
      E: "zəif turş, neytral pH 5,3-6,5",
    },
    correctAnswer: "E",
  },
  {
    question: "165. Sidiyin ümumi müayinəsinə hansılar aiddir?",
    options: {
      A: "Yalnız mikroskopik xassələri",
      B: "Yalnız kimyəvi xassələri",
      C: "Yalnız zülal və şəkər",
      D: "Yalnız fiziki xassələri",
      E: "Fiziki-kimyəvi,mikroskopikxassələri",
    },
    correctAnswer: "E",
  },
  {
    question: "166. İzosteinuriya hansı xəstəliklərdə müşahidə edilir?",
    options: {
      A: "Xroniki böyrək çatışmazlığında",
      B: "Böyrəyin daş xəstəliyində",
      C: "Sistitdə",
      D: "Şəkərli diabetdə",
      E: "Pielonefritdə",
    },
    correctAnswer: "A",
  },
  {
    question: "167. Zimnitski sınağı ilə sidiyin hansı müayinəsi aparılır?",
    options: {
      A: "Hər payda yalnız zülalın miqdarı",
      B: "Sutkalıq diurez, zülalın təyini",
      C: "Hər payda yalnız şəkərin miqdarı",
      D: "Yalnız gecə və gündüz diurezi",
      E: "Hər payın xüsusi çəkisi, miqdarı, gecə və gündüz diurezi",
    },
    correctAnswer: "E",
  },
  {
    question: "168. Hipostenuriya nədir?",
    options: {
      A: "Sutkalıq sidiyin miqdarının çox olmasıdır",
      B: "İfraz olunan sidiyin xüsusi çəkisinin daimi yuxarı olmasıdır",
      C: "Sidikdə zülalın olmasıdır",
      D: "Sidiyin ifraz olunmamasıdır",
      E: "İfraz olunan sidiyin xüsusi çəkisinin daim aşağı olmasıdır",
    },
    correctAnswer: "E",
  },
  {
    question:
      "169. Hansı indikatorla mədə şirəsində sərbəst turşuluq təyin edilir?",
    options: {
      A: "Unversal indiqator kağızı",
      B: "Qırmızı konqo kağızı ilə",
      C: "Natrium alizarinsulfon turşusu",
      D: "Dimetilamidoazobenzol",
      E: "Fenoftalein",
    },
    correctAnswer: "D",
  },
  {
    question: "170. Hansı xəstəlikdə mədə şirəsində turşuluq aşağı olur?",
    options: {
      A: "Xroniki atrofik qastrit",
      B: "Kəskin qastrit",
      C: "Səthi qastrit",
      D: "12 barmaqbağırsaq yarası",
      E: "Mədə xorası",
    },
    correctAnswer: "A",
  },
  {
    question: "171. Mədə şirəsində turşuluq əsasən hansı üsulla təyin edilir?",
    options: {
      A: "Uffelman üsulu",
      B: "Mixailes Tepffer üsulu",
      C: "Mikroskopik üsulla",
      D: "NCl-la titirləmə",
      E: "Tuqolukova üsulu",
    },
    correctAnswer: "B",
  },
  {
    question: "172. Adsorbsiya nədir?",
    options: {
      A: "Hüceyrələrin müxtəlif boyanmasıdır",
      B: "Sərt gövdə üzərinə qaz və həll olmuş maddələrin udulmasıdır",
      C: "Hüceyrələrin bir-birinə yapışması və çöküntüyə düşməsidir",
      D: "Müxtəlif və eynicinsli hüceyrələrin qruplaşmasıdır",
      E: "Əsas boyaqla boyanan xromatindir",
    },
    correctAnswer: "B",
  },
  {
    question:
      "173. Hansı xəstəliklərdə mədə şirəsinin acqarına payının mikroskopik müayinəsində nişasta dənəciyinə, yağ damlalarına, çoxlu miqdarda maya göbələklərinə rast gəlinir?",
    options: {
      A: "12 barmaq bağırsağın xorası",
      B: "Hiperasit qastrit",
      C: "Mədə yarası",
      D: "Xroniki səthi qastrit",
      E: "Mədənin piloris hissəsinin stenozu",
    },
    correctAnswer: "E",
  },
  {
    question:
      "174. Normada mədə möhtəviyyatının tərkibi hansı maddələrdən ibarətdir?",
    options: {
      A: "Selik, HCl, fermentlər",
      B: "HCl, süd turşusu, fermentlər",
      C: "Sarsinlər, süd turşusu, selik",
      D: "Maya göbələyi, selik",
      E: "Selik, süd turşusu, HCl",
    },
    correctAnswer: "A",
  },
  {
    question:
      "175. Zondsuz üsulla mədə möhtəviyyatında turşuluq hansı üsulla təyin edilir?",
    options: {
      A: "Atsedotest, Tuqolukova",
      B: "Desmoid sınağı Mixayles",
      C: "Mixayles, Tepffer",
      D: "Atsedotest, Sali üzrə desmond sınağı",
      E: "Tepffer, Qastrotest",
    },
    correctAnswer: "D",
  },
  {
    question:
      "176. Sərbəst xlorid turşusu normada mədə şirəsində nə qədər olur?",
    options: {
      A: "80-90 mmol/l",
      B: "20-40 mmol/l",
      C: "10-25 mmol/l",
      D: "65-75 mmol/l",
      E: "60-70 mmol/l",
    },
    correctAnswer: "B",
  },
  {
    question: "177. Normada mədə şirəsində birləşmiş turşuluq nə qədər olur?",
    options: {
      A: "25-40 mmol/l",
      B: "70-80 mmol/l",
      C: "10-20 mmol/l",
      D: "60-70 mmol/l",
      E: "40-60 mmol/l",
    },
    correctAnswer: "C",
  },
  {
    question: "178. Atrofiya nədir?",
    options: {
      A: "Qeyri-adi lokallaşma xüsusiyyətidir",
      B: "Ödün bağırsaqlara daxil olmaması və ya azalmasıdır",
      C: "Mədə möhtəviyyatında sərbəst xlorid turşusunun olmamasıdır",
      D: "Orqan və toxumanın həcminin, kütləsinin kiçilməsi ilə yanaşı onların funksiyasının zəifləməsi və ya dayanmasıdır",
      E: "Biopsiya yolu ilə götürülmüş materialdır",
    },
    correctAnswer: "D",
  },
  {
    question: "179. Normada mədə şirəsində turşu qalığı nə qədər olur?",
    options: {
      A: "25-35 mmol/l",
      B: "40-45 mmol/l",
      C: "2-10 mmol/l",
      D: "20-25 mmol/l",
      E: "25-40 mmol/l",
    },
    correctAnswer: "C",
  },
  {
    question:
      "180. Mədənin selikli qişasında şirə ifraz edən hansı vəzlər var?",
    options: {
      A: "Kardial, limfotik",
      B: "Fundal, limfotik",
      C: "Kardial, piy",
      D: "Fundal, pilorik, kardial",
      E: "Piloris, pankreas",
    },
    correctAnswer: "D",
  },
  {
    question:
      "181. Mədənin selikli qişasında şirə ifraz edən hansı hüceyrələr var?",
    options: {
      A: "Büzmə, epitel, toskun",
      B: "Əsas, histosit, endotel",
      C: "Büzmə, əsas, əlavə",
      D: "Tosqun, büzmə, plazmatik",
      E: "Əzələ hüceyrəsi, fibroplast",
    },
    correctAnswer: "C",
  },
  {
    question: "182. Mədə möhtəviyyatı hansı təkmilləşdirilmiş üsulla alınır?",
    options: {
      A: "Fraksion üsulla",
      B: "Punksiya ilə",
      C: "Cərrahi yolla",
      D: "Qusdurmaqla",
      E: "Birdəfəlik üsulla",
    },
    correctAnswer: "A",
  },
  {
    question: "183. Mədə şirəsində süd turşusu hansı üsulla təyin olunur?",
    options: {
      A: "0,1 n. HCl titirləməklə",
      B: "Tepffer üsulu ilə",
      C: "Tuqolukova üsulu ilə",
      D: "0,1 n. NaOH titirləməklə",
      E: "Uffelman üsulu ilə",
    },
    correctAnswer: "E",
  },
  {
    question:
      "184. Mədə möhtəviyyatında fermentativ aktivlik hansı üsulla təyin edilir?",
    options: {
      A: "Atsedotest üsulu",
      B: "Tuqolukova üsulu",
      C: "Mixayles üsulu",
      D: "Uffelman üsulu",
      E: "Desmond sınaq",
    },
    correctAnswer: "B",
  },
  {
    question: "185. Axlorhidriya nədir?",
    options: {
      A: "Sərbəst HCl çoxalması",
      B: "Mədə şirəsində HCl-un çoxalması",
      C: "Pepsinin olmaması",
      D: "Mədə şirəsində HCl olmaması",
      E: "Süd turşusunun olmaması",
    },
    correctAnswer: "D",
  },
  {
    question: "186. Axiliya nədir?",
    options: {
      A: "Mədə şirəsində süd turşusunun artması",
      B: "Mədə şirəsində süd turşusunun olmaması",
      C: "Mədə şirəsində pepsinin və HCl-un olmaması",
      D: "Mədə şirəsində pepsinin və HCl-un azalması",
      E: "Mədə şirəsində pepsinin və HCl-un çoxalması",
    },
    correctAnswer: "C",
  },
  {
    question: "187. Normada mədə şirəsinin fiziki xassələri?",
    options: {
      A: "Aseton qoxulu, rəngsizdir",
      B: "Qoxusuz, rəngsiz mayedir",
      C: "Qoxusuz, pas rənglidir",
      D: "Pis qoxulu, bulanlıq mayedir",
      E: "Bulanlıq mayedir, aseton qoxuludur",
    },
    correctAnswer: "B",
  },
  {
    question: "188. Normada mədə şirəsinin pH nə qədərdir?",
    options: {
      A: "pH-1,5-2,5",
      B: "pH-3,5-4,5",
      C: "pH-4,5-5,0",
      D: "pH-5,5-6,0",
      E: "pH-6,0-6,5",
    },
    correctAnswer: "A",
  },
  {
    question: "189. Normada 1 sutka ərzində nə qədər mədə şirəsi ifraz olunur?",
    options: {
      A: "4,5-5,0 1",
      B: "3,0-4,0 l",
      C: "3,0-3,5 1",
      D: "2,0-2,5 1",
      E: "3,8-4,0 1",
    },
    correctAnswer: "D",
  },
  {
    question:
      "190. Qastromukoprotein hansı vitaminin sorulmasında iştirak edir?",
    options: {
      A: "Vitamin A",
      B: "Vitamin K",
      C: "Vitamin PP",
      D: "Vitamin B12",
      E: "Vitamin C",
    },
    correctAnswer: "D",
  },
  {
    question: "191. Mədə şirəsindəki qeyri-proteolitik ferment hansıdr?",
    options: {
      A: "Qastromukoprotein",
      B: "Tripsin",
      C: "Lipaza",
      D: "Qastrin",
      E: "Pepsin",
    },
    correctAnswer: "C",
  },
  {
    question: "192. Süd turşusu mədə şirəsinin hansı payında təyin edilir?",
    options: {
      A: "Bazoa sekresiyanın 45/-60/ dəqiqədən sonrakı payında",
      B: "Bazal sekresiyanın ac qarına payında",
      C: "Bazal sekresiyanın 15/-30/ dəqiqədən sonrakı payında",
      D: "Stimulaedici sekresiyadan sonra",
      E: "Histamin iynəsi vurulduqdan sonra",
    },
    correctAnswer: "B",
  },
  {
    question: "193. Mədə şirəsində proteolitik ferment hansıdır?",
    options: {
      A: "Lipaza, peptidaza",
      B: "Pepsin, renin, qastrin",
      C: "Tripsin, fosfataza",
      D: "İnsulin, aminpeptidaza",
      E: "Ximotripsin, amilaza",
    },
    correctAnswer: "B",
  },
  {
    question: "194. Normada “B” öd payının rəngi necədir?",
    options: {
      A: "Sarı-qırmızı",
      B: "Yaşıl-göy",
      C: "Sarı-yaşıl",
      D: "Yaşıl-palıdı",
      E: "Qırmızı-qara",
    },
    correctAnswer: "D",
  },
  {
    question: "195. Normada “B” öd payının xüsusi çəkisi necədir?",
    options: {
      A: "1,010-1,018, qələvi",
      B: "1,014-1,020, neytral",
      C: "1,016-1,032, qələvi",
      D: "1,010-1,012 amfoter",
      E: "1,06-1,08, turş",
    },
    correctAnswer: "C",
  },
  {
    question:
      "196. Normada 12 barmaq bağırsaq möhtəviyyatının “A” payının mikroskopik müayinəsində təsadüf olunan elementlər hansılardı?",
    options: {
      A: "Yağ turşuları kristalları, leykosit, eritrosit",
      B: "Maya göbələkləri, eritrositlər",
      C: "Çoxlu miqdarda epitel, bilrubin kristalı",
      D: "Epitel (az miqdarda), tək-tək leykosit",
      E: "Parazitlər, maya göbələyi",
    },
    correctAnswer: "D",
  },
  {
    question:
      "197. 12 barmaq bağırsaq möhtəviyyatının alınmasında istifadə olunan qıcıqlandırıcılar hansılardır?",
    options: {
      A: "NaCl, bitki yağı",
      B: "33%-i MgSO4, pepton",
      C: "Şorbit, MgSO4, NaCl",
      D: "NaCl, bitki yağı, şorbit",
      E: "Xörəkduzu, bitki yağı",
    },
    correctAnswer: "B",
  },
  {
    question:
      "198. Öd yolarının iltihabı xəstəliklərində mikroskopik müayinə zamanı hansı elementlər görünür?",
    options: {
      A: "Xolesterin kristalı, yağ turşusu, leykosit",
      B: "Epitel hüceyrəsi, xolesterin, selik",
      C: "Çoxlu miqdarda leykosit, epitel hüceyrəsi, selik və makrofaq",
      D: "Epitel hüceyrələri, bilirubin kristalı",
      E: "Az miqdarda epitel hüceyrəsi, bilurubin kristalı",
    },
    correctAnswer: "C",
  },
  {
    question:
      "199. 12 barmaq bağırsaq möhtəviyyatında hansı parazitlərə rast gəlmək olar?",
    options: {
      A: "Maya göbələyi, sarsinlər",
      B: "Trixomanada, askarida",
      C: "Tükbaş qurd, lyəmbliya sist,",
      D: "Lyambliya sist, toksoplazma",
      E: "Lyambliyanın vegetativ formasına, qurd yumurtalarına",
    },
    correctAnswer: "E",
  },
  {
    question: "200. Öd çatışmazlığı zamanı nəcisin rəngi necə olur?",
    options: {
      A: "Ağ gil rəngində",
      B: "Sarı-qəhvəyi",
      C: "Palıdı- qırmızı",
      D: "Formalaşmış, palıdı",
      E: "Qəhvəyi",
    },
    correctAnswer: "A",
  },

  {
    question:
      "201. 12 barmaq bağırsaq möhtəviyyatı hansı zondla və üsulla götürülür?",
    options: {
      A: "Nazik zondda, çox dəfəlik üsul",
      B: "Duodenal zondla 1 fazalı üsul",
      C: "Nazik zondla, birdəfəlik üsul",
      D: "Yoğun zondla, birdəfəlik üsul",
      E: "Duodenal zondla fraksion üsul",
    },
    correctAnswer: "E",
  },
  {
    question: "202. Öd saatda və sutkada neçə ml ifraz olunur?",
    options: {
      A: "Saatda 15 ml, sutkada 100-150 ml",
      B: "Saatda 15 ml, sutkada 250-300 ml",
      C: "Saatda 50 ml, sutkada 800-1000 ml",
      D: "Saatda 10 ml, sutkada 200-250 ml",
      E: "Saatda 25-30 ml, sutkada 300 ml",
    },
    correctAnswer: "C",
  },
  {
    question: "203. Ödün kimyəvi müayinəsinin təyininə aiddir?",
    options: {
      A: "Bilrubinin, şəkərin təyini",
      B: "Şəkərin, xolesterinin təyini",
      C: "Bilurubinin, xolesterinin, fermentlərin təyini",
      D: "Zülalın, bilrubinin, insulinin təyini",
      E: "Zülalın, şəkərin təyini",
    },
    correctAnswer: "C",
  },
  {
    question: "204. Nəcisin rənginə təsir edən amillər hansıdır?",
    options: {
      A: "Ekzogen, endogen amil",
      B: "Mexaniki faktor",
      C: "Ekzogen, antigen",
      D: "Sinir-humoral amil",
      E: "Endogen, mexaniki amil",
    },
    correctAnswer: "A",
  },
  {
    question:
      "205. Hansı xəstəlik zamanı nəcisin rəngi ağ və formalaşmamış olur?",
    options: {
      A: "Virus hepatiti",
      B: "Kolit",
      C: "Enterit",
      D: "Qastrit",
      E: "Hemolitik anemiya",
    },
    correctAnswer: "A",
  },
  {
    question: "206. Nəcisin rənginə təsir edən endogen amil hansıdır?",
    options: {
      A: "Qarışıq qidalanma",
      B: "Sterkobilin",
      C: "Süd məhsulları",
      D: "Bitki qidaları",
      E: "Ətli qida",
    },
    correctAnswer: "B",
  },
  {
    question: "207. Hansı halda nəcisin rəngi qara olur?",
    options: {
      A: "Pankriatit zamanı",
      B: "Viruslu toksiki hepatit",
      C: "Sulfonilamil preparatı qəbul etdikdə",
      D: "Aplastik anemiya",
      E: "Gizli qanaxma, dəmir preparatı qəbul etdikdə",
    },
    correctAnswer: "E",
  },
  {
    question:
      "208. Nəcisdə öd piqmenti hansı üsulla təyin edilir və hansı rəng alınır?",
    options: {
      A: "Amidopirin, çəhrayi-yaşıl",
      B: "Şmid, çəhrayı-qırmızı",
      C: "Zənginləşdirmə üsulu, qırmızı",
      D: "Şmid, sarı-yaşıl",
      E: "Benzidin, yaşıl-sarı",
    },
    correctAnswer: "B",
  },
  {
    question: "209. Nəcisdə gizli qanaxma hansı üsulla təyin edilir?",
    options: {
      A: "Nativ preparat – rəngsiz",
      B: "Benzidin-göy, Şmid-sarı",
      C: "Benzidin, amidopirin, ekspres-test",
      D: "Trebule-Vişniyakov, qırmızı",
      E: "Şmid, sarı",
    },
    correctAnswer: "C",
  },
  {
    question:
      "210. Nəcisdə yağ turşuları metilen abısı ilə hansı rəngə boyanır?",
    options: {
      A: "Göy",
      B: "qırmızı rəngə",
      C: "Palıdı(qəhvəyi)",
      D: "Yaşıl rəngə",
      E: "Narıncı",
    },
    correctAnswer: "A",
  },
  {
    question: "211. Nəcisdə neytral yağlar hansı boyaqla boyanır?",
    options: {
      A: "Brillyant krezil abısı",
      B: "Metilen göyü",
      C: "Sudan III boyağı",
      D: "Brillyant krezilin yaşılı",
      E: "Neytral qırmızı boyağı",
    },
    correctAnswer: "C",
  },
  {
    question:
      "212. Sudan III boyağı ilə boyanmış nəcis preparatında neytral yağlar hansı rəngə boyanır?",
    options: {
      A: "Palıdı, göy",
      B: "Göy, sarı",
      C: "Qırmızı, narıncı",
      D: "Yaşıl, palıdı",
      E: "Sarı, qonur",
    },
    correctAnswer: "C",
  },
  {
    question:
      "213. Kaproloji müayinədə lüqol məhlulundan hansı məqsəd üçün istifadə olunur?",
    options: {
      A: "epitel və eritrositləri aşkar etmək",
      B: "yağ turşularını aşkar etmək",
      C: "əzələ lifləri və nişastanı aşkar etmək",
      D: "neytral yağları aşkar etmək",
      E: "Leykositləri aşkar etmək",
    },
    correctAnswer: "C",
  },
  {
    question:
      "214. Amidopirin sınağı ilə nəcisdə gizli qanaxmanı təyin etdikdə hansı reaktivdən istifadə olunur?",
    options: {
      A: "HCl, amidopirin, 6%-li H2O2",
      B: "Buzlu sirkə turşusu, amidopirinin, 3% -li H2O2",
      C: "H2SO4, efir, buzlu sirkə turşusu",
      D: "Buzlu sirkə turşusu, H2O2, KmnO4",
      E: "H2O2, amidopin, benzidin",
    },
    correctAnswer: "B",
  },
  {
    question:
      "215. Nəcisdə gizli qanaxma olarsa amidopirin sınağında hansı rəng alınır?",
    options: {
      A: "Yaşıl",
      B: "Qırmızı",
      C: "Bənövşəyi",
      D: "Sarı",
      E: "Ağ",
    },
    correctAnswer: "C",
  },
  {
    question:
      "216. Gizli qanaxmanı müəyyən etmək üçün qidalanmada hansı qaydaya əməl edilməlidir?",
    options: {
      A: "3-5 gün ərzində maye qəbul edilmir",
      B: "2-3 gün ərzində mal əti qəbul edilir",
      C: "3-5 gün müddətində ət məhsulları, balıq, yumurta qəbul edilmir",
      D: "2-3 gün balıq, yumurta qəbul edilir",
      E: "4-5 gün ərzində dəmir preparatları qəbul edilir",
    },
    correctAnswer: "C",
  },
  {
    question: "217. Nəcisdə zülal hansı üsulla təyin edilir?",
    options: {
      A: "Amidoprin",
      B: "Şmid sınağı",
      C: "Benziden",
      D: "Amidopirin",
      E: "Tribule-Vişniyakov",
    },
    correctAnswer: "E",
  },
  {
    question: "218. Normada nəcisdə bağırsaq qışası elementləri hansılardır?",
    options: {
      A: "Az miqdarda selik, leykosit və epitel hüceyrələri",
      B: "Eritrosit, nişasta, bitki sellülozu",
      C: "Əzələ lifləri, birləşdirici toxuma, bədxassəli şiş hüceyrəsi",
      D: "Çoxlu miqdarda selik, leykosit və yağ turşuları",
      E: "Çoxlu miqdarda selik, neytral yağ dənəciyi",
    },
    correctAnswer: "A",
  },
  {
    question: "219. Normada nəcisdə hansı qida qalıqları olur?",
    options: {
      A: "Çoxlu nişasta, neytral yağlar",
      B: "Az miqdarda əzələ lifləri, yağ turşuları",
      C: "Neytral yağlar, əzələ lifləri",
      D: "Yodofil flora, çoxlu əzələ lifləri",
      E: "Birləşdirici toxuma, yağ turşuları",
    },
    correctAnswer: "B",
  },
  {
    question:
      "220. Nəcisdə aşkar edilən yağ turşuları hansı boyaqla boyanır və nə rəng alınır?",
    options: {
      A: "Hemotoksilinlə qırmizi rəngə boyanır",
      B: "Metilenlə göy rəngə boyanır",
      C: "Sirkə turşusu ilə sarı rəngə boyanır",
      D: "Brilyant yaşılı və qırmızı neytralla boyanmır",
      E: "Sudan III-lə narıncı rəngə boyanır",
    },
    correctAnswer: "B",
  },
  {
    question:
      "221. Həzm sisteminin müayinəsi zamanı nəcisdən hansı preparatlar hazırlanmalıdır?",
    options: {
      A: "Yalnız lüqolla boyanmış preparat",
      B: "Yalnız qleserinlə qarışdırılmış preparat",
      C: "Yalnız nativ preparat",
      D: "Nativ, Sudan III, metilen göyü, Lüqolla boyanmış preparat",
      E: "Romanovski preparatı ilə boyanmış preparat",
    },
    correctAnswer: "D",
  },
  {
    question:
      "222. Nəcisin müayinəsində sudan III boyağının tərkibi hansı maddələrdən ibarətdir?",
    options: {
      A: "Sudan III, spirt, buzlu sirkə turşusu",
      B: "Sudan III, neytral qırmızı, distillə su",
      C: "Sudan III, eozin, spirt",
      D: "Sudan III, metilen abısı, spirt",
      E: "Sudan III, distillə su, spirt",
    },
    correctAnswer: "A",
  },
  {
    question: "223. Nəcisin mikroskopik müayinəsinin kliniki əhəmiyyəti nədir?",
    options: {
      A: "Qan yaranmanın pozulmasını öyrənmək",
      B: "Həzm sistemindəki prosesləri öyrənmək, helmintoloji müayinə aparmaq",
      C: "Göbələk xəstəliklərin aşkar edilməsi",
      D: "Dəri-zöhrəvi xəstəliklərinin aşkar edilməsi",
      E: "İfrazat sistemindəki dəyişkənliyi öyrənmək",
    },
    correctAnswer: "B",
  },
  {
    question:
      "224. Normada subaraxnoidal boşluqda nə qədər onurğa beyni mayesi olur?",
    options: {
      A: "10-15 ml",
      B: "20-40 ml",
      C: "80-100 ml",
      D: "40-80 ml",
      E: "100-150 ml",
    },
    correctAnswer: "E",
  },
  {
    question: "225. Onurğa beyin mayesinin fiziki xassələri hansılardır?",
    options: {
      A: "Xüsusi çəkisi və sitozun təyini",
      B: "Bilirubinin, xloridlərin təyini",
      C: "Rəngi, şəffaflığı, xüsusi çəkisinin təyini",
      D: "Rənginin, xolesterinin təyini",
      E: "Şəffaflığın və sitoqrammanın təyini",
    },
    correctAnswer: "C",
  },
  {
    question:
      "226. Onurğa beyin mayesi (O.B.M.) müayinəsində Pandi reaktivinin tərkibi?",
    options: {
      A: "10 q karbol turşusu, 1 l distillə suyu",
      B: "100 q karbol turşusu, 1 l distillə suyu",
      C: "85 q ammonium sulfat, 100 l distillə suyu",
      D: "100 q sulfosalisil, 1 l distillə suyu",
      E: "85 q ammonium sulfat, 100 ml distillə suyu",
    },
    correctAnswer: "B",
  },
  {
    question: "227. Nonne-Apelt sınağında istifadə olunan reaktiv hansıdır?",
    options: {
      A: "Doymuş ammonium oksalat məhlulu",
      B: "Doymuş natrii xlor məhlulu",
      C: "Doymuş ammonium sulfat məhlulu",
      D: "Doymuş karbol turşusu məhlulu",
      E: "Doymuş ammonium sitrat məhlulu",
    },
    correctAnswer: "C",
  },
  {
    question: "228. Fuks-Rozental kamerasının həcmi nə qədərdir?",
    options: {
      A: "2,5 mm3",
      B: "0,9 mm3",
      C: "1,2 mm3",
      D: "3,2 mm3",
      E: "4 mm3",
    },
    correctAnswer: "D",
  },
  {
    question:
      "229. Normada onurğa beyin mayesinin fiziki xassəsi neçə olmalıdır?",
    options: {
      A: "Sarı , bulanlıq xüsusi çəkisi-1,010-1,015",
      B: "Rəngsiz, bulanlıq, xüsusi çəkisi-1,005-1,006, turş",
      C: "Qonur, bulanlıq, xüsusi çəkisi-1,003-1,004, qələvi",
      D: "Rəngsiz, şəffaf, reaksiyası zəif qələvi, xüsusi çəkisi - 1,006-1,007",
      E: "Sarı-şəffaf, xüsusi çəkisi-1,010-1,017",
    },
    correctAnswer: "D",
  },
  {
    question:
      "230. Onurğa beyin mayesində (OBM) zülalın artmasına nə səbəb olmur?",
    options: {
      A: "Beyin mədəciklərində eksudatın toplanması",
      B: "Onuğa beyin mayesinin durğunluğu",
      C: "Onurğa beyin mayesində(OBM) sitozun normada olması",
      D: "Onurğa beyin mayesinin sıxılması",
      E: "Beyində şiş hüceyrələrinin parçalanması",
    },
    correctAnswer: "C",
  },
  {
    question:
      "231. Uşaqlarda normada onurğa beyni mayesində sitoz nə qədərdir?",
    options: {
      A: "25x106/l",
      B: "50x106/l",
      C: "500x106/l",
      D: "30x106/l",
      E: "7-10x106/l",
    },
    correctAnswer: "E",
  },
  {
    question:
      "232. Onurğa beyni mayesində qlobulin reaksiyası hansı üsullarla aparılır?",
    options: {
      A: "Fuse, Lanq",
      B: "Haynes –Akimov, Rozin",
      C: "Nonne-Apelt, Pandi",
      D: "Sitozun təyini",
      E: "Leqal, Lestrad",
    },
    correctAnswer: "C",
  },
  {
    question: "233. Sitoliz nədir?",
    options: {
      A: "Hüceyrənin parçalanmasıdır",
      B: "Hüceyrənin bazofil boyanmasıdır",
      C: "Hüceyrənin sayılmasıdır",
      D: "Trombositlərin aqqregasiyasıdır",
      E: "Eritrositlərin aqqlütinasiyasıdır",
    },
    correctAnswer: "A",
  },
  {
    question: "234. Onurğa beyni mayesində sitoz nədir?",
    options: {
      A: "Eritrositlərin sayılması",
      B: "Formalı elementlərrrin diferensiyasiyası",
      C: "Vahid həcmdə hüceyrə elementlərinin sayının təyini",
      D: "Lekoformulanın təyini",
      E: "Sitoqrammanın təyini",
    },
    correctAnswer: "C",
  },
  {
    question:
      "235. Onurğa beyni mayesində formalı elementlər götürüldükdən nə qədər keçdikdən sonra sayılır?",
    options: {
      A: "2 saat keçdikdən sonra",
      B: "1 sutkadan sonra",
      C: "1 saat keçdikdən sonra",
      D: "2-3 saat keçdikdən sonra",
      E: "Alınan kimi sayılmalıdır",
    },
    correctAnswer: "E",
  },
  {
    question:
      "236. Onurğa beyni mayesində (OBM) leykositləri kamerada saydıqda reaktivlə mayenin nisbəti necə olmalıdır?",
    options: {
      A: "1 dam. reaktiv 1 dam. OBM",
      B: "1 mil. reaktiv 10 dam. OBM",
      C: "1 dam. reaktiv 10 dam. OBM",
      D: "1dam. reaktiv 15 dam. OBM",
      E: "10 dam. reaktiv 20 dam. OBM",
    },
    correctAnswer: "C",
  },
  {
    question:
      "237. Normada onurğa beyin mayesində (O.B.M.) zülalın miqdarı nə qədər olur?",
    options: {
      A: "0,4-0,5 q/l",
      B: "0,6-0,7 q/l",
      C: "0,15-0,3 q/l",
      D: "0,7-0,8 q/l",
      E: "0,5-0,6 q/l",
    },
    correctAnswer: "C",
  },
  {
    question: "238. Onurğa beyin mayesində (O.B.M.) normada şəkər nə qədərdir?",
    options: {
      A: "5,0-6,0 mmol/l",
      B: "4,1-5,9 mmol/l",
      C: "1,5-1,6 mmol/l",
      D: "1,0-2,0 mmol/l",
      E: "2,8-3,9 mmol/l",
    },
    correctAnswer: "E",
  },
  {
    question:
      "239. Onurğa beyin mayesində (O.B.M.) normada xloridlər nə qədərdir?",
    options: {
      A: "230-250 mmol/l",
      B: "195-215 mmol/l",
      C: "220-230 mmol/l",
      D: "60-90 mmol/l",
      E: "240-260 mmol/l",
    },
    correctAnswer: "B",
  },
  {
    question: "240. Transsudatda zülal nə qədər olur?",
    options: {
      A: "55-60 q/l",
      B: "50-55 q/l",
      C: "5-25 q/l",
      D: "35-45 q/l",
      E: "30-80 q/l",
    },
    correctAnswer: "C",
  },
  {
    question: "241. Eksudatın xüsusi çəkisi nə qədərdir?",
    options: {
      A: "1,006-1,008",
      B: "1,010-1,012",
      C: "1,005-1,009",
      D: "1,010-1,011",
      E: "1,018-1,022",
    },
    correctAnswer: "E",
  },
  {
    question: "242. Aspirasiya nədir?",
    options: {
      A: "Fiziki-kimyəvi proseslərin gedişatını dayandıran maddədir",
      B: "Hüceyrələrin müxtəlif boyanmasıdır",
      C: "Müxtəlif hissəciklərin bir-birinə yapışması və qruplaşmasıdır",
      D: "Boşluğun və ya patoloji ocağın möhtəviyyatının sorulmasıdır",
      E: "Hüceyrələrin bir-birinə yapışıb çökməsidir",
    },
    correctAnswer: "D",
  },
  {
    question: "243. Eksudat hansı xarakterli ola bilər?",
    options: {
      A: "Seroz, hemorragik, çürümüş",
      B: "Selikli, selikli-irinli",
      C: "Selikli-irinli, çürümüş",
      D: "Selikli-irinli-qanlı",
      E: "Hemorragik, bulanıq, qatı",
    },
    correctAnswer: "A",
  },
  {
    question: "244. Eksudatlar hansı rənglərdə ola bilər?",
    options: {
      A: "Qara, qırmızı, mavi",
      B: "Göy, mavi, sarı",
      C: "Sarı, qonur, çəhrayı, ağ",
      D: "Mavi, qəhvəyi, qara",
      E: "Ağ, qara, göy",
    },
    correctAnswer: "C",
  },
  {
    question:
      "245. Aşağıdakılardan hansılar süzülmüş mayelərin fiziki xassələrinə aiddir?",
    options: {
      A: "Zülalın və hüceyrə elementlərinin təyini",
      B: "Rivalt sınağı, xarakteri",
      C: "Xarakteri, rəngi, xüsusi çəkisi",
      D: "Qoxusu, zülülın təyini",
      E: "Rəngi, hüceyrə elementlərinin sayılması",
    },
    correctAnswer: "C",
  },
  {
    question:
      "246. İltihabi proses nəticəsində seroz boşluqlara toplanan maye necə adlanır?",
    options: {
      A: "Eksudat",
      B: "Qovuqçuğa toplanan maye",
      C: "Süzülmüş maye",
      D: "Transudat",
      E: "İfraz olunan maye",
    },
    correctAnswer: "A",
  },
  {
    question: "247. Polinuklear hüceyrə hansıdır?",
    options: {
      A: "Bir neçə nüvəsi olan hüceyrə",
      B: "Bir nüvəsi olan hüceyrə",
      C: "Nüvəsi boyanmayan hüceyrə",
      D: "Nüvəsiz hüceyrə",
      E: "Qələvi boyaq qəbul edən hüceyrə",
    },
    correctAnswer: "A",
  },
  {
    question: "248. Transudat hansı xarakterli olur?",
    options: {
      A: "Yalnız irinli",
      B: "Yalnız çürümüş",
      C: "Yalnız seroz",
      D: "Yalnız qanlı",
      E: "Yalnız heliozlu",
    },
    correctAnswer: "C",
  },
  {
    question: "249. Transudat hansı rəngdə olur?",
    options: {
      A: "Qırmızı, qonur",
      B: "Qonur, yaşıl",
      C: "Çəhrayı, qırmızı",
      D: "Sarı, qızılı sarı",
      E: "Ağ, sarı",
    },
    correctAnswer: "D",
  },
  {
    question: "250. Transudatın xüsusi çəkisi nə qədərdir?",
    options: {
      A: "1,018-1,022",
      B: "1,018-1,020",
      C: "1,006-1,012",
      D: "1,020-1,025",
      E: "1,025-1,030",
    },
    correctAnswer: "C",
  },

  {
    question: "251. Rivalt sınağında hansı reaktivdən istifadə olunur?",
    options: {
      A: "Sulfosalisil turşusu",
      B: "Xlorid turşusu",
      C: "Qatı sirkə turşusu",
      D: "Sulfat turşusu",
      E: "Nitrat turşusu",
    },
    correctAnswer: "C",
  },
  {
    question: "252. Eksudatda zülal nə qədər olur?",
    options: {
      A: "90-95 q/l",
      B: "45-50 q/l",
      C: "15-20 q/l",
      D: "10-15 q/l",
      E: "30-80 q/l",
    },
    correctAnswer: "E",
  },
  {
    question: "253. Eksudatın hüceyrəvi elementləri hansılardır?",
    options: {
      A: "Limfosit, mezotel hüceyrə",
      B: "Makrofaq, limfosit",
      C: "Leykosit, plazmatik hüceyrə, poliblast, makrofaq",
      D: "Mezotel hüceyrə, makrofaq",
      E: "Şiş hüceyrə, eozinofil",
    },
    correctAnswer: "C",
  },
  {
    question: "254. Transudatın hüceyrəvi elementləri hansılardır?",
    options: {
      A: "Neytrofil, makrofaq",
      B: "Limfosit, mezotel hüceyrə",
      C: "Poıiblast, plazmatik",
      D: "Makrofaqlar, poliblastlar",
      E: "Plazmatik, poliblast",
    },
    correctAnswer: "B",
  },
  {
    question: "255. Eksudat və transsudatı diferensasiya edən sınaq hansıdır?",
    options: {
      A: "Lanq, Fuşe",
      B: "Haynes, Lanq",
      C: "Rozin, Lanq",
      D: "Rivalt, Luker",
      E: "Rozin, Qram",
    },
    correctAnswer: "D",
  },
  {
    question: "256. Bəlğəmin tərkibi nədən aslıdır?",
    options: {
      A: "Dərman preparatlarının qəbulundan",
      B: "Qida qəbulundan",
      C: "Nəfəs almadan",
      D: "Tənəffüs yollarındakı patoloji prosesdən",
      E: "Ağ ciyərin hava tutumundan",
    },
    correctAnswer: "D",
  },
  {
    question: "257. Hansı xəstəlikdə yalnız selikli bəlğəm ifraz olunur?",
    options: {
      A: "Ağciyər absesində, bronxitdə",
      B: "Ağciyərin qanqrenasında, vərəmdə",
      C: "Bronxitdə, ağciyər vərəmində",
      D: "Bronxoektozda, bronxitdə",
      E: "Kəskin bronxit, bronxial astma",
    },
    correctAnswer: "E",
  },
  {
    question:
      "258. Bəlğəmdə atipik hüceyrələrə hansı xəstəlikdə təsadüf olunur?",
    options: {
      A: "Traxeitdə, krupoz pnevmoniyada",
      B: "Bronx və ağciyərin şişində",
      C: "Ağciyər vərəmində, bronxitdə",
      D: "Pnevmoniyada, bronxial astmada",
      E: "Kəskin bronxitdə, bronxo pnevmoniyada",
    },
    correctAnswer: "B",
  },
  {
    question: "259. Qanlı bəlğəm hansı xəstəliklərdə olur?",
    options: {
      A: "Farengitdə",
      B: "Kəskin bronxitdə",
      C: "Bronxial asmada",
      D: "Ağciyər vərəmində",
      E: "Traxeitdə",
    },
    correctAnswer: "D",
  },
  {
    question: "260. Bəlğəm hansı xəstəlikdə 3 təbəqəyə bölünür?",
    options: {
      A: "Xroniki bronxitdə",
      B: "Pnevmoniyada",
      C: "Bronxoektaziyada",
      D: "Kəskin bronxitdə",
      E: "Bronxial asmada",
    },
    correctAnswer: "C",
  },
  {
    question: "261. Bəlğəmin sarı-yaşılımtıl olmasına nə təsir edir?",
    options: {
      A: "Kurşman spiralı",
      B: "Toz eritrosit",
      C: "Leykosit-irin",
      D: "Eritrosit-qan",
      E: "Selik-epitel",
    },
    correctAnswer: "C",
  },
  {
    question: "262. Çürümüş qoxulu bəlğəm hansı xəstəlikdə olur?",
    options: {
      A: "Traxeitdə",
      B: "Pnevmoniyada",
      C: "Bronxitdə",
      D: "Ağciyərin qanqrenasında",
      E: "Plevritdə",
    },
    correctAnswer: "D",
  },
  {
    question:
      "263. Bronxial astma xəstəliyində hansı elementlərin olması xarakterikdir?",
    options: {
      A: "Silindirik epitel, yastı epitel, leykosit",
      B: "Kurşman spiralı, elastiki bifler",
      C: "Sarko-Leyden kristalları, makrofaqlar",
      D: "Kurşman spiralı, eozinofil, Sarko-leyden kristalı",
      E: "Hematoidin kristalı, Neytrofil",
    },
    correctAnswer: "D",
  },
  {
    question: "264. Hansı ardıcılıqla bəlğəm Sil-Nelsen üzrə boyanır?",
    options: {
      A: "Yaxma üzərinə Silin karbolfuksini tökülür, yuyulur, metilen göyü tökülür",
      B: "Yaxma üzərinə metilen abısı, karbol fuksin tökülür və yuyulur",
      C: "Yaxma fiksə edilir, metilen abısı tökülür, rəngsizləşir və fuksinlə boyanır",
      D: "Yaxma fiksə edilir, Silin karbolfuksin tökülür, rəngsizləşir, metilin abısı ilə boyanır",
      E: "Yaxma üzərinə süzgək kağızı qoyulur, metilin abısı tökülür",
    },
    correctAnswer: "D",
  },
  {
    question:
      "265. Bəlğəmdə Erlix tetradası hansı elementlərdən təşkil olunub?",
    options: {
      A: "Kirəcləşmiş elastiki liflərdən, xolesterin kristalından, vərəm çöplərindən, detritdən",
      B: "Slindirik epiteli, leykosit, eritrosit, xolisterin kristalı",
      C: "Şiş hüceyrələri, alveol makrofaqları, hemotoidin kristalı",
      D: "Epitel hüceyrəsi, vərəm çöpləri, Şarko-Leyden kristalı, göbələk",
      E: "Hemotoidin kristalı, xolesterin, detrit, epitel hüceyrəsi",
    },
    correctAnswer: "A",
  },
  {
    question: "266. Bəlğəmdə vərəm çöpləri hansı üsulla aşkar edilir?",
    options: {
      A: "Qram üzrə boyanmış preparatın mikroskopiyasında",
      B: "Sil-Nilsen üsulu ilə boyanmış preparatın mikroskopiyasında",
      C: "Romanovski üzrə boyanmış yaxmanın müayinəsi",
      D: "Nativ preparatın mikroskopiyasında",
      E: "Yaxmanın sitoloji müayinəsində",
    },
    correctAnswer: "B",
  },
  {
    question: "267. Bəlğəm kimyəvi üsulla necə zərərsizləşdirilir?",
    options: {
      A: "Kanalizasiyaya tökmək",
      B: "0,5 saat müddətində xlorlu əhəngdə saxlamaq",
      C: "2 saat 3% xloromin məhlulunda saxlamaq",
      D: "1 saat müddətində sodalı suda saxlamaq",
      E: "4 saat müddətində ammonium xlorid və xloramin töküb saxlamaq",
    },
    correctAnswer: "E",
  },
  {
    question:
      "268. Hemosidrinin təyini üçün istifadə olunan reaktivlər hansılardır?",
    options: {
      A: "2%-li metilen göyü, 1%-li H2SO4",
      B: "Sudan III, 0,1n NaCl",
      C: "5%-li kalium ferrosianid, 2%-li HCl",
      D: "1% kalium ferrosianid, 1% H2SO4",
      E: "Spirt,1%-li metilen abısı",
    },
    correctAnswer: "C",
  },
  {
    question: "269. Hansı halda bəlğəmdə hemosidrin reaksiyası müsbət olur?",
    options: {
      A: "Xroniki bronxitdə",
      B: "Səs tellərinin iltihabında",
      C: "Bronxların sıxılmasında",
      D: "Kiçik qan dövranı-ağ ciyər durğunluğunda",
      E: "Bronxial astma tutmalarında",
    },
    correctAnswer: "D",
  },
  {
    question:
      "270. Sil-Nilsen üzrə boyamada hansı reaktivlərdən istifadə olunur?",
    options: {
      A: "Karbol turşusu, HCl, H2SO4",
      B: "Əsasi fuksin, karbol, HCl, metilen göyü",
      C: "Gension violet, spirt, brilliant yaşıl",
      D: "Fuksin, spirt, kristal violet",
      E: "Metilen göyü, karbol turşusu, HNO3",
    },
    correctAnswer: "B",
  },
  {
    question:
      "271. Sil-Nilsen üzrə boyamada vərəm mikobakteriyaları necə görünür?",
    options: {
      A: "Oval, qrup yığımında – yaşıl",
      B: "Azca əyilmiş, incə çubuq şəkilli– qırmızı",
      C: "Uzunsov, kobud şəkilli – bənövşəyi",
      D: "Girdə, çubuq şəkilli – göy",
      E: "Diplokokk şəkilli-yaşıl",
    },
    correctAnswer: "B",
  },
  {
    question:
      "272. Bəlğəmdə Klepsiel çöpləri Qram üzrə boyanmada necə görünür?",
    options: {
      A: "Yoğun, kapsulasız – göy",
      B: "Kapsula ilə əhatə olunmuş, yoğun çəhrayi rəngli",
      C: "Əyilmiş, kofe şəkilli – sarı",
      D: "İncə, nazik – qara",
      E: "Kokşəkilli - göy rəngdə",
    },
    correctAnswer: "B",
  },
  {
    question:
      "273. Mozayka şəkilli mitsellər hansı göbələk üçün xarakterikdir?",
    options: {
      A: "Kandidalar",
      B: "Epidermofiton",
      C: "Mikrospor",
      D: "Trixofiton",
      E: "Penisilioz",
    },
    correctAnswer: "C",
  },
  {
    question:
      "274. Dəri-göbələk xəstəliyində preparat hazırladıqda ən çox nə üçün qələvidən istifadə olunur və qızdırılır?",
    options: {
      A: "Eritrositləri parçalamaq üçün",
      B: "Piqmentləri rəngsizləşdirmək üçün",
      C: "Epitelləri parçalamaq üçün",
      D: "Leykositləri parçalamaq üçün",
      E: "Boyağı rəngsizləşdirmək üçün",
    },
    correctAnswer: "B",
  },
  {
    question:
      "275. Cinsiyyət orqanları ifrazatının müayinəsi hansı məqsəd üçün aparılır?",
    options: {
      A: "Sidik ifrazat xəstəliklərinin aşkarı",
      B: "Dəri xəstəliklərinin aşkarı",
      C: "Hormonoloji sitodiaqnostika, zöhrəvi xəstəliklərin aşkarı",
      D: "Sistem xəstəliklərinin aşkarı",
      E: "Hormonoloji xəstəliklərin aşkarı",
    },
    correctAnswer: "C",
  },
  {
    question:
      "276. Yumurtalıqların funksional vəziyyətini öyrənmək üçün uşaqlıq yolu ifrazatı necə götürülməlidir?",
    options: {
      A: "Uşaqlıq yolundan pambıq tamponla",
      B: "Uşaqlıqdan-katetr ilə",
      C: "Uşaqlıq yolundan steril tənziflə",
      D: "Uşaqlıq boynundan pinsetlə",
      E: "Uşaqlıq yolunun yan arxa tağından folkman qaşığı ilə",
    },
    correctAnswer: "E",
  },
  {
    question:
      "277. Sitoloji müayinədə (yumurtalığın funksional vəziyyəti) hansı boyama üsulundan istifadə olunur?",
    options: {
      A: "Metilen abısı ilə",
      B: "Papanheyim üsulu",
      C: "Romanovski boyağı",
      D: "Noxt üsulu",
      E: "Monoxrom, polixrom boyamadan",
    },
    correctAnswer: "E",
  },
  {
    question:
      "278. Qadınlarda qonoreya zamanı müayinə material haradan götürülür?",
    options: {
      A: "Uretradan, sidik kisəsindən",
      B: "Vaginadan, dəridən.",
      C: "Düz bağırsaqdan, barmaqdan",
      D: "Sidik kisəsindən",
      E: "Uretradan, vaginadan, servikal kanaldan",
    },
    correctAnswer: "E",
  },
  {
    question:
      "279. Qonoreyanı aşkar etmək üçün hansı müasir üsuldan istifadə olunur?",
    options: {
      A: "Eozin və metilen abısı ilə boyanma",
      B: "Metilen abısı ilə boyanma",
      C: "Romanovski üsulu ilə boyanma",
      D: "İFA – immunfermentanaliz, kart-test",
      E: "Qram üsulu ilə boyanma",
    },
    correctAnswer: "D",
  },
  {
    question: "280. Qonokokkun quruluşu necədir?",
    options: {
      A: "Spiral şəkillidir",
      B: "Çöp şəkillidir",
      C: "Diplokokklardır, arasında yarıq görünür",
      D: "Tək-tək kokklardır",
      E: "Tay şəkillidir",
    },
    correctAnswer: "C",
  },
  {
    question:
      "281. Trixomonadın hərəkətli forması hansı preparatda aşkar edilir?",
    options: {
      A: "Yaxmada mikroskopda",
      B: "Boyaqlı preparatda mikroskopda",
      C: "Makroskopik müayinədə",
      D: "Fiksə edilmiş preparatda mikroskopda",
      E: "Mikroskopla nativ preparatda",
    },
    correctAnswer: "E",
  },
  {
    question: "282. Trixomonadın quruluşu necədir?",
    options: {
      A: "Kok şəkilli",
      B: "Uzunsov, kirpikli",
      C: "Yumru, qamçısız",
      D: "Dördbucaqlı, qamçısız",
      E: "Armudvari, 4 ədəd qamçısı var",
    },
    correctAnswer: "E",
  },
  {
    question: "283. Siflis xəstəliyinin törədicisi hansıdır?",
    options: {
      A: "Solğun triponema",
      B: "Trixomonad",
      C: "Spiroxeta",
      D: "Virus",
      E: "Xlamidiya",
    },
    correctAnswer: "A",
  },
  {
    question: "284. Solğun spiroxet hansı quruluşdadır?",
    options: {
      A: "Spiral şəkilli, buruqsuz",
      B: "Diplokokk şəkilli",
      C: "Spiral şəkilli, 8-14 buruqlu",
      D: "Spiral şəkilli, 15-20 buruqlu",
      E: "Çöp şəkilli, buruqsuz",
    },
    correctAnswer: "C",
  },
  {
    question:
      "285. Siflisin törədicisi Romanovski üzrə boyanmış preparatda hansı rəngdə olur?",
    options: {
      A: "Al qırmızı",
      B: "Palıdı(qəhvəyi)",
      C: "Göy",
      D: "Çəhrayı",
      E: "Qara",
    },
    correctAnswer: "D",
  },
  {
    question:
      "286. Siflisin diaqnostikasında hansı təkmilləşdirilmiş üsuldan istifadə olunur?",
    options: {
      A: "Neqativ üsuldan",
      B: "Boyaqlı preparatlardan",
      C: "Nativ preparatdan",
      D: "Pozitiv üsuldan",
      E: "Kompleks seroloji reaksiyalardan",
    },
    correctAnswer: "E",
  },
  {
    question: "287. Siflisin diaqnostikasında müayinə materialı hansılardır?",
    options: {
      A: "Toxuma mayesi, qan, O.B.M.",
      B: "Dəridən götürülmüş material",
      C: "Sidik, boşluq mayesi",
      D: "Limfa mayesi, bəlğəm",
      E: "Sidik, qan",
    },
    correctAnswer: "A",
  },
  {
    question:
      "288. Siflislə yoluxmanın qarşısını almaq, təxirə salınmaz dezinfeksiya üçün hansı maddədən istifadə olunur?",
    options: {
      A: "Xlorlu əhəng, HCl",
      B: "Civə xlorid, fenol",
      C: "Xloramin, NaCl",
      D: "Spirt, distillə su",
      E: "NaCl, spirt",
    },
    correctAnswer: "B",
  },
  {
    question: "289. Yumşaq şankrn törədicisi hansı üsulla aşkar edilir?",
    options: {
      A: "Eozinlə",
      B: "Romonovski",
      C: "Metilen abısı ilə",
      D: "Qram",
      E: "Monoxom boyanma",
    },
    correctAnswer: "D",
  },
  {
    question:
      "290. Yumşaq şankr törədicisi - Dukreya-Petersen streptobasilləri hansı üsulla boyanır?",
    options: {
      A: "Maya-Qrunvald",
      B: "Qram üzrə",
      C: "Sil-Nelsen üzrə",
      D: "Brilliant-krezilin boyağı",
      E: "Turş eozinlə",
    },
    correctAnswer: "B",
  },
  {
    question:
      "291. Sağlam uşaqlıq yolu selikli qişasında hansı hüceyrələr olmalıdır?",
    options: {
      A: "Trixomonad, epitel, çoxlu leykositlər",
      B: "Dederleyn çöpləri az-az, çoxlu leykositlər",
      C: "Stafilokokk, streptokokk, çoxlu epitellər",
      D: "Yastı epitel, çoxlu Dederleyn çöpləri, tək-tək leykosit",
      E: "Qonokokk, Dederleyn çöpləri",
    },
    correctAnswer: "D",
  },
  {
    question: "292. Uşaqlıq yolunun neçə təmizlik dərəcəsi var?",
    options: {
      A: "3",
      B: "6",
      C: "4",
      D: "5",
      E: "1",
    },
    correctAnswer: "C",
  },
  {
    question: "293. Uşaqlıq yolunun sanitarı hansıdır?",
    options: {
      A: "Kox çöpü",
      B: "Epiteli hüceyrələri",
      C: "Dederleyin çubuğu",
      D: "Stafilokokk",
      E: "Qram mənfi çöplər",
    },
    correctAnswer: "C",
  },
  {
    question: "294. Normada eykulyantın pH nə qədərdir?",
    options: {
      A: "6,0-6,5",
      B: "4,5-5,0",
      C: "7,2-7,6",
      D: "3,0-5,0",
      E: "2,0-3,5",
    },
    correctAnswer: "C",
  },
  {
    question: "295. Eykulyantın fiziki xassələrinə hansılar aiddir?",
    options: {
      A: "Miqdarı, mikroskopik müayinəsi",
      B: "Spermaqramması, qatılığı",
      C: "Rəngi, morfoloji quruluşu",
      D: "Miqdarı, rəngi, konsistensiyası",
      E: "Kimyəvi müayinəsi, şəffaflığı",
    },
    correctAnswer: "D",
  },
  {
    question:
      "296. Alınmış eykulyantın normada sıyıqlaşma müddəti nə qədərdir?",
    options: {
      A: "30 dəqiqə",
      B: "3 saat",
      C: "1 saat",
      D: "4 saat",
      E: "1 dəqiqə",
    },
    correctAnswer: "A",
  },
  {
    question: "297. Normada spermanın fiziki xassələri necədir?",
    options: {
      A: "6-7 ml, sarı, şəffaf maye",
      B: "10-12 ml, cəhrayı, bulanlıq maye",
      C: "0-1 ml, sarı, şəffaf",
      D: "3-4 ml, azca sarımtıl, bulanlıq özlülü",
      E: "1-2 ml, ağımtıl, şəffaf, yapışqanlı",
    },
    correctAnswer: "D",
  },
  {
    question: "298. Normal spermatozoid hansı ölçüdə olur?",
    options: {
      A: "67-72 mkm",
      B: "58-68 mkm",
      C: "100 mkm",
      D: "10-12 mkm",
      E: "40-50 mkm",
    },
    correctAnswer: "B",
  },
  {
    question: "299. Normal spermatozoid hansı hissələrdən ibarətdir?",
    options: {
      A: "Yalnız baş",
      B: "Baş, quyruq",
      C: "Baş, boyun",
      D: "Baş, boyun, quruq",
      E: "Boyun, quyruq",
    },
    correctAnswer: "D",
  },
  {
    question: "300. Normal spermatozoidlərin neçə %-i hərəkətli olmalıdır?",
    options: {
      A: "15-20%",
      B: "50-60%",
      C: "30-50%",
      D: "80-90%",
      E: "20-30%",
    },
    correctAnswer: "D",
  },

  {
    question:
      "301. 5 %-li eozin məhlulu ilə boyandıqda, ölü və diri spermatozoidlər hansı rəngə boyanır?",
    options: {
      A: "Ölü rəngsiz, diri qırmızı",
      B: "Ölü rəngsiz, diri göy",
      C: "Ölü qırmızı, diri rəngsiz",
      D: "Ölü göy, diri qırmızı",
      E: "Diri qırmızı, ölü göy",
    },
    correctAnswer: "C",
  },
  {
    question: "302. Normada spermada nə qədər spermatozoid olmalıdır?",
    options: {
      A: "20-30x106/l",
      B: "5-10x109/l",
      C: "100-150x109/l",
      D: "50-60x109/l",
      E: "10-15x109/l",
    },
    correctAnswer: "C",
  },
  {
    question:
      "303. Spermatozoidləri Qoryayev kamerasında saydıqda istifadə olunan reaktivlər hansılardır?",
    options: {
      A: "HCl, xloramin",
      B: "dəmir xlorid, spirt",
      C: "H2SO4, 20%-li neytral formalin",
      D: "KCl, xlorlu sirkə turşusu",
      E: "Na2CO3, 40%-li neytral formalin",
    },
    correctAnswer: "E",
  },
  {
    question: "304. Spermatozoidlərin sayılması hansı kamerada aparılır?",
    options: {
      A: "Qoryayev kamerasında",
      B: "Dofel kamerasında",
      C: "Tom kamerasında",
      D: "Rozental kamerasında",
      E: "Fuks-Rozental kamerasında",
    },
    correctAnswer: "A",
  },
  {
    question:
      "305. Xlamidioz infeksiyasını hansı üsulla daha keyfiyətli aşkar etmək olar?",
    options: {
      A: "Kardiolipid antigeni ilə",
      B: "Ultra səs müayinəsi ilə",
      C: "Vasselman reaksiyası ilə",
      D: "Biokimyəvi müayinə ilə",
      E: "İmmunferment, immunoflöresent üsulla",
    },
    correctAnswer: "E",
  },
  {
    question:
      "306. PZR- polimiraz zəngirvari reaksiya ilə nəyi aşkar etmək olar?",
    options: {
      A: "Virusla yoluxmanı, qüsurlu genləri",
      B: "Antigenləri",
      C: "Anti cismləri",
      D: "Formalı elementləri",
      E: "Karbohidratları",
    },
    correctAnswer: "A",
  },
  {
    question: "307. Sali hemometr pipeti hansı tutuma malikdir?",
    options: {
      A: "0,2 ml",
      B: "0,04 ml",
      C: "0,4 ml",
      D: "0,02 ml",
      E: "0,05 ml",
    },
    correctAnswer: "D",
  },
  {
    question: "308. Kliniki analiz üçün hansı qan götürülür?",
    options: {
      A: "Səhər yeməyindən sonra",
      B: "Nahardan sonra",
      C: "Günün ikinci yarısı",
      D: "Ac qarnına",
      E: "Axşam yeməyindən sonra",
    },
    correctAnswer: "D",
  },
  {
    question: "309. Pançenkov cihazı hansı hissələrdən ibarətdir (E.Ç.S)?",
    options: {
      A: "Əşya şüşəsi və saat şüşəsi",
      B: "Mikropipet və əşya şüşəsi",
      C: "Pançenkov ştativi və sınaq şüşəsi",
      D: "Aqqlütinasiya sınaq şüşəsi və pipet",
      E: "Pançenkov ştativi və kapilyar borusu",
    },
    correctAnswer: "E",
  },
  {
    question:
      "310. Qoryayev kamerasında eritrositləri saymaq üçün hansı həcmdə qan götürülür?",
    options: {
      A: "0,02 ml",
      B: "0,3 ml",
      C: "0,4 ml",
      D: "0,2 ml",
      E: "4 ml",
    },
    correctAnswer: "A",
  },
  {
    question:
      "311. E.Ç.S(eritrositlərin çökmə sürəti)-nin nəticəsi hansı müddətdən sonra qeyd edilir?",
    options: {
      A: "20 dəq",
      B: "25 dəq",
      C: "60 dəq",
      D: "15 dəq",
      E: "80 dəq",
    },
    correctAnswer: "C",
  },
  {
    question: "312. Zəif boyaq qəbul edən eritrositlər necə adlanırlar?",
    options: {
      A: "Normaxrom",
      B: "Oksofil",
      C: "Polixromatofil",
      D: "Hipoxrom",
      E: "Hiperxrom",
    },
    correctAnswer: "D",
  },
  {
    question: "313. Nə vaxt qanda hədəfəbənzər eritrositlər olur?",
    options: {
      A: "Kəskin posthemorragik anemiyada",
      B: "Aplastik anemiyada",
      C: "Dəmir çatışmazlığında",
      D: "Talassemiyada",
      E: "B12 vitamin çatışmazlığı anemiyasında",
    },
    correctAnswer: "D",
  },
  {
    question: "314. Sidiyin Zimnitski müayinəsində xəstəyə neçə qab verilir?",
    options: {
      A: "10",
      B: "5",
      C: "3",
      D: "7",
      E: "8",
    },
    correctAnswer: "E",
  },
  {
    question: "315. Sidiyin xüsusi çəkisinin aşağı olması necə adlanır?",
    options: {
      A: "Anuriya",
      B: "İzostenuriya",
      C: "Hipostenuriya",
      D: "Dizuriya",
      E: "Hiperstenuriya",
    },
    correctAnswer: "C",
  },
  {
    question: "316. Şarko-Leyden kristalları nəyin hesabına əmələ gəlir?",
    options: {
      A: "Eritrositlərin parçalanması",
      B: "Hemoqlobinin parçalanması",
      C: "Trombositlərin aqqreqasiyası",
      D: "Trombositlərin parçalanması",
      E: "Eozinofillərin parçalanması",
    },
    correctAnswer: "E",
  },
  {
    question: "317. Qan yaxması metil spirtində neçə dəqiqə fiksə olunur?",
    options: {
      A: "1 dəq",
      B: "3 dəq",
      C: "30 dəq",
      D: "2 dəq",
      E: "35 dəq",
    },
    correctAnswer: "B",
  },
  {
    question: "318. Qan yaxması etil spirtində neçə dəqiqə fiksə olunur?",
    options: {
      A: "12 dəq",
      B: "2 dəq",
      C: "20 dəq",
      D: "3 dəq",
      E: "30 dəq",
    },
    correctAnswer: "C",
  },
  {
    question:
      "319. Qan yaxmasının boyanması zamanı Romanovski boyağından işçi məhlul hazırladıqda nə ilə durulaşdırılır?",
    options: {
      A: "Spirtlə",
      B: "Qliserinlə",
      C: "Distillə suyu ilə",
      D: "Xloroformla",
      E: "Efirlə",
    },
    correctAnswer: "C",
  },
  {
    question: "320. Qan yaxmasında leykositlər neçə hüceyrəyədək sayılır?",
    options: {
      A: "50",
      B: "30",
      C: "150",
      D: "100",
      E: "10",
    },
    correctAnswer: "D",
  },
  {
    question:
      "321. Trombositlər Qoryayev kamerasında neçə böyük kvadratda sayılır?",
    options: {
      A: "30",
      B: "100",
      C: "25",
      D: "20",
      E: "50",
    },
    correctAnswer: "C",
  },
  {
    question:
      "322. Kapilyar laxtalanma müddətinin təyinində lazım olan ləvazimatlar hansılardır.",
    options: {
      A: "5 ml pipet, saat",
      B: "Kapilyar boru, saniyə ölçən",
      C: "Sali pipeti, qum saatı",
      D: "Saniyə ölçən, sınaq şüşəsi",
      E: "Kapilyar boru, sınaq şüşəsi",
    },
    correctAnswer: "B",
  },
  {
    question:
      "323. Trombositlərin Qoryayev kamerasında sayılması zamanı hansı reaktivdən istifadə edilir?",
    options: {
      A: "1% natrium xlorid",
      B: "1% ammonium oksalat",
      C: "Hayema reaktivi",
      D: "3% buzlu sirkə turşusu",
      E: "10% natrium xlorid",
    },
    correctAnswer: "B",
  },
  {
    question:
      "324. Trombositləri Qoryayev kamerasında saydıqda nə qədər reaktiv götürülür?",
    options: {
      A: "6 ml",
      B: "5 ml",
      C: "2 ml",
      D: "4 ml",
      E: "1 ml",
    },
    correctAnswer: "D",
  },
  {
    question:
      "325. Qoryayev kamerasında trombositlərin sayılması üçün nə qədər qan götürülür?",
    options: {
      A: "0,04 ml",
      B: "1,0 ml",
      C: "0,02 ml",
      D: "0,2 ml",
      E: "0, 4 ml",
    },
    correctAnswer: "C",
  },
  {
    question:
      "326. Trombositlərin hesablanması zamanı Qoryayev kamerasında sayılmış trombosit praktik olaraq hansı rəqəmə vurulur?",
    options: {
      A: "100",
      B: "50",
      C: "20",
      D: "2000",
      E: "200",
    },
    correctAnswer: "D",
  },
  {
    question:
      "327. Qanda hemoqlobinin təyini zamanı (Sali və ya FEK üsulu) qan nə qədər götürülür?",
    options: {
      A: "0,2 ml",
      B: "0,1 ml",
      C: "0,02 ml",
      D: "0,4 ml",
      E: "0,04 ml",
    },
    correctAnswer: "C",
  },
  {
    question:
      "328. Qan qruplarının standart zərdabla təyini zamanı hansı görünüş AB0 (IV) qrup olduğunu göstərir?",
    options: {
      A: "αβ (I) müsbət, β (II) və α (III) zərdabla aqqlütinasiya mənfidir",
      B: "αβ (I), β (II) zərdabla aqqlütinasiya müsbət, α (III) mənfidir",
      C: "αβ (I), β (II) və α (III) qrup zərdabla aqqlütinasiya müsbətdir",
      D: "αβ (I) mənfi, β (II) və α (III) zərdabla aqqlütinasiya müsbətdir",
      E: "αβ (I), β (II) və α (III) qrup zərdabla aqqlütinasiya mənfidir",
    },
    correctAnswer: "C",
  },
  {
    question:
      "329. Limbek və Riber üsulu ilə eritrositlərin osmotik davamlılığının təyinatı hansı reaktivdən istifadə olunur?",
    options: {
      A: "Na sitratın hipotonik məhlulundan",
      B: "0,1 n natrium hidroksid məhlulundan",
      C: "0,1 n hidrogen xlorid məhlulundan",
      D: "NaCl hipertonik məhlulundan",
      E: "NaCl hipotonik məhlulundan",
    },
    correctAnswer: "E",
  },
  {
    question:
      "330. Sidikdə zülalı təyin etdikdə sidiyin reaksiyası necə olmalıdır?",
    options: {
      A: "Kəskin qələvi",
      B: "Amfoter",
      C: "Neytral",
      D: "Zəif turş",
      E: "Qələvi",
    },
    correctAnswer: "D",
  },
  {
    question: "331. Sidikdə zülalı tətin etdikdə sidik necə olmalıdır?",
    options: {
      A: "Tam bulanlıq",
      B: "Şəffaf",
      C: "Qanlı",
      D: "Selikli",
      E: "Bulanlıq",
    },
    correctAnswer: "B",
  },
  {
    question:
      "332. Sidikdə keyfiyyətcə zülal təyin edildikdə neçə sınaq şüşəsi götürülür?",
    options: {
      A: "4",
      B: "5",
      C: "2",
      D: "6",
      E: "3",
    },
    correctAnswer: "C",
  },
  {
    question:
      "333. 100 ml 20%-li sulfosalisil turşusunu hazırlamaq üçün neçə qram reaktiv götürülür?",
    options: {
      A: "40 qr",
      B: "25 qr",
      C: "20 qr",
      D: "45 qr",
      E: "30 qr",
    },
    correctAnswer: "C",
  },
  {
    question:
      "334. Althauzen üsulu ilə sidikdə şəkər miqdarca təyin edildikdə neçə ml sidik götürülür?",
    options: {
      A: "6,5 ml",
      B: "4 ml",
      C: "6 ml",
      D: "5 ml",
      E: "5,5 ml",
    },
    correctAnswer: "B",
  },
  {
    question:
      "335. Laborant uçucu maddələrlə işlədikdə müayinə harada aparılmalıdır?",
    options: {
      A: "Adi şkafda",
      B: "“A” şkafında",
      C: "Adi masa üzərində",
      D: "Sorucu şkafda",
      E: "“B” şkafında",
    },
    correctAnswer: "D",
  },
  {
    question:
      "336. İşlənmiş turşunu nə ilə neytrallaşdırdıqdan sonra əlüzyuyana tökmək olar?",
    options: {
      A: "Qələvi ilə qarışdırdıqdan sonra",
      B: "Efirlə qarışdırdıqdan sonra",
      C: "Su ilə durulaşdırdıqdan sonra",
      D: "Digər turşu ilə qarışdırdıqdan sonra",
      E: "Formalinlə qarışdırdıqdan sonra",
    },
    correctAnswer: "C",
  },
  {
    question: "337. Sidiyin müayinəsinə hansılar aiddir?",
    options: {
      A: "Fiziki",
      B: "Bakterioloji",
      C: "Bütün sadalananlar düzdür",
      D: "Mikroskopik",
      E: "Kimyəvi",
    },
    correctAnswer: "C",
  },
  {
    question: "338. Normada təzə ifraz olunmuş sidiyin rəngi necə olur?",
    options: {
      A: "Qonur-qəhvəyi",
      B: "Qırmızı-sarı",
      C: "Al qırmızı",
      D: "Sarı-samanı",
      E: "Göy-yaşıl",
    },
    correctAnswer: "D",
  },
  {
    question: "339. Sidiyin rəngini laborant necə təyin edir?",
    options: {
      A: "Adi gözlə işıqda baxmaqla",
      B: "Efir damızdırmaqla",
      C: "Qaranlıqda baxmaqla",
      D: "Qələvi tökməklə",
      E: "Su əlavə etməklə",
    },
    correctAnswer: "A",
  },
  {
    question:
      "340. Sidikdə oksalat duzları olduqda sidik necə şəffaflaşdırırlır?",
    options: {
      A: "Bakterial filtrindən keçirməklə",
      B: "Süzgəc kağızı ilə süzməklə",
      C: "Efir damızdırmaqla",
      D: "Xlorid turşusu damızdırmaqla",
      E: "Sirkə turşusu damızdırmaqla",
    },
    correctAnswer: "D",
  },
  {
    question:
      "341. Sidiyi 5 dəfə durulaşdırmaq üçün neçə ml sidik və su götürülür?",
    options: {
      A: "3 ml sidik, 2 ml su",
      B: "2 ml sidik, 2 ml su",
      C: "4 ml sidik, 1 ml su",
      D: "1 ml sidik, 10 ml su",
      E: "1 ml sidik, 4 ml su",
    },
    correctAnswer: "E",
  },
  {
    question:
      "342. Sidikdə zülalın təyinində durulaşma hansı vaxta qədər aparılır?",
    options: {
      A: "həlqə 2 dəqiqədən gec alınsın",
      B: "həlqə 4 dəqiqədən gec alınsın",
      C: "həlqə 6 dəqiqədən gec alınsın",
      D: "həlqə 7 dəqiqədən gec alınsın",
      E: "həlqə 5 dəqiqədən gec alınsın",
    },
    correctAnswer: "A",
  },
  {
    question:
      "343. Rozun sınağını aparmaq üçün neçə %-li yod məhlulundan istifadə olunur?",
    options: {
      A: "4%",
      B: "3,5%",
      C: "1%",
      D: "3%",
      E: "2%",
    },
    correctAnswer: "C",
  },
  {
    question:
      "344. Sidikdə bilirubin olarsa, Rozin sınağı ilə təyin olunduqda hansı rəng həlqə alınır?",
    options: {
      A: "Yaşıl",
      B: "Qırmızı",
      C: "Göy",
      D: "Boz",
      E: "Çəhrayı",
    },
    correctAnswer: "A",
  },
  {
    question: "345. İzotop üsulu ilə hansı proses öyrənilir?",
    options: {
      A: "Aralıq mübadilə",
      B: "Maddələrin balansı",
      C: "Ayrı-ayrı maddələrin mübadiləsi",
      D: "Enerji mübadiləsi",
      E: "Hidroliz",
    },
    correctAnswer: "C",
  },
  {
    question:
      "346. Maddələrin qarışığını ayırmaq üçün hansı üsuldan istifadə olunur?",
    options: {
      A: "Toxuma kəsiklərinin müayinəsi",
      B: "Elektroforez",
      C: "Elektron mikroskopiya",
      D: "Nüvəli maqnit rezonans",
      E: "Yandırılma",
    },
    correctAnswer: "C",
  },
  {
    question:
      "347. Maddənin quruluşunun öyrənilməsində istifadə olunan üsul hansıdır?",
    options: {
      A: "Yandırılma",
      B: "Elektroforez",
      C: "Nüvəli maqnit rezonans",
      D: "İzotop",
      E: "Ultrasentrifuqalaşdırma",
    },
    correctAnswer: "C",
  },
  {
    question:
      "348. Hüceyrə səviyyəsində mübadilə proseslərini öyrənmək üçün hansı üsuldan istifadə edilir?",
    options: {
      A: "İzotop",
      B: "Spektral",
      C: "Homogenizasiya",
      D: "Angiostomiya",
      E: "Elektroforez",
    },
    correctAnswer: "C",
  },
  {
    question:
      "349. Angiostomiya üsulunun köməyi ilə mübadilə prosesləri hansı səviyyədə öyrənilir?",
    options: {
      A: "Ayrı-ayrı maddə",
      B: "Hüceyrə",
      C: "Bütün orqanizm",
      D: "Ayrı-ayrı orqan",
      E: "Toxuma",
    },
    correctAnswer: "D",
  },
  {
    question: "350. Zülallar orqanizmdə hansı funksiyanı yerinə yetirmirlər?",
    options: {
      A: "Qoruyucu",
      B: "Energetik",
      C: "Katalitik",
      D: "Ehtiyata toplanmaq",
      E: "Nəqliyyat",
    },
    correctAnswer: "D",
  },

  {
    question:
      "351. İnsan orqanizminin bədən kütləsinin 1/5 hissəsini (20%) təşkil edən maddələr hansılardır?",
    options: {
      A: "Mineral elementlər",
      B: "Vitaminlər",
      C: "Su",
      D: "Lipidlər",
      E: "Zülallar",
    },
    correctAnswer: "E",
  },
  {
    question:
      "352. Orqanizmdə oksigen (O2) və karbon (CO2) qazlarını daşıyan zülallar hansılardır?",
    options: {
      A: "Lipoproteidlər",
      B: "Hemoqlobin",
      C: "Transferrin",
      D: "Albuminlər",
      E: "Retinol",
    },
    correctAnswer: "B",
  },
  {
    question: "353. İrsilik funksiyasını yerinə yetirən zülallar hansılardır?",
    options: {
      A: "Metalloproteidlər",
      B: "Fosfoproteidlər",
      C: "Nukleoproteidlər",
      D: "Xromoproteidlər",
      E: "Qlikoproteidlər",
    },
    correctAnswer: "C",
  },
  {
    question:
      "354. Osmotik təzyiqin hissəsi olan onkotik təzyiqi yaradan maddələr hansılardır?",
    options: {
      A: "Su",
      B: "Anionlar",
      C: "Zülallar",
      D: "Vitaminlər, Hormonlar",
      E: "Kationlar",
    },
    correctAnswer: "C",
  },
  {
    question:
      "355. Zülalın tərkibindəki əsas kimyəvi elementlərdən hansı element miqdarca öz sabitliyi ilə fərqlənir?",
    options: {
      A: "Hidrogen",
      B: "Oksigen",
      C: "Azot",
      D: "Kükürd",
      E: "Karbon",
    },
    correctAnswer: "C",
  },
  {
    question: "356. Zülalın tərkibinə neçə müxtəlif aminturşu daxildir?",
    options: {
      A: "20",
      B: "200",
      C: "51",
      D: "60",
      E: "9",
    },
    correctAnswer: "A",
  },
  {
    question:
      "357. Monoaminomonokarbon aminturşularının sulu məhlulları hansı reaksiyanı verir?",
    options: {
      A: "Turş",
      B: "Zəif turş",
      C: "Neytral",
      D: "Zəif qələvi",
      E: "Qələvi",
    },
    correctAnswer: "C",
  },
  {
    question:
      "358. Tsiklik aminturşuların tərkibi atsiklik aminturşuların tərkibindən nə ilə fərqlənir?",
    options: {
      A: "NH2 qruplarının olması ilə",
      B: "COOH qruplarının olması ilə",
      C: "CH2 qruplarının olması ilə",
      D: "Aromatik nüvənin olması ilə",
      E: "Radikalların olması ilə",
    },
    correctAnswer: "D",
  },
  {
    question:
      "359. Zülallarda aminturşular bir-biri ilə hansı rabitə vasitəsilə birləşirlər?",
    options: {
      A: "Disulfid",
      B: "Hidrogen",
      C: "Peptid",
      D: "Kovalent",
      E: "İon",
    },
    correctAnswer: "C",
  },
  {
    question:
      "360. Aşağıdakı peptidlərdən hansıları saya əzələlərin yiğılmasını stimulə edir?",
    options: {
      A: "Oksitosin",
      B: "Enkefalin",
      C: "Qlutation",
      D: "Bradikinin",
      E: "Vazopressin",
    },
    correctAnswer: "A",
  },
  {
    question:
      "361. Aşağıdakı peptidlərdən hansıları qan təzyiqini və böyrəklərdə suyun reabsorbsiyasını artırır?",
    options: {
      A: "Bradikinin",
      B: "Oksitosin",
      C: "Vazopressin",
      D: "Enkefalin",
      E: "Qlutation",
    },
    correctAnswer: "C",
  },
  {
    question:
      "362. Aşağıdakı peptidlərdən hansılarının təsiri ağrıkəsici kimi narkotiklərin təsirini xatırladır?",
    options: {
      A: "Vazopressin",
      B: "Enkefalin",
      C: "Bradikinin",
      D: "Oksitosin",
      E: "Qlutation",
    },
    correctAnswer: "B",
  },
  {
    question:
      "363. Zülalların əsas funksiyalarının yerinə yetirilməsini hansı struktur quruluş təmin edir?",
    options: {
      A: "Birincili",
      B: "Dördüncülü",
      C: "İkincili",
      D: "Üçüncülü",
      E: "Hamısı birlikdə",
    },
    correctAnswer: "D",
  },
  {
    question: "364. Aşağıdakı xassələrdən hansıları zülallara xas deyil?",
    options: {
      A: "Şişginlik qabiliyyəti",
      B: "Optiki aktivlik",
      C: "Suda həll olmamaq",
      D: "Elektrik sahəsində hərəkətlik",
      E: "Yüksək molekul çəkisi",
    },
    correctAnswer: "C",
  },
  {
    question:
      "365. Bir sıra xəstəliklərə diaqnoz qoymaq məqsədilə zülalların hansı xassəsindən istifadə olunur?",
    options: {
      A: "Adsorbsiya",
      B: "Amfoterlik",
      C: "Denaturasiya",
      D: "Kolloidlik",
      E: "Hidrofillik",
    },
    correctAnswer: "B",
  },
  {
    question: "366. Zülalın hidrat təbəqəsi hansı funksiyanı daşıyır?",
    options: {
      A: "Qanın PH-ın tənzimində iştirak edir",
      B: "Zülal molekullarını yapışmaqdan və çöküntüyə düşməkdən qoruyur",
      C: "Bufer məhlulların əsasını təşkil edir",
      D: "Zülalların fraksiyalara ayrılmasında iştirak edir",
      E: "Zülal üzərində bəzi maddələrin adsorbsiyasında iştirak edir",
    },
    correctAnswer: "B",
  },
  {
    question:
      "367. Zülalların sulu məhlullarının davamlılığı hansı amillərlə təmin edilir?",
    options: {
      A: "Hidrat təbəqənin qalınlığı ilə",
      B: "Yalnız müsbət yükün olması ilə",
      C: "Elektrik yükünün və hidrat təbəqənin olması ilə",
      D: "Yalnız mənfi yükün olması ilə",
      E: "Elektrik yükünün və hidrat təbəqənin olmaması ilə",
    },
    correctAnswer: "C",
  },
  {
    question:
      "368. Ağır metallarla zəhərlənmələr zamanı müalicə zülalın hansı xassəsinə əsaslanır?",
    options: {
      A: "Denaturasiya",
      B: "Kolloidlik",
      C: "Şişginlik",
      D: "Hidrofillik",
      E: "Amfoterlik",
    },
    correctAnswer: "A",
  },
  {
    question:
      "369. “Süni böyrək” apparatının (cihazının) fəaliyyətinin əsasında hansı proses durur?",
    options: {
      A: "Adsorbsiya",
      B: "Denaturasiya",
      C: "Dönməz çökmə",
      D: "Dializ",
      E: "Dönər çökmə",
    },
    correctAnswer: "D",
  },
  {
    question: "370. Sadə zülalları necə adlandırırlar?",
    options: {
      A: "Prostaqlandin",
      B: "Proteid",
      C: "Progestron",
      D: "Pirimidin",
      E: "Protein",
    },
    correctAnswer: "E",
  },
  {
    question: "371. Mürəkkəb zülalları necə adlandırırlar?",
    options: {
      A: "Pirimidin",
      B: "Progestron",
      C: "Protein",
      D: "Proteid",
      E: "Prostaqlandin",
    },
    correctAnswer: "D",
  },
  {
    question: "372. Sadə zülallara aid olmayanlar hansılardır?",
    options: {
      A: "Qlikoproteidlər",
      B: "Albuminlər",
      C: "Histonlar",
      D: "Qlobulinlər",
      E: "Protaminlər",
    },
    correctAnswer: "A",
  },
  {
    question: "373. Mürəkkəb zülallara aid olmayanlar hansılardır?",
    options: {
      A: "Histonlar",
      B: "Xromoproteidlər",
      C: "Lipoproteidlər",
      D: "Nukleoproteidlər",
      E: "Fosfoproteidlər",
    },
    correctAnswer: "A",
  },
  {
    question: "374. Xromoproteidlərə aid olmayan zülallar hansılardır?",
    options: {
      A: "Xlorofill",
      B: "Katalaza",
      C: "Mioqlobin",
      D: "Hemoqlobin",
      E: "Kazeinogen",
    },
    correctAnswer: "E",
  },
  {
    question: "375. Nuklein turşularına hansılar aiddir?",
    options: {
      A: "RNT, DNT",
      B: "AlAT, AsAT",
      C: "AMF, ADF",
      D: "PP, C",
      E: "LDQ, KK",
    },
    correctAnswer: "A",
  },
  {
    question: "376. DNT turşusunun tərkibində hansı maddə aşkar olunmayıb?",
    options: {
      A: "Timin",
      B: "Riboza",
      C: "Adenin",
      D: "Quanin",
      E: "Sitozin",
    },
    correctAnswer: "B",
  },
  {
    question: "377. DNT turşusunun bioloji rolu nədən ibarətdir?",
    options: {
      A: "Aktivləşmiş aminturşuları zülalın sintez yerinə daşıyır",
      B: "Genetik informasiyanı köçürdür",
      C: "Genetik informasiyanı qoruyur",
      D: "Ribosomların əsas komponentini təşkil edir",
      E: "Spesifik zülalın sintezi üçün matrisa (qəlib) rolunu oynayır",
    },
    correctAnswer: "C",
  },
  {
    question: "378. RNT turşusu hansı funksiyanı daşımır?",
    options: {
      A: "Aktivləşmiş aminturşuların daşınması",
      B: "Genetik informasiyanın köçürdülməsi",
      C: "Genetik informasiyanın qorunması",
      D: "Heterogen nüvə RNT-si rolunu",
      E: "Ribosomların əsas komponenti rolunu",
    },
    correctAnswer: "C",
  },
  {
    question: "379. Nukleoproteidlər nədir?",
    options: {
      A: "Nukleozid ilə fosfat turşusunun birləşməsi",
      B: "Zülal ilə nuklein turşularının birləşməsi",
      C: "Mononukleotidlərin ardıcıl birləşməsi",
      D: "Azot əsası ilə dezoksiribozanın birləşməsi",
      E: "Azot əsası ilə ribozanın birləşməsi",
    },
    correctAnswer: "B",
  },
  {
    question: "380. Karbohidratlara aid olmayan funksiya hansıdır?",
    options: {
      A: "Tənzimedici",
      B: "Energetik",
      C: "Qoruyucu",
      D: "Plastik",
      E: "İrsilik",
    },
    correctAnswer: "E",
  },
  {
    question:
      "381. İnsan orqanizmi üçün karbohidratlara sutkalıq tələbat nə qədərdir?",
    options: {
      A: "200 q",
      B: "100 q",
      C: "450 q",
      D: "25 q",
      E: "350 q",
    },
    correctAnswer: "C",
  },
  {
    question: "382. Monosaxaridlərin nümayəndələri olmayanlar hansılardır?",
    options: {
      A: "Fruktoza",
      B: "Saxaroza",
      C: "Qalaktoza",
      D: "Riboza",
      E: "Qlükoza",
    },
    correctAnswer: "B",
  },
  {
    question:
      "383. Mübadilə proseslərində aşağıdakılardan hansılar iştirak edirlər?",
    options: {
      A: "Heteropolisaxaridlər",
      B: "Homopolisaxaridlər",
      C: "Disaxaridlər",
      D: "Sərbəst monosaxaridlər",
      E: "Monosaxaridlərin fosforla efirləri",
    },
    correctAnswer: "E",
  },
  {
    question: "384. Disaxaridlərin nümayəndələri hansılardır?",
    options: {
      A: "Dezoksiriboza",
      B: "Riboza",
      C: "Trioza",
      D: "Maltoza",
      E: "Eritroza",
    },
    correctAnswer: "D",
  },
  {
    question: "385. Polisaxaridlərə aid olmayanlar hansılardır?",
    options: {
      A: "Dioksiaseton",
      B: "Nişasta",
      C: "Sellüloza",
      D: "Heparin",
      E: "Qlikogen",
    },
    correctAnswer: "A",
  },
  {
    question: "386. Hansı proseslərdə sellüloza iştirak etmir?",
    options: {
      A: "Bağırsağın motorikasını aktivləşdirmək",
      B: "Mədənin motorikasını aktivləşdirmək",
      C: "Həzm şirələrinin hasilini stimullaşdırmaq",
      D: "Əzələlərdə toplanmaq",
      E: "Toxluq hissi yaratmaq",
    },
    correctAnswer: "D",
  },
  {
    question: "387. Hüceyrəarası maddənin əsas tərkib hissəsi nədir?",
    options: {
      A: "Heparin",
      B: "Sial turşuları",
      C: "Neyramin turşusu",
      D: "Xondroitinsulfatlar",
      E: "Gialuron turşusu",
    },
    correctAnswer: "E",
  },
  {
    question: "388. Nişasta hansı karbohidratlardan ibarətdir?",
    options: {
      A: "Saxaroza",
      B: "Qlükoza",
      C: "Laktoza",
      D: "Fruktoza",
      E: "Eritroza",
    },
    correctAnswer: "B",
  },
  {
    question: "389. Karbohidratların əsas funksiyası hansıdır?",
    options: {
      A: "İstilik tənzimedici",
      B: "Daşıyıcı",
      C: "İrsilik",
      D: "Enerji",
      E: "Katalitik",
    },
    correctAnswer: "D",
  },
  {
    question: "390. Karbohidratların tərkibinə daxil olan element hansıdır?",
    options: {
      A: "Mis",
      B: "Fosfor",
      C: "Dəmir",
      D: "Azot",
      E: "Oksigen",
    },
    correctAnswer: "E",
  },
  {
    question: "391. Aldehidspirtlərə aid olan hansıdır?",
    options: {
      A: "Eritroza",
      B: "Riboza",
      C: "Laktoza",
      D: "Fruktoza",
      E: "Qlükoza",
    },
    correctAnswer: "E",
  },
  {
    question:
      "392. 1 q karbohidratın tam parçalanması zamanı əmələ gələn enerjinin miqdarı nə qədər olur?",
    options: {
      A: "38,9 kC",
      B: "17,15 kC",
      C: "36,3 kC",
      D: "21,13 kC",
      E: "10,2 kC",
    },
    correctAnswer: "B",
  },
  {
    question: "393. Monosaxaridlərin xüsusiyyəti hansıdır?",
    options: {
      A: "Kristallik maddədir",
      B: "Yüksəkmolekullu karbohidratdır",
      C: "Kolloid məhlul əmələ gətirir",
      D: "Suda həll olmur",
      E: "Hidrofil birləşmədir",
    },
    correctAnswer: "A",
  },
  {
    question: "394. Orqanizmin əsas enerji mənbəyi hansı maddədir?",
    options: {
      A: "Saxaroza",
      B: "Maltoza",
      C: "Qlükoza",
      D: "Laktoza",
      E: "Qalaktoza",
    },
    correctAnswer: "C",
  },
  {
    question:
      "395. Aşağıdakılardan hansı karbohidratlar metalları onların oksidlərindən reduksiya etmək qabiliyyətinə malikdir?",
    options: {
      A: "Eritroza",
      B: "Maltoza",
      C: "Riboza",
      D: "Laktoza",
      E: "Saxaroza",
    },
    correctAnswer: "B",
  },
  {
    question: "396. Polisaxaridlər hansı xassəyə malikdirlər?",
    options: {
      A: "Asanlıqla oksidləşən maddələrdir",
      B: "Şirin dada malik məhlullardır",
      C: "Kristallik maddələrdir",
      D: "Kolloid məhlullardır",
      E: "Amfoter məhlullardır",
    },
    correctAnswer: "D",
  },
  {
    question: "397. Heparinin əmələ gəldiyi orqan hansıdır?",
    options: {
      A: "Böyrəklər",
      B: "Qaraciyər",
      C: "Dalaq",
      D: "Mədə",
      E: "Mədəaltı vəzi",
    },
    correctAnswer: "B",
  },
  {
    question:
      "398. Sidikdə pentozaları aşkar etmək üçün hansı keyfiyyət reaksiyasından və yaxud sınaqdan istifadə olunur?",
    options: {
      A: "Bial sınağı",
      B: "Fol reaksiyası",
      C: "Adamkeviç reaksiyası",
      D: "Akrolein sınağı",
      E: "Salkovski reaksiyası",
    },
    correctAnswer: "A",
  },
  {
    question:
      "399. Ekspress üsulu ilə sidikdə şəkəri təyin etdikdə hansı rəng şəkərin olmamasını göstərir?",
    options: {
      A: "Darçınlı-qırmızı",
      B: "Göy",
      C: "İntensiv qırmızı",
      D: "Sarı-yaşıl",
      E: "Yaşıl",
    },
    correctAnswer: "B",
  },
  {
    question: "400. Qlükozaya aid olmayan xüsusiyyət hansıdır?",
    options: {
      A: "Osmotik təzyiqin saxlanılmasında iştirak edir",
      B: "Bitki və heyvanların əsas karbohidratıdır",
      C: "Ketonspirtdir",
      D: "Oliqosaxaridlərin və polisaxaridlərin əsasını təşkil edir",
      E: "Əsas enerji mənbəyidir",
    },
    correctAnswer: "C",
  },

  {
    question: "401. Lipidləri xarakterizə edən xüsusiyyətlər hansılardır?",
    options: {
      A: "Yapışqan məhlullar əmələ gətirirlər",
      B: "Asanlıqla reduksiya olunurlar",
      C: "Hidrofil birləşmələrdir",
      D: "Suda pis həll olurlar",
      E: "Kolloid məhlullar əmələ gətirirlər",
    },
    correctAnswer: "D",
  },
  {
    question: "402. Protoplazmatik lipidlər necə xarakterizə edilir?",
    options: {
      A: "Həyat boyu eyni səviyyədə qalır",
      B: "Bədən kütləsinin 30%-ni təşkil edir",
      C: "Orqanizmdə olan bütün lipidlərin 50%-ni təşkil edir",
      D: "Orqanizmdə ehtiyat şəklində yığılır",
      E: "Müxtəlif amillərdən asılı olaraq dəyişir",
    },
    correctAnswer: "A",
  },
  {
    question:
      "403. Orqanizmdə olan lipidlərin bioloji əhəmiyyəti nədən ibarətdir?",
    options: {
      A: "İstiliyin tənzimində iştirak edirlər",
      B: "Qan qruplarının spesifikliyini təmin edirlər",
      C: "Mədə və bağırsağın motorukasını fəallaşdırır",
      D: "Orqanizmdə gedən kimyəvi reaksiyaları katalizə edirlər",
      E: "Anticismlərin əmələ gəlməsində iştirak edirlər",
    },
    correctAnswer: "A",
  },
  {
    question: "404. 1 q yağın oksidləşməsi zamanı nə qədər enerji ayrılır?",
    options: {
      A: "38,9 kC",
      B: "25,12 kC",
      C: "17,15 kC",
      D: "30 kC",
      E: "50,12 kC",
    },
    correctAnswer: "A",
  },
  {
    question: "405. Sadə lipidlərin tərkibində hansı maddələr vardır?",
    options: {
      A: "ali yağ turşuları və spirtlər",
      B: "ali yağ turşuları, spirtlər və monosaxaridlər",
      C: "ali yağ turşuları, spirtlər və fosfat turşusu",
      D: "ali yağ turşuları, spirtlər və azot əsasları",
      E: "ali yağ turşuları, spirtlər və sulfat turşusu",
    },
    correctAnswer: "A",
  },
  {
    question: "406. Sadə lipidlərə hansılar aiddir?",
    options: {
      A: "Qliserofosfatidlər",
      B: "Qlikolipidlər",
      C: "Sfinqofosfatidlər",
      D: "Lipoproteidlər",
      E: "Yağlı turşular",
    },
    correctAnswer: "E",
  },
  {
    question: "407. Xolesterinin yerinə yetirmədiyi funksiya hansıdır?",
    options: {
      A: "Protrombini fəallaşdırır",
      B: "Öd turşularının sintezində iştirak edir",
      C: "Eritrositlərin hemolizə qarşı davamlılığını artırır",
      D: "Steroid hormonların sintezində iştirak edir",
      E: "Hüceyrə membranlarının tərkibinə daxildir",
    },
    correctAnswer: "A",
  },
  {
    question: "408. Mürəkkəb lipidlərə hansılar aiddir?",
    options: {
      A: "Yağlı turşular",
      B: "Triasilqliserinlər",
      C: "Yağlı aldehidlər",
      D: "Fosfolipidlər",
      E: "Mumlar",
    },
    correctAnswer: "D",
  },
  {
    question: "409. Aşağıdakılardan hansının tərkibində daha çox lipid var?",
    options: {
      A: "Sinir toxumasında",
      B: "Birləşdirici toxumada",
      C: "Beyində",
      D: "Piy toxumasında",
      E: "Əzələlərdə",
    },
    correctAnswer: "D",
  },
  {
    question:
      "410. Orqanizmi 25-30% enerji ilə təmin edən maddələr hansılardır?",
    options: {
      A: "Zülallar",
      B: "Vitaminlər",
      C: "Karbohidratlar",
      D: "Mineral maddələr",
      E: "Lipidlər",
    },
    correctAnswer: "E",
  },
  {
    question:
      "411. Beyin toxumasının və sinir liflərinin tərkibinə çoxlu miqdarda nə daxildir?",
    options: {
      A: "Triasilqliserinlər",
      B: "Lipoproteidlər",
      C: "Mioqlobinlər",
      D: "Serebrozidlər",
      E: "Xondroitinsulfatlar",
    },
    correctAnswer: "D",
  },
  {
    question:
      "412. Mürəkkəb lipidlərin tərkibinə aşağıdakılardan hansılar daxildir?",
    options: {
      A: "Disaxaridlər",
      B: "Gialuron turşusu",
      C: "Nitrat turşusu",
      D: "Xondroitinsulfatlar",
      E: "Monosaxaridlər",
    },
    correctAnswer: "E",
  },
  {
    question:
      "413. Fosfolipidlərin orqanizm üçün olan əhəmiyyəti nədən ibarətdir?",
    options: {
      A: "Küllü miqdarda sinir toxumasının tərkibində olmasından",
      B: "Qanın laxtalanmasına mane olmasından",
      C: "Bakteriya toksinlərinin zərərsizləşdiriləməsindən",
      D: "Əzələ toxumasının tənəffüs piqmenti olmasından",
      E: "Bioloji filtr rolunu oynamasından",
    },
    correctAnswer: "A",
  },
  {
    question: "414. Qlikolipidlərin orqanizm üçün hansı əhəmiyyəti vardır?",
    options: {
      A: "Yağ turşularını qanda daşımaq",
      B: "Beyinin elektrik oyanıqlığını bərpa etmək",
      C: "Eritrositlərin hemolizə qarşı davamlılığını artırmaq",
      D: "Sinir impulslarının keçiriciliyini təmin etmək",
      E: "Saçları və dərini suyun təsirindən qorumaq",
    },
    correctAnswer: "B",
  },
  {
    question: "415. Lipoproteidlərin orqanizm üçün hansı əhəmiyyəti vardır?",
    options: {
      A: "Eritrositlərin hemolizə qarşı davamlılığını artırırlar",
      B: "Bakteriya toksinlərini zərərsizləşdirirlər",
      C: "Sinir liflərinin tərkibinə daxildirlər",
      D: "Zülalın biosintezində iştirak edirlər",
      E: "Qanla lipidləri daşıyırlar",
    },
    correctAnswer: "E",
  },
  {
    question: "416. Akrolein sınağı vasitəsilə nəyi aşkar etmək olar?",
    options: {
      A: "Qlikolipidləri",
      B: "Qliserofosfolipidləri",
      C: "Lipoproteidləri",
      D: "Xolesterini",
      E: "Sfinqofosfatidləri",
    },
    correctAnswer: "B",
  },
  {
    question: "417. Lesitin hansı lipid qrupuna aiddir?",
    options: {
      A: "Sfinqofosfatidlərə",
      B: "Qliserofosfatidlərə",
      C: "Qlikolipidlərə",
      D: "Lipoproteidlərə",
      E: "Sterinlərə",
    },
    correctAnswer: "B",
  },
  {
    question:
      "418. Xolesterini aşkar etmək üçün hansı keyfiyyət reaksiyasından istifadə olunur?",
    options: {
      A: "Salkovski",
      B: "Bial",
      C: "Nilander",
      D: "Ninhidrin",
      E: "Trommer",
    },
    correctAnswer: "A",
  },
  {
    question:
      "419. Orqanizmdə lipidlərin əsas emulqatorları hansı maddələrdir?",
    options: {
      A: "Öd turşularının duzları",
      B: "Natrium bikarbonat",
      C: "Öd piqmentləri",
      D: "Kalium hidroksid",
      E: "Natrium xlorid",
    },
    correctAnswer: "A",
  },
  {
    question: "420. Hansı xüsusiyyət xolesterini xarakterizə edir?",
    options: {
      A: "Beyin hüceyrələrini izolə etmək qabiliyyətinə malikdir",
      B: "Protrombini aktivləşdirir",
      C: "Yarpaqları sudan və mikroblardan qoruyur",
      D: "Üzvi həll edicilərlə pis həll olur",
      E: "Suda həll olur",
    },
    correctAnswer: "A",
  },
  {
    question:
      "421. Kimyəvi təbiətinə görə vitaminlər hansı birləşmələrə aiddir?",
    options: {
      A: "Yüksəkmolekullu üzvi birləşmələrə",
      B: "Üzvi turşulara",
      C: "Qeyri-üzvi birləşmələrə",
      D: "Aldehidlərə",
      E: "Aşağımolekullu üzvi birləşmələrə",
    },
    correctAnswer: "E",
  },
  {
    question: "422. Vitamin mənbəyi hesab olunmayanlar hansılardır?",
    options: {
      A: "Süni preparatlar",
      B: "Mineral turşular",
      C: "Bağırsaq mikroflorası",
      D: "Provitaminlər",
      E: "Bitki və heyvan mənşəli məhsullar",
    },
    correctAnswer: "B",
  },
  {
    question:
      "423. Suda həll olan vitaminlərə aşağıdakılardan hansılar aid deyil?",
    options: {
      A: "A (retinol)",
      B: "PP (nikotin turşusu)",
      C: "B1 (tiamin)",
      D: "B6 (piridoksol)",
      E: "C (askorbin turşusu)",
    },
    correctAnswer: "A",
  },
  {
    question:
      "424. Yağda həll olan vitaminlərə aşağıdakılardan hansılar aid deyil?",
    options: {
      A: "B2 (riboflavin)",
      B: "A (retinol)",
      C: "D (kalsiferol)",
      D: "E (tokoferol)",
      E: "K (filloxinon)",
    },
    correctAnswer: "A",
  },
  {
    question: "425. Orqanizmdə tam vitamin çatışmazlığı necə adlanır?",
    options: {
      A: "Hipervitaminoz",
      B: "Hipertireoz",
      C: "Avitaminoz",
      D: "Hipovitaminoz",
      E: "Hipotireoz",
    },
    correctAnswer: "C",
  },
  {
    question:
      "426. Nə üçün suda həll olan vitaminlər orqanizmə hər gün daxil olmalıdır?",
    options: {
      A: "Orqanizmdə sintez olunmadığına və ya az miqdarda əmələ gəldiyinə görə",
      B: "“Kaslın daxili amili” ilə birləşməməsinə görə",
      C: "Öd turşularının çatışmamazlığına görə",
      D: "Qidanın tərkibində az miqdarda olduğuna görə",
      E: "Bağırsaqda zəif sorulmalarına görə",
    },
    correctAnswer: "A",
  },
  {
    question:
      "427. Hansı proseslər A vitamininin bioloji təsiri üçün xarakterik deyil?",
    options: {
      A: "Zülalların və lipidlərin mübadiləsi",
      B: "Epitelial toxumanın buynuzlaşmasının qarşısının alınması",
      C: "Membranların keçiriciliyinin tənzimi",
      D: "Qanın laxtalanması",
      E: "Oksidləşmə prosesləri",
    },
    correctAnswer: "D",
  },
  {
    question:
      "428. Xəstəliklərdən hansı A vitamininin hipovitaminozu ilə bağlı deyil?",
    options: {
      A: "Toyuq korluğu",
      B: "Pellaqra",
      C: "Bronxitlər",
      D: "Kseroftalmiya",
      E: "Nefritlər",
    },
    correctAnswer: "B",
  },
  {
    question: "429. PP vitamininin çatışmazlığı hansı xəstəliyə səbəb olur?",
    options: {
      A: "Pellaqra",
      B: "Polinevrit",
      C: "Kseroftalmiya",
      D: "Raxit",
      E: "Bəd xassəli anemiya",
    },
    correctAnswer: "A",
  },
  {
    question: "430. Fermentlər nədir?",
    options: {
      A: "Aktivatorlardır",
      B: "Substratdır",
      C: "Bioloji katalizatorlardır",
      D: "Sekretlərdir",
      E: "İngibitorlardır",
    },
    correctAnswer: "C",
  },
  {
    question: "431. Fermentlərin bioloji əhəmiyyəti nədən ibarətdir?",
    options: {
      A: "Daxili mühitin sabitliyini tənzimləməsindən",
      B: "Biokimyəvi reaksiyaların sürətini zəiflətməsindən",
      C: "Orqanizmin əsas tərkib hissəsi olmasından",
      D: "Biokimyəvi reaksiyaların sürətini artırmasından",
      E: "Osmotik təzyiqin sabit saxlanılmasından",
    },
    correctAnswer: "D",
  },
  {
    question:
      "432. Mədəaltı vəzin 1,6 q amilazası sutka ərzində nə qədər nişasta hidroliz edir?",
    options: {
      A: "75 kq",
      B: "175 kq",
      C: "17 kq",
      D: "100 kq",
      E: "105 kq",
    },
    correctAnswer: "B",
  },
  {
    question: "433. Fermentlər hansı temperaturda inaktivləşir?",
    options: {
      A: "70°-80°",
      B: "55°-65°",
      C: "35°-45°",
      D: "15°-25°",
      E: "25°-35°",
    },
    correctAnswer: "A",
  },
  {
    question: "434. Fermentativ reaksiyaların sürətini artıran amil hansıdır?",
    options: {
      A: "Aktivatorlar",
      B: "İngibitorlar",
      C: "Apofermentlər",
      D: "Enzimlər",
      E: "Kofermentlər",
    },
    correctAnswer: "A",
  },
  {
    question:
      "435. Qeyri-üzvi katalizatorlara xas olan parametr göstəricisi hansıdır?",
    options: {
      A: "Normal atmosfer təzyiqi",
      B: "Yüksək molekullu polimer olduğu",
      C: "Yüksək spesifiklik",
      D: "Yüksək temperatur optimumu (1000C və çox)",
      E: "Reaksiya zamanı strukturun dəyişməsi",
    },
    correctAnswer: "D",
  },
  {
    question:
      "436. Üzvi katalizatorlara xas olan parametr göstəricisi hansıdır?",
    options: {
      A: "Aşağı spesiflik",
      B: "Yüksək spesifiklik",
      C: "Aşağı molekullu birləşmələrin olması",
      D: "Reaksiya zamanı strukturun dəyişilməməsi",
      E: "Temperatur optimumnun yüksək olması",
    },
    correctAnswer: "B",
  },
  {
    question:
      "437. 2 q pepsin 2 saat ərzində nə qədər denaturatlaşmış yumurta zülalını parçalaya bilər?",
    options: {
      A: "200 kq",
      B: "30 kq",
      C: "100 kq",
      D: "25 kq",
      E: "175 kq",
    },
    correctAnswer: "C",
  },
  {
    question: "438. Ağız suyunun amilazası üçün hansı substrat spesifikdir?",
    options: {
      A: "Qlikogen",
      B: "Saxaroza",
      C: "Qlükoza",
      D: "Laktoza",
      E: "Nişasta",
    },
    correctAnswer: "E",
  },
  {
    question: "439. Ağız suyunun tərkibində hansı ferment var?",
    options: {
      A: "Amilaza",
      B: "Saxaraza",
      C: "Fosforilaza",
      D: "Laktaza",
      E: "Sellülaza",
    },
    correctAnswer: "A",
  },
  {
    question:
      "440. Koferment rolunda aşağıdakılardan hansı maddələr ola bilər?",
    options: {
      A: "Zülallar",
      B: "Lipidlər",
      C: "Karbohidratların törəmələri",
      D: "Hormonlar",
      E: "Vitaminlərin aktivləşmiş formaları",
    },
    correctAnswer: "E",
  },
  {
    question: "441. Fermentin apoferment hissəsini hansı maddələr təşkil edir?",
    options: {
      A: "Nukleozidtrifosfatlar",
      B: "Hormonlar",
      C: "Vitaminlər",
      D: "Mineral maddələr",
      E: "Aminturşular",
    },
    correctAnswer: "E",
  },
  {
    question: "442. Hidrolazalar sinfinə aşağıdakılardan hansılar aid deyil?",
    options: {
      A: "Amilaza",
      B: "Pepsin",
      C: "Saxaraza",
      D: "Tripsin",
      E: "Laktatdehidrogenaza",
    },
    correctAnswer: "E",
  },
  {
    question:
      "443. Miokardın infarktında əsasən hansı fermentlərin aktivliyi artır?",
    options: {
      A: "AsAT, KK və LDG (Aspartataminotransferazanın, kreatinkinazanın, laktakdehidrogenazanın)",
      B: "Turş fosfatazanın",
      C: "Qələvi fosfatazanın",
      D: "Alfa-amilazanın",
      E: "AlAT, LDG (Alaninaminotransferazanın, laktatdehidrogenazanın) aldolazanın",
    },
    correctAnswer: "A",
  },
  {
    question:
      "444. Qaraciyər xəstəlikləri zamanı əsasən hansı fermentlərin aktivliyi artır?",
    options: {
      A: "Qələvi fosfatazanın və maltazanın",
      B: "Alfa-amilazanın və laktazanın",
      C: "AlAT-ın, aldolazanın, LDG-nin, sorbitoldehidrogenazanın",
      D: "Turş fosfatazanın və saxarazanın",
      E: "KK, AsAT və LDG-nin",
    },
    correctAnswer: "C",
  },
  {
    question:
      "445. Mədəaltı vəzin xəstəlikləri zamanı hansı fermentin aktivliyi təyin edilir?",
    options: {
      A: "Fosforilazanın",
      B: "Maltazanın",
      C: "Saxarazanın",
      D: "Laktazanın",
      E: "Alfa-amilazanın",
    },
    correctAnswer: "E",
  },
  {
    question:
      "446. Fermentlərin aktivliyini təyin etdikdə hansı qandan istifadə edilir?",
    options: {
      A: "Hemolizli qandan",
      B: "Uzun müddət saxlanılmış qan serumundan",
      C: "Hemolizə uğramayan qandan",
      D: "Qan laxtasından",
      E: "Qan laxtası ilə qarışmış serumdan",
    },
    correctAnswer: "C",
  },
  {
    question:
      "447. Kimyəvi təbiətinə görə fermentlər hansı birləşmələrə aiddir?",
    options: {
      A: "Vitaminlərə",
      B: "Zülallara",
      C: "Hormonlara",
      D: "Lipidlərə",
      E: "Karbohidratlara",
    },
    correctAnswer: "B",
  },
  {
    question: "448. Fermentlər reaksiyaların sürətini neçə dəfə artırırlar?",
    options: {
      A: "1015-1018 dəfə",
      B: "10 dəfə",
      C: "108-1011 dəfə",
      D: "5 dəfə",
      E: "102-106 dəfə",
    },
    correctAnswer: "C",
  },
  {
    question:
      "449. Hansı ferment güclü turş mühitdə yüksək aktivliyə malikdir?",
    options: {
      A: "Pepsin",
      B: "Tripsin",
      C: "Ximotripsin",
      D: "Amilaza",
      E: "Qastriksin",
    },
    correctAnswer: "A",
  },
  {
    question: "450. Qidanın əvəzolunmayan amillərinə hansılar aid deyil?",
    options: {
      A: "Su",
      B: "Vitaminlərin çox hissəsi",
      C: "Doymamış yağ turşuları",
      D: "Mineral elementlər",
      E: "Doymuş yağ turşuları",
    },
    correctAnswer: "E",
  },

  {
    question:
      "451. Orqanizmdə maddələrin son məhsullara qədər parçalanması prosesinə nə deyilir?",
    options: {
      A: "Anevrizm",
      B: "Metabolizm",
      C: "Astiqmatizm",
      D: "Katabolizm",
      E: "Anabolizm",
    },
    correctAnswer: "D",
  },
  {
    question:
      "452. Orqanizmdə son məhsullardan spesifik maddələrin sintez prosesinə nə deyilir?",
    options: {
      A: "Anevrizm",
      B: "Anabolizm",
      C: "Astiqmatizm",
      D: "Metabolizm",
      E: "Katabolizm",
    },
    correctAnswer: "B",
  },
  {
    question: "453. Hansı maddələr makroergik adlanır?",
    options: {
      A: "Efir rabitəsi olanlar",
      B: "Peptid rabitəsi olanlar",
      C: "Fosfat rabitəsi olanlar",
      D: "Hidrogen rabitəsi olanlar",
      E: "İon rabitəsi olanlar",
    },
    correctAnswer: "C",
  },
  {
    question: "454. Makroerqik birləşmələrə aid olmayanlar hansılardır?",
    options: {
      A: "Nukleozid trifosfatlar (QTF, UTF, TTF, STF)",
      B: "Adenozintrifosfat turşusu (ATF)",
      C: "Fosfoyenolpiroüzüm turşusu",
      D: "Kreatinfosfat",
      E: "Adenozinmonofosfat turşusu",
    },
    correctAnswer: "E",
  },
  {
    question: "455. Hansı proseslərdə ATF-in enerjisindən istifadə olunmur?",
    options: {
      A: "Sintez proseslərində",
      B: "İonların membranlardan aktiv daşınmasında",
      C: "Əzələlərin açılmasında",
      D: "Beyin fəaliyyətində",
      E: "Əzələlərin yığılmasında",
    },
    correctAnswer: "D",
  },
  {
    question: "456. Karbohidratların intensiv parçalanması harada gedir?",
    options: {
      A: "Nazik bağırsaqda",
      B: "Ağız boşluğunda",
      C: "Qaraciyərdə",
      D: "Mədədə",
      E: "Yoğun bağırsaqda",
    },
    correctAnswer: "A",
  },
  {
    question:
      "457. Mədə-bağırsaq traktında karbohidratlar hansı fermentlərin təsirindən parçalanırlar?",
    options: {
      A: "Lipaza və qastriksin",
      B: "Dipentidaza və tripeptidaza",
      C: "Aminopepridaza və karboksipeptidaza",
      D: "Pepsin və qastriksin",
      E: "Amilaza və maltaza",
    },
    correctAnswer: "E",
  },
  {
    question:
      "458. Mədə-bağırsaq traktında karbohidratların parçalanması nəticəsində hansı maddələr alınır?",
    options: {
      A: "Dipeptidlər və tripeptidlər",
      B: "Yağ turşuları, qliserin və xolesterin",
      C: "Yağ turşuları, azot əsası və qliserin",
      D: "Fruktoza və aminturşular",
      E: "Qlükoza, fruktoza, qalaktoza",
    },
    correctAnswer: "E",
  },
  {
    question: "459. Hüceyrələrdə karbohidratların parçalanması nədən başlayır?",
    options: {
      A: "Fruktozadan, qlükozadan və qalaktozadan",
      B: "Nişastadan və qlükozadan",
      C: "Qlikogendən və qalaktozadan",
      D: "Sellülozadan və fruktozadan",
      E: "Qlükozadan və qlikogendən",
    },
    correctAnswer: "E",
  },
  {
    question:
      "460. Anaerob parçalanma yolu əsasən hansı toxuma üçün xarakterikdir?",
    options: {
      A: "Eritrositlər üçün",
      B: "Əzələ toxuması üçün",
      C: "Ürək üçün",
      D: "Beyin toxuması üçün",
      E: "Cinsi vəzlər üçün",
    },
    correctAnswer: "B",
  },
  {
    question: "461. Qanda qlükozanın azalmasına hansı hormonlar səbəb olur?",
    options: {
      A: "Adrenalin",
      B: "Qlükaqon",
      C: "Kortizon",
      D: "Aldosteron",
      E: "İnsulin",
    },
    correctAnswer: "E",
  },
  {
    question:
      "462. Karbohidrat mübadiləsini xarakterizə edən əlamətlərə hansılar aiddir?",
    options: {
      A: "Hipoqlikemiya və hipoproteinemiya",
      B: "Ketonemiya, ketonuriya və lipuriya",
      C: "Hiperqlikemiya, hipoqlikemiya, qlükozuriya",
      D: "Lipuriya və qlükozuriya",
      E: "Qlükozuriya və hiperproteinemiya",
    },
    correctAnswer: "C",
  },
  {
    question: "463. Hipoqlikemiya hansı hallarda yarana bilər?",
    options: {
      A: "Müxtəlif emosiyalar zamanı",
      B: "İnsulinə əks olan hormonların artıq miqdarda hasili zamanı",
      C: "Çoxlu karbohidrat tərkibli qidanın qəbulu zamanı",
      D: "Toksikozlar zamanı",
      E: "Orqanizmə artıq miqdarda insulin yeritdikdə",
    },
    correctAnswer: "E",
  },
  {
    question:
      "464. İnsulyar hiperqlikemiyanın səbəbləri aşağıdakılardan hansılardır?",
    options: {
      A: "Alimentar və neyrogen səbəblər",
      B: "Toksikozlar",
      C: "Travmalar",
      D: "Daxili sekresiya vəzilərinin xəstəlikləri",
      E: "Langerhans adacıqlarının betta-hüceyrələrinin hipofunksiyası",
    },
    correctAnswer: "E",
  },
  {
    question:
      "465. Şəkərli diabet xəstəliyinin əsas simptomlarına hansılar aiddir?",
    options: {
      A: "Qlükozuriya və lipuriya",
      B: "Hiperqlikemiya, qlükozuriya, ketonemiya",
      C: "Lipuriya və asetonuriya",
      D: "Hipoqlikemiya və hipoproteinemiya",
      E: "Ketonemiya və anuriya",
    },
    correctAnswer: "B",
  },
  {
    question: "466. Karbohidrat mübadiləsinin qanda əsas göstəricisi hansıdır?",
    options: {
      A: "Qlükoza",
      B: "Qlikogen",
      C: "Fruktoza",
      D: "Qalaktoza",
      E: "Piroüzüm turşusu",
    },
    correctAnswer: "A",
  },
  {
    question:
      "467. Hansı mühit göstəricisində (pH) ağız suyunun amilazası daha fəaldır?",
    options: {
      A: "pH = 6,8 – 7,2",
      B: "pH = 2,0 – 3,5",
      C: "pH = 4,5 – 5,0",
      D: "pH = 1,0 – 1,5",
      E: "pH = 5,0 – 6,0",
    },
    correctAnswer: "A",
  },
  {
    question:
      "468. Karbohidrat olmayan komponentlərdən qlükozanın sintez prosesi necə adlanır?",
    options: {
      A: "Qlikoliz",
      B: "Qlikogenoliz",
      C: "Hemoliz",
      D: "Hidroliz",
      E: "Qlükoneogenez",
    },
    correctAnswer: "E",
  },
  {
    question: "469. Sellülozanın parçalanması harada gedir?",
    options: {
      A: "Ağız boşluğunda",
      B: "Yoğun bağırsaqda",
      C: "Nazik bağırsaqda",
      D: "Qaraciyərdə",
      E: "Mədədə",
    },
    correctAnswer: "B",
  },
  {
    question: "470. Qanda qlükozanın norma daxilindəki miqdarı hansıdır?",
    options: {
      A: "12,40 mmol/l",
      B: "10,25 mmol/l",
      C: "2,20 mmol/l",
      D: "6,80 mmol/l",
      E: "5,50 mmol/l",
    },
    correctAnswer: "E",
  },
  {
    question: "471. Qanda ümumi şəkərin norma daxilindəki miqdarı hansıdır?",
    options: {
      A: "12,0 mmol/l",
      B: "3,0 mmol/l",
      C: "9,6 mmol/l",
      D: "6,0 mmol/l",
      E: "3,8 mmol/l",
    },
    correctAnswer: "D",
  },
  {
    question:
      "472. Qanda xalis qlükozanı təyin edən üsullara aşağıdakılardan hansı aiddir?",
    options: {
      A: "Yaffe",
      B: "Hagedorn - İensen",
      C: "Timol sınağı",
      D: "Veltman",
      E: "Ortotoluidin",
    },
    correctAnswer: "E",
  },
  {
    question:
      "473. Bu maddələr arasında karbohidrat mübadiləsinə aid olmayan hansıdır?",
    options: {
      A: "Xolesterin",
      B: "Sial turşuları",
      C: "Piroüzüm turşusu",
      D: "Laktat",
      E: "Qlükoza",
    },
    correctAnswer: "A",
  },
  {
    question: "474. Lipidlərin həzmi daha aktiv harada gedir?",
    options: {
      A: "Nazik bağırsaqda",
      B: "Yoğun bağırsaqda",
      C: "Mədədə",
      D: "Qaraciyərdə",
      E: "Ağız boşluğunda",
    },
    correctAnswer: "A",
  },
  {
    question:
      "475. Mədə-bağırsaq traktındakı fermentlərdən hansı lipolitik fermentlərə aiddir?",
    options: {
      A: "Pepsin",
      B: "Sellülaza",
      C: "Ximozin",
      D: "Xolesteraza",
      E: "Aminopeptidaza",
    },
    correctAnswer: "D",
  },
  {
    question:
      "476. Lipolitik fermentlərin maksimal fəallığı hansı mühitdə baş verir?",
    options: {
      A: "Güclü qələvi",
      B: "Güclü turş",
      C: "Zəif turş",
      D: "Zəif qələvi",
      E: "Neytral",
    },
    correctAnswer: "D",
  },
  {
    question:
      "477. Triasilqliserinlərin hidrolizində hansı fermentlər iştirak edir?",
    options: {
      A: "Lipaza",
      B: "Aldolaza",
      C: "Fosforilaza",
      D: "Fosfolipaza",
      E: "Xolesteraza",
    },
    correctAnswer: "A",
  },
  {
    question: "478. Emulqatorlar nədir?",
    options: {
      A: "Lipid hissəciklərinin bir-birinə yapışmasına mane olan maddələr",
      B: "Lipidlərin həll olmasında iştirak edən maddələr",
      C: "Lipidlərin sintezini gücləndirən maddələr",
      D: "Lipidlərin çökməsində iştirak edən maddələr",
      E: "Lipidlərin orqanizmdə toplanmasına səbəb olan maddələr",
    },
    correctAnswer: "A",
  },
  {
    question:
      "479. Lipidlərin həzmi zamanı əmələ gəlmiş suda həll olan məhsullar hansılardır?",
    options: {
      A: "Doymuş yağ turşuları",
      B: "Doymamış yağ turşuları",
      C: "Qliserin",
      D: "Xilomikronlar",
      E: "Xolesterin",
    },
    correctAnswer: "C",
  },
  {
    question: "480. Hüceyrələrdə lipidlərin parçalanma prosesi necə adlanır?",
    options: {
      A: "Lipogenez",
      B: "Lipoliz",
      C: "Qlikogenoliz",
      D: "Hidroliz",
      E: "Qlikoliz",
    },
    correctAnswer: "B",
  },
  {
    question:
      "481. Fosfolipidlərin həzmində iştirak etməyən fermentlər hansılardır?",
    options: {
      A: "Fosfolipaza D",
      B: "Fosfolipaza B",
      C: "Fosforilaza",
      D: "Fosfolipaza A",
      E: "Fosfolipaza C",
    },
    correctAnswer: "C",
  },
  {
    question: "482. Endogen xolesterinin sintezi harada gedir?",
    options: {
      A: "Piylikdə",
      B: "Qaraciyərdə",
      C: "Yoğun bağırsaqda",
      D: "Dalaqda",
      E: "Nazik bağırsaqda",
    },
    correctAnswer: "B",
  },
  {
    question:
      "483. Xolesterin mübadiləsinin pozulması ilə əlaqədar olan xəstəlik hansıdır?",
    options: {
      A: "Ateroskleroz",
      B: "Pankreatit",
      C: "Podaqra",
      D: "Qaraciyərin piy distrofiyası",
      E: "Piylənmə",
    },
    correctAnswer: "A",
  },
  {
    question: "484. Hansı hallarda lipuriya müşahidə olunmur?",
    options: {
      A: "Nefrozlarda",
      B: "Piyin miqdarı sidikdə 2 mq/l-ə qədər olduqda",
      C: "Şəkərli diabetin ağır halında",
      D: "Mədəaltı vəzin şişlərində",
      E: "Ağciyər vərəmində",
    },
    correctAnswer: "B",
  },
  {
    question:
      "485. Yağ turşuları, xolesterin hansı maddələr vasitəsilə bağırsağın selikli qişasına sorulur?",
    options: {
      A: "Cüt öd turşuları",
      B: "Xilomikronlar",
      C: "Yüksək qatılıqlı lipoproteidlər",
      D: "Xolesterin efirləri",
      E: "Aşağı qatılıqlı lipoproteidlər",
    },
    correctAnswer: "A",
  },
  {
    question: "486. Hansı səbəb piylənmə üçün xarakterik deyil?",
    options: {
      A: "Enerji mübadiləsinin pozulması",
      B: "Hipofizin hipofunksiyası",
      C: "Hiperdinamiya",
      D: "İrsi faktorlar",
      E: "Cinsi hormonların hipofunksiyası",
    },
    correctAnswer: "C",
  },
  {
    question: "487. Qaraciyərin piy distrofiyası nə ilə xarakterizə olunur?",
    options: {
      A: "Triasilqliserinlərin toplanması ilə",
      B: "Xolesterinin toplanması ilə",
      C: "Metioninin artıq miqdarı ilə",
      D: "Fosfolipidlərin güclü sintezi ilə",
      E: "Xolinin artıq miqdarı ilə",
    },
    correctAnswer: "A",
  },
  {
    question:
      "488. Qan serumunda fosfolipidlərin təyini hansı maddələrin miqdarının təyininə əsaslanır?",
    options: {
      A: "Yağ turşularının",
      B: "Metioninin",
      C: "Lipoid fosforun",
      D: "Qliserinin",
      E: "Xolinin",
    },
    correctAnswer: "C",
  },
  {
    question:
      "489. Lipoproteidlər qrupuna aid olmayan birləşmələr hansılardır?",
    options: {
      A: "Xilomikronlar",
      B: "Yüksək sıxlıqlı lipoproteidlər",
      C: "Fosfoproteidlər",
      D: "Aşağı sıxlıqlı lipoproteidlər",
      E: "Daha aşağı sıxlıqlı lipoproteidlər",
    },
    correctAnswer: "C",
  },
  {
    question:
      "490. Aşağısıxlıqlı lipoproteidlər hansı funksiyanı yerinə yetirirlər?",
    options: {
      A: "Xolesterini orqanlara daşıyırlar",
      B: "Hüceyrələrdən xolesterinin artıq miqdarını xaric edirlər",
      C: "Fosfolipidlərin sintezini gücləndirirlər",
      D: "Lipidləri əvvəl limfaya, sonra qana keçirirlər",
      E: "Triasilqliserinlərin sintezini gücləndirirlər",
    },
    correctAnswer: "A",
  },
  {
    question: "491. Zülalların həzmi harada daha aktiv gedir?",
    options: {
      A: "Nazik bağırsaqda",
      B: "Mədədə",
      C: "Ağız boşluğunda",
      D: "Qaraciyərdə",
      E: "Yoğun bağırsaqda",
    },
    correctAnswer: "A",
  },
  {
    question:
      "492. Mədədə zülallar hansı fermentlərin təsirindən parçalanırlar?",
    options: {
      A: "Pepsinin",
      B: "Tripsinin",
      C: "Dipeptidazaların",
      D: "Lipazanın",
      E: "Aminopeptidazaların",
    },
    correctAnswer: "A",
  },
  {
    question:
      "493. Nazik bağırsaqda zülalların parçalanmasını katalizə edən fermentlərə hansılar aiddir?",
    options: {
      A: "Ximotripsin",
      B: "Ximozin",
      C: "Rennin",
      D: "Laktaza",
      E: "Amilaza",
    },
    correctAnswer: "A",
  },
  {
    question:
      "494. Yoğun bağırsaqda zülalların çürüməsi zamanı əmələ gələn zəhərli maddə hansıdır?",
    options: {
      A: "Rennin",
      B: "Prolin",
      C: "Qlutamin",
      D: "Lizin",
      E: "Kadaverin",
    },
    correctAnswer: "E",
  },
  {
    question:
      "495. Albuminlər hansı maddələrin zərərsizləşməsində və daşınmasında iştirak edirlər?",
    options: {
      A: "Krezolun",
      B: "Bilirubinin",
      C: "Skatolun",
      D: "Fenolun",
      E: "Kadaverinin",
    },
    correctAnswer: "B",
  },
  {
    question: "496. Albuminlərin əsas əmələ gəlməsi harada baş verir?",
    options: {
      A: "Yoğun bağırsaqda",
      B: "Əzələlərdə",
      C: "Nazik bağırsaqda",
      D: "Qaraciyərdə",
      E: "Dalaqda",
    },
    correctAnswer: "D",
  },
  {
    question: "497. Anticismlər hansı fraksiyanın tərkibinə daxildir?",
    options: {
      A: "Alfa2 - qlobulin",
      B: "Alfa1 - qlobulin",
      C: "Betta - qlobulin",
      D: "Albumin",
      E: "Qamma (γ) - qlobulin",
    },
    correctAnswer: "E",
  },
  {
    question: "498. Seruloplazmin zülalı hansı xassəyə malikdir?",
    options: {
      A: "Retinolu daşımaq",
      B: "Dəmiri birləşdirib qanla daşımaq",
      C: "Hemoqlobulinlə birləşmək",
      D: "Tiroksini daşımaq",
      E: "Misi birləşdirib qanla daşımaq",
    },
    correctAnswer: "E",
  },
  {
    question: "499. Ammonyakın zərərsizləşmə yolunu göstərin.",
    options: {
      A: "Dezaminləşmə",
      B: "Betta-oksidləşmə",
      C: "Karbamidin sintezi",
      D: "Yenidən aminləşmə",
      E: "Dekarboksizləşmə",
    },
    correctAnswer: "C",
  },
  {
    question:
      "500. Zülal mübadiləsinin vəziyyətini qiymətləndirmək üçün hansı maddələrin miqdarını təyin edirlər?",
    options: {
      A: "Betta-lipoproteidlərin",
      B: "Sial turşularının",
      C: "Süd turşusunun",
      D: "Zülal fraksiyalarının",
      E: "Piroüzüm turşusunun",
    },
    correctAnswer: "D",
  },

  {
    question:
      "501. Qanda və sidikdə kreatininin təyini hansı rəngli reaksiyanın köməyi ilə aparılır?",
    options: {
      A: "Rappoport-Eyxhorn",
      B: "Yaffe",
      C: "Diasetilmonooksim",
      D: "Asetilaseton",
      E: "Ortotoluidin",
    },
    correctAnswer: "B",
  },
  {
    question: "502. Azotemiya nəyə deyilir?",
    options: {
      A: "Qanda azotun artmasına",
      B: "Qanda aminturşuların artmasına",
      C: "Qanda zülalın azalmasına",
      D: "Qanda qalıq azotunun artmasına",
      E: "Qanda zülalın artmasına",
    },
    correctAnswer: "D",
  },
  {
    question: "503. Purin azot əsaslarının son məhsullarına hansılar aiddir?",
    options: {
      A: "Karbon qazı",
      B: "Sidik cövhəri",
      C: "İndikan",
      D: "Ammonyak",
      E: "Sidik turşusu",
    },
    correctAnswer: "E",
  },
  {
    question: "504. Nukleoproteid mübadiləsinin pozulmasına hansılar aiddir?",
    options: {
      A: "Mexaniki sarılıq",
      B: "Hemoqlobinpatiya",
      C: "Hipourikemiya",
      D: "Podaqra",
      E: "Porfiriyalar",
    },
    correctAnswer: "D",
  },
  {
    question: "505. Bilirubinin albuminlə birləşməsi necə adlanır?",
    options: {
      A: "Bilirubin-qlükuronid",
      B: "Bilirubin-diqlükuronid",
      C: "Urobilin",
      D: "Birləşmiş bilirubin",
      E: "Sərbəst bilirubin",
    },
    correctAnswer: "E",
  },
  {
    question: "506. Birləşmiş bilirubin nəyə deyilir?",
    options: {
      A: "Bilirubinin sterkobilin ilə birləşməsinə",
      B: "Bilirubinin verdoqlibinlə birləşməsinə",
      C: "Bilirubinin biliverdinlə birləşməsinə",
      D: "Bilirubinin qlükuron turşusu ilə birləşməsinə",
      E: "Bilirubinin albuminlə birləşməsinə",
    },
    correctAnswer: "D",
  },
  {
    question: "507. Mexaniki sarılığın səbəbləri hansılardır?",
    options: {
      A: "Uyğun gəlməyən qanın köçürülməsi",
      B: "Ödün 12-barmaq bağırsağa axımının pozulması",
      C: "Qaraciyər sirrozu",
      D: "Eritrositlərin yüksək hemolizi",
      E: "Toksikozlar",
    },
    correctAnswer: "B",
  },
  {
    question: "508. Parenximatoz sarılığın səbəbləri hansılardır?",
    options: {
      A: "Uyğun gəlməyən qanın köçürülməsi",
      B: "Öd yollarının tutulması",
      C: "Qaraciyər hüceyrələrinin zədələnməsi",
      D: "Hemoqlobinpatiyalar",
      E: "Yanıqlar",
    },
    correctAnswer: "C",
  },
  {
    question: "509. Hormonların bioloji əhəmiyyəti nədən ibarətdir?",
    options: {
      A: "Həzm proseslərinə iştirakından",
      B: "Müxtəlif proseslərə tənzimedici təsirdən",
      C: "Vitaminlərə təsirindən",
      D: "Orqanizmdə ehtiyata toplanmasından",
      E: "Genetik informasiyanın ötürməsindən",
    },
    correctAnswer: "B",
  },
  {
    question: "510. Hormonların təsiri nə ilə xarakterizə olunur?",
    options: {
      A: "Yerli təsiri ilə",
      B: "Yüksək seçicilik və spesifikliyi ilə",
      C: "Aşağı spesifikliyi ilə",
      D: "Eyni təsir mexanizmi ilə",
      E: "Aşağı bioloji aktivliyi",
    },
    correctAnswer: "B",
  },
  {
    question:
      "511. Hormonlar arasında hansı vəzin hormonları mərkəzi yer tutur?",
    options: {
      A: "Hipofiz",
      B: "Böyrəküstü",
      C: "Qalxanabənzər",
      D: "Epifiz",
      E: "Mədəaltı",
    },
    correctAnswer: "A",
  },
  {
    question: "512. Cinsi hormonlara aid olmayanlar hansılardır?",
    options: {
      A: "Estradiol",
      B: "Timozin",
      C: "Estriol",
      D: "Androsteron",
      E: "Testosteron",
    },
    correctAnswer: "B",
  },
  {
    question:
      "513. Hansı parçalanma məhsulları bütün mübadilə proseslərinin qarşılıqlı əlaqəsini yaradır?",
    options: {
      A: "Sidik tuşusu",
      B: "Su, CO2, NH3",
      C: "Aminturşular",
      D: "Monosaxaridlər",
      E: "Süd turşusu",
    },
    correctAnswer: "B",
  },
  {
    question: "514. Hansı proses qaraciyərdə karbohidrat mübadiləsinə aiddir?",
    options: {
      A: "Qlükoneogenez",
      B: "Xolesterinin sintezi",
      C: "Keton cisimciklərinin əmələ gəlməsi",
      D: "Plazma fosfolipidlərinin əmələ gəlməsi",
      E: "Öd turşularının sintezi",
    },
    correctAnswer: "A",
  },
  {
    question:
      "515. Aşağıdakılardan hansı qaraciyərin zülal mübadiləsindəki iştirakını göstərmir?",
    options: {
      A: "Fibrinogenin, protrombinin sintezi",
      B: "Xolesterinin sintezi",
      C: "Zülalların dezaminləşməsi, yenidən aminləşməsi",
      D: "Antitoksiki rolu",
      E: "Sidik cövhərinin sintezi",
    },
    correctAnswer: "B",
  },
  {
    question:
      "516. Aşağıdakılardan hansı qaraciyərin karbohidrat mübadiləsindəki iştirakını göstərmir?",
    options: {
      A: "Qlükoneogenz",
      B: "Qlikogenin sinrezi və parçalanması",
      C: "Qanda insulinin tənzimlənməsi",
      D: "Karbamidin sintezi",
      E: "Monosaxaridlərin qarşılıqlı çevrilməsi",
    },
    correctAnswer: "D",
  },
  {
    question: "517. Homeostaz nə deməkdir?",
    options: {
      A: "Orqanizmin daxili mühitinin sabitliyidir",
      B: "Qan laxtasının lizisə uğramasıdır",
      C: "Qan laxtasının yığılmasıdır",
      D: "Qan laxtasının əmələ gəlməsidir",
      E: "Fizioloji proseslərin cəmi deməkdir",
    },
    correctAnswer: "A",
  },
  {
    question: "518. Hiponatriumemiya hansı hallarda müşahidə olunur?",
    options: {
      A: "Böyrək büzüşməsində",
      B: "Hüceyrələrin yüksək parçalanmasında",
      C: "Aldosteronun hipersekresiyası zamanı",
      D: "Qusma, ishal zamanı",
      E: "Eritrositlərin hemolizi zamanı",
    },
    correctAnswer: "D",
  },
  {
    question:
      "519. Su insan orqanizminin kütləsinin neçə hissəsini təşkil edir?",
    options: {
      A: "1/5",
      B: "4/5",
      C: "2/3",
      D: "2/5",
      E: "1/3",
    },
    correctAnswer: "C",
  },
  {
    question: "520. Hansı toxumada suyun miqdarı nisbətən azdır?",
    options: {
      A: "Qaraciyər",
      B: "Qan",
      C: "Sinir",
      D: "Birləşdirici",
      E: "Əzələ",
    },
    correctAnswer: "D",
  },
  {
    question: "521. Makroelementlər hansılardır?",
    options: {
      A: "Zn, J2, Co",
      B: "Ca, P, Na",
      C: "Fe, Mg, Cu",
      D: "Mg, J2, Fe",
      E: "J2, Zn, Cu",
    },
    correctAnswer: "B",
  },
  {
    question: "522. Mikroelementlər hansılardır?",
    options: {
      A: "Fe, J2",
      B: "Ca, P",
      C: "K, Cl",
      D: "Na, Cl",
      E: "Na, K",
    },
    correctAnswer: "A",
  },
  {
    question: "523. İnsan orqanizmində kobaltın əhəmiyyəti nədən ibarətdir?",
    options: {
      A: "Mioqlobulinin tərkibinə daxildir",
      B: "Qanın əmələ gəlməsində iştirak edir",
      C: "Bağırsaqda sorulma prosesini yaxşılaşdırır",
      D: "İmmunoloji davamlılığı yüksəldir",
      E: "Karbohidrat mübadiləsində iştirak edir",
    },
    correctAnswer: "C",
  },
  {
    question: "524. pH neçə olduqda mühit qələvi sayılır?",
    options: {
      A: "6,8 olduqda",
      B: "7-14-ə qədər olduqda",
      C: "5,5-6,5-ə qədər olduqda",
      D: "1,5-5-ə qədər olduqda",
      E: "3,5-4,5-ə qədər olduqda",
    },
    correctAnswer: "B",
  },
  {
    question: "525. Qanın pH-ı normada neçə olmalıdır?",
    options: {
      A: "7,36 – 7,40",
      B: "7,5 – 8,0",
      C: "6,5 – 7,0",
      D: "8,0 – 8,5",
      E: "5,50 – 6,5",
    },
    correctAnswer: "A",
  },
  {
    question: "526. Su-duz mübadiləsini tənzim edən hormonlar hansılardır?",
    options: {
      A: "Qlükokortikoidlər, mineralokortikoidlər",
      B: "Vazopressin, aldosteron",
      C: "Androgen, estrogen",
      D: "Adrenalin, noradrenalin",
      E: "İnsulin, qlükaqon",
    },
    correctAnswer: "B",
  },
  {
    question: "527. Maqnezium insan orqanizmində hansı rolu oynayır?",
    options: {
      A: "Eritrositlərin tərkibinə daxildir",
      B: "Əzələ zülallarının sintezində iştirak edir",
      C: "Cinsi inkişafa təsir göstərir",
      D: "Sinir-əzələ oyanıqlığını tənzimləyir",
      E: "Hormonların tərkibinə daxildir",
    },
    correctAnswer: "D",
  },
  {
    question: "528. Qanın laxtalanmasında neçə plazma amili iştirak edir?",
    options: {
      A: "10",
      B: "8",
      C: "3",
      D: "9",
      E: "13",
    },
    correctAnswer: "E",
  },
  {
    question:
      "529. Hansı plazma amili laxtalanmanın bütün keçid dövrlərində iştirak edir?",
    options: {
      A: "Fibrinogen",
      B: "Protrombin",
      C: "Prokonvertin",
      D: "Prouer-Stüart amili",
      E: "Ca ionları",
    },
    correctAnswer: "E",
  },
  {
    question:
      "530. Trombositar amil olan serotonin qanın laxtalanmasında hansı funksiyanı yerinə yetirir?",
    options: {
      A: "Trombinin əmələ gəlməsini sürətləndirir",
      B: "Damar daraldıcı və damar divarlarının keçiricilik qabiliyyətini azaldır",
      C: "Fibrinogenin fibrinə çevrilməsini sürətləndirir",
      D: "Toxuma tromboplastininin təsirini aktivləşdirir",
      E: "Qanın trombokinazasını əmələ gətirir",
    },
    correctAnswer: "B",
  },
  {
    question: "531. Heparin qanın laxtalanmasında nə kimi rol oynayır?",
    options: {
      A: "Trombinin əmələ gəlməsini sürətləndirir",
      B: "Fibrinogenin fibrinə çevrilməsini sürətləndirir",
      C: "Trombokinazanın əmələ gəlməsində iştirak edir",
      D: "Qan laxtasının yığılmasında iştirak edir",
      E: "Trombinin əmələ gəlməsini inaktivləşdirir",
    },
    correctAnswer: "E",
  },
  {
    question: "532. Retraksiya prosesi nəticəsində nə baş verir?",
    options: {
      A: "Qan damarlarının reflektor sıxılması baş verir",
      B: "Damar divarının keçiricilik qabiliyyəti zəifləyir",
      C: "Əmələ gəlmiş qan laxtası yığılır",
      D: "Trombositlər aqreqatlar əmələ gətirir",
      E: "Qan laxtası həll olur",
    },
    correctAnswer: "C",
  },
  {
    question: "533. Bunlardan hansı mikroskopun optik hissəsinə aiddir?",
    options: {
      A: "Makrovint",
      B: "Əşya stolu",
      C: "Güzgü",
      D: "Mikrovint",
      E: "Tubus",
    },
    correctAnswer: "C",
  },
  {
    question: "534. Mikroskopun mexaniki hissəsinə nə aiddir?",
    options: {
      A: "Obyektiv",
      B: "Kondensorun linzası",
      C: "Güzgü",
      D: "Okulyar",
      E: "Tubus",
    },
    correctAnswer: "E",
  },
  {
    question: "535. Mikroskopun böyüdücü sistemi nədən ibarətdir?",
    options: {
      A: "Tubus",
      B: "Okulyar",
      C: "Mikrovint",
      D: "Diafraqma",
      E: "Makrovint",
    },
    correctAnswer: "B",
  },
  {
    question: "536. İndikatorlu qidalı mühitlərdən nə üçün istifadə olunur?",
    options: {
      A: "Materialın göndərilməsində",
      B: "Kulturanın saxlanmasında",
      C: "Mikroorqanizmin növünün identifikasiyasında",
      D: "Təmiz kulturanın alınmasında",
      E: "Təmiz kulturanın toplanmasında",
    },
    correctAnswer: "C",
  },
  {
    question:
      "537. E.Cenner hansı xəstəliyə qarşı peyvənd üsulunu kəşf etmişdir?",
    options: {
      A: "Vəba",
      B: "Qara yara",
      C: "Taun",
      D: "Quduzluq",
      E: "Çiçək",
    },
    correctAnswer: "E",
  },
  {
    question:
      "538. Bu xəstəliklərdən hansının törədicisini R.Kox kəşf etmişdir?",
    options: {
      A: "Taun",
      B: "Göy öskürək",
      C: "Quduzluq",
      D: "Difteriya",
      E: "Vərəm",
    },
    correctAnswer: "E",
  },
  {
    question: "539. Aşağıdakılardan hansı şarabənzər formadadır?",
    options: {
      A: "Sarsınlər",
      B: "Vibrionlar",
      C: "Diplobakteriyalar",
      D: "Basillər",
      E: "Spirillər",
    },
    correctAnswer: "A",
  },
  {
    question: "540. Vibrionların quruluş forması necədir?",
    options: {
      A: "Kokşəkilli",
      B: "Bir ucu qalınlaşmış",
      C: "Vergülvari",
      D: "Çöpvari",
      E: "Sancaqşəkilli",
    },
    correctAnswer: "C",
  },
  {
    question: "541. Bakteriya hüceyrəsində sporun vəzifəsi nədir?",
    options: {
      A: "İfrazat üzvüdür",
      B: "Çoxalma xarakteri daşıyır",
      C: "Hərəkət üzvüdür",
      D: "Həzm prosesində iştirak edir",
      E: "Uzun müddət mikrobu müdafiə edir",
    },
    correctAnswer: "E",
  },
  {
    question: "542. Tənəffüsünə görə mikroorqanizmlər hansı qruplara ayrılır?",
    options: {
      A: "Aftotroflar",
      B: "Hemotroflar",
      C: "Heterotroflar",
      D: "Fototroflar",
      E: "Aeroblar",
    },
    correctAnswer: "E",
  },
  {
    question:
      "543. Bunlardan hansı qida maddələrinin mənimsənilməsi prosesidir?",
    options: {
      A: "Simbioz",
      B: "Metabioz",
      C: "Assimliyasiya",
      D: "Dissimilyasiya",
      E: "Antaqonizm",
    },
    correctAnswer: "C",
  },
  {
    question: "544. Göbələklərdə sporlar hansı vəzifəni daşıyır?",
    options: {
      A: "Çoxalma",
      B: "Qorunma",
      C: "Tənəffüs",
      D: "Bölünmə",
      E: "Qidalanma",
    },
    correctAnswer: "A",
  },
  {
    question: "545. Bir spordan neçə bakteriya hüceyrəsi əmələ gəlir?",
    options: {
      A: "Bir",
      B: "İki",
      C: "Yeddi",
      D: "Dörd",
      E: "Altı",
    },
    correctAnswer: "A",
  },
  {
    question: "546. Göstərilən qruplardan hansılarına göbələklər aiddir?",
    options: {
      A: "Spiroxetlər",
      B: "İbtidailər",
      C: "Ali bitkilər",
      D: "Viruslar",
      E: "İbtidai bitkilər",
    },
    correctAnswer: "E",
  },
  {
    question: "547. Mikroorqanizmlər arasında əlaqə forması hansıdır?",
    options: {
      A: "Antaqonizm",
      B: "Polimorfizm",
      C: "Metabolizm",
      D: "Katabolizm",
      E: "Anabolizm",
    },
    correctAnswer: "A",
  },
  {
    question: "548. Bakteriya hüceyrəsində nüvənin hansı funksiyası var?",
    options: {
      A: "Tənəffüs prosesində iştirak edir",
      B: "İrsi məlumatları saxlayır",
      C: "Həzm prosesində iştirak edir",
      D: "Müdafiə edir",
      E: "Hüceyrəyə forma verir",
    },
    correctAnswer: "B",
  },
  {
    question: "rəng Qram mənfi bakeriyalar nə rəngdə olur?",
    options: {
      A: "Bənövşəyi rəng",
      B: "Göy rəng",
      C: "Qırmızı moruğu rəng",
      D: "Qəhvəyi rəng",
      E: "Qızılı rəng",
    },
    correctAnswer: "C",
  },
  {
    question: "550. Qram mənfi bakteriyalar hansı boyaqla rənglənir?",
    options: {
      A: "Lyuqol məhlulu ilə",
      B: "Metilen abısı ilə",
      C: "Vezuvinlə",
      D: "Fuksinlə",
      E: "Gensian violetlə",
    },
    correctAnswer: "D",
  },
  {
    question: "551. Qram müsbət bakteriyalar nə rəngdə olur?",
    options: {
      A: "Qızılı rəng",
      B: "Qəhvəyi rəng",
      C: "Qırmızı moruğu",
      D: "Bənövşəyi rəng",
      E: "Göy rəng",
    },
    correctAnswer: "D",
  },
  {
    question: "552. Qram müsbət bakteriyalar hansı boyaqla rənglənir?",
    options: {
      A: "Gensian violetlə",
      B: "Neyser abısı ilə",
      C: "Lyuqol məhlulu ilə",
      D: "Fuksinlə",
      E: "Metilen göyü ilə",
    },
    correctAnswer: "A",
  },
  {
    question:
      "553. Kapsulanı aşkar etmək üçün ən çox hansı boyama üsulundan istifadə olunur?",
    options: {
      A: "Romanovski-Gimza",
      B: "Ojeşko",
      C: "Sil-Nilsen",
      D: "Burri-Hins",
      E: "Qram",
    },
    correctAnswer: "D",
  },
  {
    question: "554. Turşuya davamlı bakteriyalar hansı üsulla boyanır?",
    options: {
      A: "Sil-Nilsen",
      B: "Ojeşko",
      C: "Burri-Hins",
      D: "Romanovski-Gimza",
      E: "Qram",
    },
    correctAnswer: "A",
  },
  {
    question:
      "555. Əksər bakteriyalar üçün hansı diferensial-diaqnostik boyama üsulundan istifadə edilir?",
    options: {
      A: "Qram",
      B: "Burri-Hins",
      C: "Ojeşko",
      D: "Sil-Nilsen",
      E: "Romanovski-Qimza",
    },
    correctAnswer: "A",
  },
  {
    question:
      "556. Bakteriyaların hərəkətliliyini təyin etmək üçün hansı üsuldan istifadə edilir?",
    options: {
      A: "Asılan damla",
      B: "Kağız disklər",
      C: "Seroloji",
      D: "Driqalski",
      E: "Appelman",
    },
    correctAnswer: "A",
  },
  {
    question: "557. Pasterizasiya hansı temperaturda necə müddətə aparılır?",
    options: {
      A: "100°C-də; 60 dəqiqə",
      B: "56-58°C-də; 1 gün",
      C: "30°C-də; 20 dəqiqə",
      D: "65-70°C-də; 1 saat",
      E: "60°C-də; 5 dəqiqə",
    },
    correctAnswer: "D",
  },
  {
    question:
      "558. Təzyiq altında buxarla sterilizasiya hansı aparatda aparılır?",
    options: {
      A: "Krotov aparatında",
      B: "Paster peçində",
      C: "Avtoklavda",
      D: "Anaerostatda",
      E: "Termostatda",
    },
    correctAnswer: "C",
  },
  {
    question: "559. Qabların sterilizasiyası hansı aparatda aparılır?",
    options: {
      A: "Krotov aparatında",
      B: "Paster peçində",
      C: "Termostatda",
      D: "Avtoklavda",
      E: "Anaerostatda",
    },
    correctAnswer: "B",
  },
  {
    question:
      "560. Bakteriyaların sporlu formalarının məhv edilməsi hansı aparatda aparılır?",
    options: {
      A: "Avtoklavda 1,5 atmosfer təzyiqində",
      B: "Paster peçində",
      C: "Kox aparatında",
      D: "Zeyts süzgəcində",
      E: "Termostatda",
    },
    correctAnswer: "A",
  },
  {
    question: "561. Seroloji reaksiya nədir?",
    options: {
      A: "Selektiv mühitdə mikroorqanizmin böyüməsi",
      B: "Faqositoz",
      C: "Bakteriya hüceyrəsində cinsi mübadilə",
      D: "Antigenlə anticismin qarşılıqlı təsiri",
      E: "Bakteriofaqın təsiri ilə bakteriyanın lizisi",
    },
    correctAnswer: "D",
  },
  {
    question:
      "562. Komplementin birləşmə reaksiyasında müsbət nəticə hansıdır?",
    options: {
      A: "Çətir şəklində çökmə",
      B: "İki mayenin sərhədində halqa",
      C: "Düymə şəklində çökmə",
      D: "Laka oxşar qan (hemoliz)",
      E: "Eritrositlərin çökməsi (hemolizin dayanması)",
    },
    correctAnswer: "E",
  },
  {
    question:
      "563. Mikroorqanizmlərin antibiotiklərə həssaslığını təyin etmək üçün hansı üsul tətbiq edilir?",
    options: {
      A: "Appelman",
      B: "Kağız disklər",
      C: "Qratsiya",
      D: "Seroloji",
      E: "Driqalski",
    },
    correctAnswer: "B",
  },
  {
    question: "564. Aqqlütinasiya reaksiyasında müsbət nəticə hansıdır?",
    options: {
      A: "Laka oxşar qan",
      B: "Bulanıq halqanın alınması",
      C: "Eritrositlərin çökməsi",
      D: "Çöküntünün əmələ gəlməsi",
      E: "Çöküntünün düymə şəklində alınması",
    },
    correctAnswer: "D",
  },
  {
    question: "565. Bu xüsusiyyətlərdən hansı antigenə məxsusdur?",
    options: {
      A: "Toksigenlik",
      B: "Spesifiklik",
      C: "Daxil olduğu orqanizm üçün yad olmaq",
      D: "Patogenlik",
      E: "Virulentlik",
    },
    correctAnswer: "C",
  },
  {
    question: "566. Anticisim nədir?",
    options: {
      A: "Lipopolisaxariddir",
      B: "Mineral maddədir",
      C: "Zülaldır",
      D: "Yağdır",
      E: "Karbohidratdır",
    },
    correctAnswer: "C",
  },
  {
    question:
      "567. Diferensial-diaqnostik qidalı mühitlərdən nə məqsədlə istifadə olunur?",
    options: {
      A: "Bakteriyaların diri halda öyrənilməsində",
      B: "Antibiotiklərin həssaslığının təyinində",
      C: "Faqotipin təyinində",
      D: "Müayinə materialının göndərilməsində",
      E: "Təmiz kulturanın alınmasında",
    },
    correctAnswer: "E",
  },
  {
    question:
      "568. Sınaq şüşəsində mikroblu duru materialdan maye qidalı mühitə əkin nə ilə aparılır?",
    options: {
      A: "İynə ilə",
      B: "Tamponla",
      C: "Kolli qələmi ilə",
      D: "Steril pipetka ilə",
      E: "Şpatellə",
    },
    correctAnswer: "D",
  },
  {
    question: "569. Çəp aqarda əkin nə ilə aparılır?",
    options: {
      A: "İynə ilə",
      B: "Pipetka ilə",
      C: "İlgəklə",
      D: "Şpatellə",
      E: "Tamponla",
    },
    correctAnswer: "C",
  },
  {
    question: "570. Düz aqarda əkin nə ilə aparılır?",
    options: {
      A: "Şpatellə",
      B: "İynələmə yolu ilə",
      C: "Pipetka ilə",
      D: "İlgəklə",
      E: "Tamponla",
    },
    correctAnswer: "B",
  },
  {
    question:
      "571. Yaşadığı mühitdən asılı olaraq bakteriya hüceyrəsinin ölçüsünün və formasının dəyişməsinə nə deyilir?",
    options: {
      A: "Metobolizim",
      B: "Polimorfizm",
      C: "Simbioz",
      D: "Antaqonizm",
      E: "Metobioz",
    },
    correctAnswer: "B",
  },
  {
    question: "572. S-formalı koloniyaların xüsusiyyətləri hansıdır?",
    options: {
      A: "Xırda, ulduz şəklində",
      B: "Xırda, uzun, çöp şəklində",
      C: "Hamar, dairəvi, parlaq",
      D: "Girintili, çıxıntılı, selikli",
      E: "Bulanıq, qabarıq",
    },
    correctAnswer: "C",
  },
  {
    question: "573. Orta hərarəti sevən mikroblar necə adlanır?",
    options: {
      A: "Termofil",
      B: "Psixrofil",
      C: "Maksimal",
      D: "Steril",
      E: "Mezofil",
    },
    correctAnswer: "E",
  },
  {
    question: "574. İsti sevən mikroblar necə adlanır?",
    options: {
      A: "Steril",
      B: "Psixrofil",
      C: "Mezofil",
      D: "Termofil",
      E: "Minimal",
    },
    correctAnswer: "D",
  },
  {
    question: "575. Soyuq sevən mikroblar necə adlanır?",
    options: {
      A: "Mezofil",
      B: "Optimal",
      C: "Steril",
      D: "Termofil",
      E: "Psixrofil",
    },
    correctAnswer: "E",
  },
  {
    question: "576. Virulentlik nədir?",
    options: {
      A: "Törədicinin yayılmasına orqanizmin müdafiə reaksiyasıdır",
      B: "Mikrobun həssaslığıdır",
      C: "Mikrobun patogenlik dərəcəsidir",
      D: "İnsanda xəstəlik yaratmaq qabiliyyətidir",
      E: "Zəif adamlarda xəstəlik törətmədir",
    },
    correctAnswer: "C",
  },
  {
    question: "577. Anatoksinlər nədən hazırlanır?",
    options: {
      A: "Donor qanından",
      B: "İmmunoqlobulinlərdən",
      C: "Antitoksik serumlardan",
      D: "Mikrob toksinindən",
      E: "Mikroblardan",
    },
    correctAnswer: "D",
  },
  {
    question: "578. Bunlardan hansı immunitetin spesifik amillərinə aiddir?",
    options: {
      A: "Lizosim",
      B: "Dəri örtüyü",
      C: "Faqositoz",
      D: "İmmunoqlobulinlər",
      E: "Komplement",
    },
    correctAnswer: "D",
  },
  {
    question: "579. Lizosim maddəsi harada müşahidə olunur?",
    options: {
      A: "Tər vəzisində",
      B: "Zərdabda",
      C: "Göz yaşında",
      D: "Leykositlərin tərkibində",
      E: "Toksinlərin tərkibində",
    },
    correctAnswer: "C",
  },
  {
    question: "580. Qeyri spesifik müdafiənin hüceyrə amilinə nə aiddir?",
    options: {
      A: "Faqositoz",
      B: "Lizosim",
      C: "Selikli qişalar",
      D: "İmmunoqlobulinlər",
      E: "Dəri",
    },
    correctAnswer: "A",
  },
  {
    question: "581. Qalın qan damlası necə fiksasiya olunur?",
    options: {
      A: "Alov üzərində",
      B: "Asetonda",
      C: "Sülfat turşusu ilə",
      D: "Romanovski-Gimza boyağı ilə",
      E: "Fiksasiyasız havada tozdan qorunma",
    },
    correctAnswer: "E",
  },
  {
    question:
      "582. Hansı xəstəliklərdə qeyri steril immunitet müşahidə olunur?",
    options: {
      A: "Vərəm",
      B: "Taun",
      C: "Qrip",
      D: "Qızılça",
      E: "Vəba",
    },
    correctAnswer: "A",
  },
  {
    question: "583. Vaksin vurmaqla immunitetin hansı növünü yaratmaq olar?",
    options: {
      A: "Süni fəal",
      B: "Təbii (növ)",
      C: "Süni passiv",
      D: "Təbii qazanılmış",
      E: "Qeyri-steril immunitet",
    },
    correctAnswer: "A",
  },
  {
    question:
      "584. Virulentliyi zəiflədilmiş mikroblardan hazırlanmış vaksinlər necə adlanır?",
    options: {
      A: "Diri",
      B: "Ölü",
      C: "Kimyəvi",
      D: "Autovaksin",
      E: "Anatoksin",
    },
    correctAnswer: "A",
  },
  {
    question:
      "585. Mikrobun ekzotoksinini formalin və isti ilə zərərsizləşdirməklə hansı vaksin növü alınıb?",
    options: {
      A: "Polivaksin",
      B: "Kimyəvi",
      C: "Autovaksin",
      D: "Anatoksin",
      E: "Diri",
    },
    correctAnswer: "D",
  },
  {
    question: "586. Stafilokoklar yaxmada necə yerləşir?",
    options: {
      A: "Topa halında",
      B: "Tək-tək",
      C: "Cüt-cüt",
      D: "Qısa zəncir",
      E: "Zəncirvari",
    },
    correctAnswer: "A",
  },
  {
    question:
      "587. Stafilokok infeksiyalarının müayinəsi üçün götürülən irin hansı mühitə əkilir?",
    options: {
      A: "Yumurta-sarısı duz aqarı",
      B: "Kozein kömür aqarı",
      C: "Leffler",
      D: "Ressel mühiti",
      E: "Klauberq",
    },
    correctAnswer: "A",
  },
  {
    question: "588. Düz aqarda əkin nə məqsədlə aparılır?",
    options: {
      A: "Aerob bakteriyaları əkmək üçün",
      B: "Təmiz mikrob əldə etmək",
      C: "Morfoloji xüsusiyyətləri öyrənmək üçün",
      D: "Jelatini nə formada əritdiyini müşahidə etmək",
      E: "Bakteriyaların antibiotiklərə həssaslığını öyrənmək üçün",
    },
    correctAnswer: "D",
  },
  {
    question: "589. Stafilokok infeksiyaları zamanı müayinə üçün nə götürülür?",
    options: {
      A: "Su",
      B: "Onurğa beyni mayesi",
      C: "Plevra mayesi",
      D: "Burun-udlaqdan selik",
      E: "İrin",
    },
    correctAnswer: "E",
  },
  {
    question:
      "590. Kokların hansı növünü ayırmaq üçün plazmokoaqulyasiya reaksiyası qoyulur?",
    options: {
      A: "Qonokok",
      B: "Stafilokok",
      C: "Pnevmokok",
      D: "Streptokok",
      E: "Meninqokok",
    },
    correctAnswer: "B",
  },
  {
    question: "591. Morfoloji quruluşuna görə streptokoklar nə formadadır?",
    options: {
      A: "Şara bənzərdir",
      B: "Lanset şəkilli diplokokdur",
      C: "Paxlaya oxşar diplokokdur",
      D: "Sarsindir",
      E: "Tetrakokdur",
    },
    correctAnswer: "A",
  },
  {
    question: "592. Streptokoklar yaxmada necə yerləşir?",
    options: {
      A: "Cüt-cüt",
      B: "Topa halında",
      C: "Şam alovuna bənzər",
      D: "Üzüm salxımı formasında",
      E: "Qısa və uzun zəncir formasında",
    },
    correctAnswer: "E",
  },
  {
    question: "593. Streptokok infeksiyası zamanı müayinə üçün nə götürülür?",
    options: {
      A: "Mədənin yuyuntu suyu",
      B: "Onurğa beyni mayesi",
      C: "Bəlğəm",
      D: "Burundan ifrazat",
      E: "Qan",
    },
    correctAnswer: "E",
  },
  {
    question: "594. Streptokoklar hansı xəstəlikləri törədir?",
    options: {
      A: "Meningit",
      B: "Süzənək",
      C: "Dizenteriya",
      D: "Blennoreya",
      E: "Skarlatina",
    },
    correctAnswer: "E",
  },
  {
    question:
      "595. Streptokokları yetişdirmək üçün hansı qidalı mühit lazımdır?",
    options: {
      A: "Kazein-kömür aqarı",
      B: "Klauberq mühiti",
      C: "Duzlu aqar",
      D: "Yumurta sarısı duz aqarı",
      E: "Qanlı aqar",
    },
    correctAnswer: "E",
  },
  {
    question: "596. Morfoloji qurluşuna görə pnevmokoklar nə formadadır?",
    options: {
      A: "Şara bənzər",
      B: "Tetrakok",
      C: "Paxla şəkilli kok",
      D: "Lanset şəkilli diplokok",
      E: "Sarsin",
    },
    correctAnswer: "D",
  },
  {
    question: "597. Pnevmokoklar yaxmada necə görünür?",
    options: {
      A: "Uzun zəncir formasında",
      B: "Lansetşəkilli diplokok formasında",
      C: "Üzüm salxımı formasında",
      D: "Tək-tək",
      E: "Topa halında",
    },
    correctAnswer: "B",
  },
  {
    question:
      "598. Pnevmokok infeksiyası zamanı müayinə üçün hansı material götürülür?",
    options: {
      A: "Bəlğəm",
      B: "Qusuntu kütləsi",
      C: "Onurğa beyni mayesi",
      D: "Sidik",
      E: "Mədənin yuyuntu suyu",
    },
    correctAnswer: "A",
  },
  {
    question: "599. Pnevmokoklar hansı xəstəlikləri törədir?",
    options: {
      A: "Skarlatina",
      B: "Blennoreya",
      C: "Krupoz pnevmoniya",
      D: "Süzənək",
      E: "Dizenteriya",
    },
    correctAnswer: "C",
  },
  {
    question:
      "600. Pnevmokokları yetişdirmək üçün hansı qidalı mühitlərdən istifadə olunur?",
    options: {
      A: "Ətli peptonlu aqar",
      B: "Serumlu aqar",
      C: "Ətli peptonlu bulyon",
      D: "Duzlu aqar",
      E: "Yumurta sarısı duz aqarı",
    },
    correctAnswer: "B",
  },

  {
    question: "601. Meninqokokların morfoloji quruluşu necədir?",
    options: {
      A: "Mikrokokdur",
      B: "Şara bənzərdir",
      C: "Sarsindir",
      D: "Paxla şəkilli, cüt-cüt yerləşən koklardır",
      E: "Lanset şəkilli diplokoklardır",
    },
    correctAnswer: "D",
  },
  {
    question: "602. Meninqokok infeksiyasında xəstəliyin mənbəyi nədir?",
    options: {
      A: "Birələr",
      B: "Xəstə heyvanlar",
      C: "Ağcaqanadlar",
      D: "Xəstə adamlar",
      E: "Gənələr",
    },
    correctAnswer: "D",
  },
  {
    question: "603. Meninqokoklar yaxmada necə yerləşir?",
    options: {
      A: "Topa-topa",
      B: "Üzüm salxımı formasında",
      C: "Paxlaya oxşar diplokok halında",
      D: "Tək-tək",
      E: "Qısa zəncir halında",
    },
    correctAnswer: "C",
  },
  {
    question:
      "604. Meninqokok infeksiyası zamanı müayinə üçün hansı material götürülür?",
    options: {
      A: "Bəlğəm",
      B: "Qusuntu kütləsi",
      C: "Sidik",
      D: "Onurğa beyni mayesi",
      E: "Mədənin yuyuntu suyu",
    },
    correctAnswer: "D",
  },
  {
    question: "605. Meninqokoklar hansı xəstəlikləri törədir?",
    options: {
      A: "Revmatizm",
      B: "Qızıl yel",
      C: "Pnevmoniya",
      D: "Skarlatina",
      E: "Epidemik serebrospinal meningit",
    },
    correctAnswer: "E",
  },
  {
    question:
      "606. Meninqokokları yetişdirmək üçün hansı qidalı mühitlərdən istifadə olunur?",
    options: {
      A: "Leffler mühiti",
      B: "Kazein-kömür aqarı",
      C: "Klanberq mühiti",
      D: "Qanlı aqar",
      E: "Serumlu aqar",
    },
    correctAnswer: "E",
  },
  {
    question: "607. Qonokokların morfoloji quruluşu necədir?",
    options: {
      A: "Kofe dənəsinə oxşar diplokokdur",
      B: "Lansetşəkilli diplokokdur",
      C: "Sarsindir",
      D: "Şarabənzər",
      E: "Zəncir əmələ gətirən kokdur",
    },
    correctAnswer: "A",
  },
  {
    question: "608. Qonokoklar yaxmada necə yerləşir?",
    options: {
      A: "Zəncir formasında",
      B: "Tək-tək",
      C: "Diplokok formasında",
      D: "Üzüm salxımı formasında",
      E: "Lansetşəklində",
    },
    correctAnswer: "C",
  },
  {
    question:
      "609. Qonokok infeksiyası zamanı müayinə üçün hansı material götürülür?",
    options: {
      A: "Qusuntu",
      B: "Sidik",
      C: "Mədənin yuyuntu suyu",
      D: "Uretradan gələn möhtəviyyat",
      E: "Onurğa beyni mayesi",
    },
    correctAnswer: "D",
  },
  {
    question: "610. Qonokoklar hansı xəstəliyi törədir?",
    options: {
      A: "Süzənək",
      B: "Skarlatina",
      C: "Meningit",
      D: "Pnevmoniya",
      E: "Qızıl yel",
    },
    correctAnswer: "A",
  },
  {
    question: "611. Bağırsaq çöpləri hansı morfoloji quruluşa malikdir?",
    options: {
      A: "Xırda, oval çöplərdir",
      B: "Hər iki ucu sancaqşəkilli, əyilmiş çöplərdir",
      C: "Hərəkətsiz çöplərdir",
      D: "Ucları kəsilmiş və ya əyilmiş bakteriyalardır",
      E: "Çöpşəkilli bakteriyalardır",
    },
    correctAnswer: "E",
  },
  {
    question: "612. Bu xəstəliklərdən hansı bağırsaq infeksiyalarına aiddir?",
    options: {
      A: "Göyöskürək",
      B: "Meningit",
      C: "Tulyaremiya",
      D: "Difteriya",
      E: "Kolienterit",
    },
    correctAnswer: "E",
  },
  {
    question:
      "613. Bağırsaq çöpünü tədqiq etmək üçün hansı müayinə materialı götürülür?",
    options: {
      A: "Əsnəkdən selik",
      B: "Yaradan götürülmüş möhtəviyyat",
      C: "İrin",
      D: "Bəlğəm",
      E: "Nəcis",
    },
    correctAnswer: "E",
  },
  {
    question:
      "614. Endo mühitində bağırsaq çöpü nə rəngdə koloniyalar əmələ gətirir?",
    options: {
      A: "Bənövşəyi",
      B: "Qırmızı",
      C: "Qara",
      D: "Sarı",
      E: "Rəngsiz",
    },
    correctAnswer: "B",
  },
  {
    question:
      "615. Bağırsaq infeksiyaları törədicilərini yetişdirmək üçün hansı qidalı mühitdən istifadə olunur?",
    options: {
      A: "Duzlu bulyon",
      B: "Mak-Koy",
      C: "Endo",
      D: "Leffler",
      E: "Klauberq",
    },
    correctAnswer: "C",
  },
  {
    question: "616. Levin mühitində bağırsaq çöpü koloniyası nə rəngdədir?",
    options: {
      A: "Sarı",
      B: "Göy bənövşəyi",
      C: "Qara",
      D: "Moruğu",
      E: "Rəngsiz",
    },
    correctAnswer: "B",
  },
  {
    question:
      "617. Bağırsaq çöpünün müayinəsi üçün hansı üsuldan istifadə edilir?",
    options: {
      A: "Seroloji",
      B: "Mikroskopik",
      C: "Bakterioloji",
      D: "Allergik",
      E: "Bioloji",
    },
    correctAnswer: "C",
  },
  {
    question: "618. Salmonellalar hansı xəstəliyin törədiciləridir?",
    options: {
      A: "Qarın yatalağı",
      B: "Göyöskürək",
      C: "Tetanus",
      D: "Botulizm",
      E: "Kandidozlar",
    },
    correctAnswer: "A",
  },
  {
    question: "619. Salmonellalar hansı morfoloji quruluşa malikdir?",
    options: {
      A: "Xırda, ucları dairələnmiş çöplərdir",
      B: "Hər iki ucu sancaqşəkilli çöplərdir",
      C: "Təbil çubuğuna oxşar çöplərdir",
      D: "Ucları kəsilmiş çöplərdir",
      E: "Hərəkətsiz çöplərdir",
    },
    correctAnswer: "A",
  },
  {
    question: "620. Qarın yatalağına şübhə olduqda qan hansı mühitə əkilir?",
    options: {
      A: "Ətli peptonlu bulyon",
      B: "Öd bulyonu",
      C: "Peptonlu su",
      D: "Kazeinli bulyon",
      E: "Şəkərli bulyon",
    },
    correctAnswer: "B",
  },
  {
    question: "621. Salmonelloza şübhə olduqda nəcis hansı mühitə əkilir?",
    options: {
      A: "Şəkərli bulyona",
      B: "Peptonlu suya",
      C: "Selenitli mühitə",
      D: "Ətli-peptonlu bulyona",
      E: "Kozeinli bulyona",
    },
    correctAnswer: "C",
  },
  {
    question:
      "622. Qarın yatalağının seroloji diaqnozunda hansı reaksiya tətbiq olunur?",
    options: {
      A: "Presipitasiya",
      B: "Vidal",
      C: "Xeddelson",
      D: "Vasserman",
      E: "Rayt",
    },
    correctAnswer: "B",
  },
  {
    question: "623. Endo mühitində qarın yatalağı koloniyaları nə rəngdə olur?",
    options: {
      A: "Rəngsiz şəffaf, parlaq",
      B: "Qara",
      C: "Yaşıl",
      D: "Moruğu",
      E: "Bənövşəyi",
    },
    correctAnswer: "A",
  },
  {
    question: "624. Dizenteriya bakteriyalarının morfoloji quruluşu necədir?",
    options: {
      A: "Təbil çubuğuna oxşar",
      B: "Kiçik hərəkətli",
      C: "Oval formasındadır",
      D: "Hər iki ucu sancaqşəkilli",
      E: "Ucları dairələnmiş hərəkətsiz çöplərdir",
    },
    correctAnswer: "E",
  },
  {
    question:
      "625. Ploskiryev mühitində dizenteriya koloniyaları nə rəngdə olur?",
    options: {
      A: "Rəngsiz şəffaf",
      B: "Moruğu",
      C: "Qara",
      D: "Yaşıl",
      E: "Bənövşəyi",
    },
    correctAnswer: "A",
  },
  {
    question: "626. Dizenteriya zamanı müayinə üçün hansı material götürülür?",
    options: {
      A: "İrin",
      B: "Sidik",
      C: "Qusuntu kütləsi",
      D: "Qan",
      E: "Nəcis",
    },
    correctAnswer: "E",
  },
  {
    question:
      "627. Dizenteriya törədiciləri hansı qidalı mühitdə yetişdirilir?",
    options: {
      A: "Süd duz aqarı",
      B: "Ploskiryev",
      C: "Duzlu aqar",
      D: "Vismut-sulfit aqarı",
      E: "Klauberq",
    },
    correctAnswer: "B",
  },
  {
    question: "628. Xüsusi təhlükəli infeksiyalara nələr aiddir?",
    options: {
      A: "Göy öskürək",
      B: "Qrip",
      C: "Vəba",
      D: "Difteriya",
      E: "Meningit",
    },
    correctAnswer: "C",
  },
  {
    question: "629. Vəba törədicisinin morfoloji quruluşu necədir?",
    options: {
      A: "Oval formada",
      B: "Hər iki ucu sancaqşəkilli",
      C: "Təbil çubuğuna oxşar",
      D: "Vergül formasında əyilmiş çöpdür",
      E: "Ucları dairələnmiş hərəkətsiz",
    },
    correctAnswer: "D",
  },
  {
    question: "630. Vəba ilə yoluxma yolları hansılardır?",
    options: {
      A: "Hava",
      B: "Torpaq",
      C: "Həşaratlar",
      D: "Alimentar",
      E: "Təmas-məişət",
    },
    correctAnswer: "D",
  },
  {
    question: "631. Vəba vibrionu üçün elektiv mühit hansıdır?",
    options: {
      A: "Vismut sulfit aqar",
      B: "Peptonlu su",
      C: "Selenitli bulyon",
      D: "Duzlu bulyon",
      E: "Ploskiryev",
    },
    correctAnswer: "B",
  },
  {
    question:
      "632. Vəba vibrionunu yetişdirmək üçün qidalı mühitin pH neçə olmalıdır?",
    options: {
      A: "6,5-7,1",
      B: "7,0-7,2",
      C: "5,6-6,5",
      D: "8,9",
      E: "7,2-7,6",
    },
    correctAnswer: "D",
  },
  {
    question: "633. Vəba zamanı müayinə üçün hansı material götürülür?",
    options: {
      A: "Qan",
      B: "Əsnəkdən selik",
      C: "Sidik",
      D: "İrin",
      E: "Nəcis",
    },
    correctAnswer: "E",
  },
  {
    question: "634. Xüsusi təhlükəli infeksiyalar qrupuna nələr aiddir?",
    options: {
      A: "Taun",
      B: "Meningit",
      C: "Qrip",
      D: "Göy öskürək",
      E: "Difteriya",
    },
    correctAnswer: "A",
  },
  {
    question: "635. Taun törədicisini kim kəşf etmişdir?",
    options: {
      A: "Neyser",
      B: "Salmon",
      C: "Eşerix",
      D: "İersen və Kitazato",
      E: "Kox",
    },
    correctAnswer: "D",
  },
  {
    question: "636. Taun törədicisi hansı cinsə aiddir?",
    options: {
      A: "Şiqella",
      B: "İersinya",
      C: "Mikobakteriya",
      D: "Klostridiya",
      E: "Korinebakteriya",
    },
    correctAnswer: "B",
  },
  {
    question: "637. Tulyaremiya törədicisi hansı morfoloji quruluşa malikdir?",
    options: {
      A: "Oval formalı çöp",
      B: "Ucları dairələnmiş",
      C: "Təbil çubuğuna oxşar",
      D: "Kiçik kokabənzər bakteriya",
      E: "Ucları sancaq şəkilli",
    },
    correctAnswer: "D",
  },
  {
    question: "638. Tulyaremiya xəstəliyinin keçiricisi nədir?",
    options: {
      A: "Xırda buynuzlu mallar",
      B: "Bitlər",
      C: "İnsanlar",
      D: "Gəmiricilər",
      E: "İtlər",
    },
    correctAnswer: "D",
  },
  {
    question: "639. Preparat nəyə deyilir?",
    options: {
      A: "Rənglənmiş yaxmaya",
      B: "Qandan hazırlanmış yaxmaya",
      C: "Fiksasiya olunmuş yaxmaya",
      D: "İrindən hazırlanmış yaxmaya",
      E: "Basma yaxmaya",
    },
    correctAnswer: "C",
  },
  {
    question: "640. Qara yara törədicisi hansı morfoloji quruluşa malikdir?",
    options: {
      A: "Ucları dairələnmiş",
      B: "Kiçik kokabənzər",
      C: "Oval formalı",
      D: "İri, ucları əyilmiş və ya kəsilmiş",
      E: "Təbil çubuğuna oxşar",
    },
    correctAnswer: "D",
  },
  {
    question: "641. Hansı bakteriyalara klostridiumlar deyilir?",
    options: {
      A: "Spiralvarilərə",
      B: "Sarsinlərə",
      C: "Spor əmələ gətirən aerob bakteriyalara",
      D: "Spor əmələ gətirməyən mikroorqanizmlərə",
      E: "Spor əmələ gətirən anaerob bakteriyalara",
    },
    correctAnswer: "E",
  },
  {
    question: "642. Qara yarada infeksiya mənbəyi nədir?",
    options: {
      A: "Bitlər",
      B: "Xəstə heyvanlar",
      C: "Milçəklər",
      D: "Xəstə insanlar",
      E: "Gənələr",
    },
    correctAnswer: "B",
  },
  {
    question:
      "643. Qarayara xəstəliyinin diaqnozu hansı reaksiyaya əsasən qoyulur?",
    options: {
      A: "Vasserman",
      B: "Askoli",
      C: "Xeddelson",
      D: "Vidal",
      E: "Rayt",
    },
    correctAnswer: "B",
  },
  {
    question: "644. Qara yara çöplərinə xas koloniya hansıdır?",
    options: {
      A: "Hamar",
      B: "Qırışlı, şir başına oxşar",
      C: "Şeh damlasına oxşar",
      D: "Dalğavari",
      E: "Parlaq, civə damcısına oxşar",
    },
    correctAnswer: "B",
  },
  {
    question: "645. Xüsusi təhlükəli infeksiyalara aid xəstəlik hansıdır?",
    options: {
      A: "Difteriya",
      B: "Brüselyöz",
      C: "Göy öskürək",
      D: "Vərəm",
      E: "Qazlı qanqrena",
    },
    correctAnswer: "B",
  },
  {
    question: "646. Brüselyoz törədicisi hansı morfoloji quruluşa malikdir?",
    options: {
      A: "Sancaq şəkillidir",
      B: "Xırda, kokabənzər bakteriyalardır",
      C: "Ucları kəsilmiş",
      D: "Ucları dairələnmişdir",
      E: "Təbil çubuğuna oxşar",
    },
    correctAnswer: "B",
  },
  {
    question: "647. Brüselyozda infeksiya mənbəyi nədir?",
    options: {
      A: "Gəmiricilər",
      B: "Pişiklər",
      C: "İri və xırda buynuzlu mallar",
      D: "İnsan",
      E: "Milçəklər",
    },
    correctAnswer: "C",
  },
  {
    question: "648. Brüselyozun diaqnozunda hansı reaksiya qoyulur?",
    options: {
      A: "Rayt",
      B: "Pirke",
      C: "Vasserman",
      D: "Vidal",
      E: "Askoli",
    },
    correctAnswer: "A",
  },
  {
    question: "649. Brüselyoz zamanı hansı sınaqlar qoyulur?",
    options: {
      A: "Pizu",
      B: "Şik",
      C: "Dik",
      D: "Bürne",
      E: "Mantu",
    },
    correctAnswer: "D",
  },
  {
    question:
      "650. Brüselyoz törədiciləri hansı qidalı mühitlərdə inkişaf edir?",
    options: {
      A: "Endo mühiti",
      B: "Ətli peptonlu aqar",
      C: "Qliserinli kartoflu aqar",
      D: "Jelatinli mühit",
      E: "Ploskiryev mühiti",
    },
    correctAnswer: "B",
  },

  {
    question: "651. Brüselyozda müayinə üçün hansı material götürülür?",
    options: {
      A: "Qusuntu kütləsi",
      B: "İrin",
      C: "Qan",
      D: "Bəlğəm",
      E: "Onurğa beyni mayesi",
    },
    correctAnswer: "C",
  },
  {
    question: "652. Göyöskürək törədicisi hansı cinsə daxildir?",
    options: {
      A: "Klostridiya",
      B: "Korinebakteriya",
      C: "Şigella",
      D: "Bordetella",
      E: "Mikobakteriya",
    },
    correctAnswer: "D",
  },
  {
    question: "653. Göyöskürək törədicisinin morfoloji quruluşu necədir?",
    options: {
      A: "Oval formalı kiçik çöplərdir",
      B: "Xırda, kokabənzərdir",
      C: "Təbil çubuğuna oxşardır",
      D: "Sancaqşəkillidir",
      E: "Ucları kəsilmişdir",
    },
    correctAnswer: "A",
  },
  {
    question: "654. Göyöskürək zamanı infeksiya mənbəyi nədir?",
    options: {
      A: "Birələr",
      B: "Xəstə adam",
      C: "Ağcaqanadlar",
      D: "İri buynuzlu mal",
      E: "Gəmiricilər",
    },
    correctAnswer: "B",
  },
  {
    question: "655. Göyöskürək zamanı müayinə üçün hansı material götürülür?",
    options: {
      A: "Onurğa beyni mayesi",
      B: "Qusuntu kütləsi",
      C: "Qan",
      D: "İrin",
      E: "Burun-udlağın selikli qişasından möhtəviyyat",
    },
    correctAnswer: "E",
  },
  {
    question:
      "656. Göyöskürəklə qeyri-həqiqi göyöskürəyi ayırmaq üçün hansı sınaq qoyulur?",
    options: {
      A: "Mantu",
      B: "Şik",
      C: "Bürne",
      D: "Tirozin",
      E: "Askoli",
    },
    correctAnswer: "D",
  },
  {
    question:
      "657. Göyöskürək törədiciləri əkilmiş qidalı mühitə penisillin nə məqsədlə əlavə olunur?",
    options: {
      A: "Qida komponenti kimi",
      B: "Mühitin pH-nı dəyişmək üçün",
      C: "Qidalı mühitə bərklik vermək üçün",
      D: "Kənar mikrofloranın böyüməsini saxlamaq üçün",
      E: "Quraqlıqdan qorunmaq üçün",
    },
    correctAnswer: "D",
  },
  {
    question:
      "658. Kozein kömür aqarında bitmiş göyöskürək koloniyaları nə formadadır?",
    options: {
      A: "Civə damcısı kimi",
      B: "Kiçik, ortası bərk",
      C: "Şir başına oxşar",
      D: "Quru qırışıq",
      E: "Böyük yastı",
    },
    correctAnswer: "A",
  },
  {
    question: "659. Difteriya törədicisi hansı cinsə aiddir?",
    options: {
      A: "Korinebakterium",
      B: "Şigella",
      C: "Klostridiya",
      D: "Mikobakteriya",
      E: "Bordetella",
    },
    correctAnswer: "A",
  },
  {
    question: "660. Difteriya törədicisinin morfoloji quruluşu necədir?",
    options: {
      A: "Bir qədər əyilmiş, nazik çöplərdir",
      B: "Ovaldır",
      C: "Xırda, kokabənzərdir",
      D: "Sancaq şəkillidir",
      E: "Ucları kəsilmişdir",
    },
    correctAnswer: "A",
  },
  {
    question:
      "661. Difteriya törədicilərini yetişdirmək üçün hansı qidalı mühitlərdən istifadə olunur?",
    options: {
      A: "Endo",
      B: "Ploskiriyev",
      C: "Kazein kömür aqarı",
      D: "Klauberq",
      E: "Qanlı aqar",
    },
    correctAnswer: "D",
  },
  {
    question: "662. Difteriyada infeksiya mənbəyi nədir?",
    options: {
      A: "Gəmiricilər",
      B: "Xəstə adamlar, bakteriya daşıyıcıları",
      C: "Pişiklər",
      D: "İtlər",
      E: "İri buynuzlu mallar",
    },
    correctAnswer: "B",
  },
  {
    question: "663. Vərəm törədicisi hansı cinsə aiddir?",
    options: {
      A: "Mikobakteriya",
      B: "Bordetella",
      C: "Klostridiya",
      D: "Salmonella",
      E: "Korinebakteriya",
    },
    correctAnswer: "A",
  },
  {
    question: "664. Vərəm törədicisi hansı morfoloji xüsusiyyətə malikdir?",
    options: {
      A: "Düz, nazik çöplərdir",
      B: "Təbil çubuğuna oxşardır",
      C: "Ucları dairələnmişdir",
      D: "Koklardır",
      E: "Ucları kəsilmişdir",
    },
    correctAnswer: "A",
  },
  {
    question:
      "665. Vərəm törədicisini aşkar etmək üçün yaxmalar hansı boyama üsulu ilə boyanır?",
    options: {
      A: "Ojeşko",
      B: "Romanovski-Gimza",
      C: "Bürri",
      D: "Sil-Nilsen",
      E: "Qram",
    },
    correctAnswer: "D",
  },
  {
    question:
      "666. İnsanların vərəmlə yoluxmasını müəyyən etmək üçün hansı sınaq qoyulur?",
    options: {
      A: "Şik",
      B: "Pizu",
      C: "Mantu",
      D: "Dik",
      E: "Bürne",
    },
    correctAnswer: "C",
  },
  {
    question:
      "667. Patogen anaerobların klostridium cinsinə hansı törədicilər aiddir?",
    options: {
      A: "Vərəm",
      B: "Tetanus",
      C: "Tulyaremiya",
      D: "Difteriya",
      E: "Taun",
    },
    correctAnswer: "B",
  },
  {
    question: "668. Tetanus çöpü hansı formadadır?",
    options: {
      A: "Streptobasil",
      B: "Təbil çubuğu",
      C: "Düz, nazik çöp",
      D: "Sancaqşəkilli",
      E: "Sporu mərkəzdə yerləşən çöp",
    },
    correctAnswer: "B",
  },
  {
    question: "669. Tənəffüsünə görə tetanus törədiciləri hansı qrupa aiddir?",
    options: {
      A: "Fakultativ anaerob",
      B: "Obliqat aerob",
      C: "Aerob",
      D: "Anaerob",
      E: "Obliqat anaerob",
    },
    correctAnswer: "E",
  },
  {
    question: "670. Obliqat anaeroblara hansı törədicilər aiddir?",
    options: {
      A: "Tetanus klostridiumu",
      B: "Dizenteriya törədicisi",
      C: "Qarın yatalağı",
      D: "Göyöskürək",
      E: "Vəba",
    },
    correctAnswer: "A",
  },
  {
    question:
      "671. Patogen anaerobların klostridium cinsinə hansı törədicilər aiddir?",
    options: {
      A: "Vərəm",
      B: "Qazlı qanqrena",
      C: "Difteriya",
      D: "Tulyaremiya",
      E: "Taun",
    },
    correctAnswer: "B",
  },
  {
    question: "672. Qazlı qanqrena törədicisi hansı formadadır?",
    options: {
      A: "Təbil çubuğu",
      B: "Sancaqşəkilli",
      C: "Düz, nazik çöplərdir",
      D: "İri, polimorf çöplərdir",
      E: "Streptobatsil",
    },
    correctAnswer: "D",
  },
  {
    question:
      "673. Qazlı qanqrena törədiciləri qidalı mühitdə necə koloniyalar əmələ gətirir?",
    options: {
      A: "Civə damcısı kimi",
      B: "Böyük yastı",
      C: "Sütunlu aqarın dərinliyində mərciyəbənzər diskşəkilli",
      D: "Şir başına oxşar",
      E: "Xırda buzcuqlar kimi",
    },
    correctAnswer: "C",
  },
  {
    question: "674. Aşağıdakı törədicilərdən hansılar spor əmələ gətirir?",
    options: {
      A: "Bağırsaq çöpü",
      B: "Vəba",
      C: "Botulizm",
      D: "Şigellalar",
      E: "Salmonellalar",
    },
    correctAnswer: "C",
  },
  {
    question: "675. Botulizm törədicisinin morfoloji quruluşu necədir?",
    options: {
      A: "Sancaqşəkilli",
      B: "Streptobatsil",
      C: "Təbil çubuğu",
      D: "Ucları girdə, polimorf çöplərdir",
      E: "Düz, nazik çöplər",
    },
    correctAnswer: "D",
  },
  {
    question: "676. Obliqat anaeroblara hansı törədicilər aiddir?",
    options: {
      A: "Qarın yatalağı",
      B: "Vəba",
      C: "Göyöskürək",
      D: "Dizenteriya",
      E: "Botulizm",
    },
    correctAnswer: "E",
  },
  {
    question: "677. Patogen spiroxetlərə hansı törədicilər aiddir?",
    options: {
      A: "Sifilis törədicisi",
      B: "Qarın yatalağı",
      C: "Vəba",
      D: "Dizenteriya",
      E: "Botulizm",
    },
    correctAnswer: "A",
  },
  {
    question: "678. Sifilis törədicisinə nə üçün solğun spiroxeta deyilir?",
    options: {
      A: "Romanovski-Gimza üsulu ilə göy-bənövşəyi boyandığına görə",
      B: "Qram üsulu ilə solğun boyandığına görə",
      C: "Romanovski-Gimza üsulu ilə solğun boyandığına görə",
      D: "Qram üsulu ilə çəhrayı rəngə boyandığına görə",
      E: "Metilen abısı ilə göy rəngə boyandığına görə",
    },
    correctAnswer: "C",
  },
  {
    question:
      "679. Sifilisin seroloji müayinəsində hansı reaksiya tətbiq edilir?",
    options: {
      A: "Vasserman",
      B: "Pirket",
      C: "Rayt",
      D: "Xeddelson",
      E: "Vidal",
    },
    correctAnswer: "A",
  },
  {
    question: "680. Qayıdan yatalaq törədicisi hansı cinsə aiddir?",
    options: {
      A: "Treponema",
      B: "Klostridiya",
      C: "Mikobakteriya",
      D: "Salmonella",
      E: "Borrellia",
    },
    correctAnswer: "E",
  },
  {
    question: "681. Rikketsiyaların morfoloji quruluşu necədir?",
    options: {
      A: "Nazik, düz çöplərdir",
      B: "Polimorf, kokşəkilli mikroblardır",
      C: "Bir qədər əyilmiş çöplərdir",
      D: "Qıvrım spiralşəkillidir",
      E: "Sancaqşəkillidir",
    },
    correctAnswer: "B",
  },
  {
    question: "682. Virusları hansı mühitlərdə yetişdirirlər?",
    options: {
      A: "Qanlı aqarda",
      B: "Toxuma kulturasında",
      C: "Serumlu mühitdə",
      D: "Şəkərli bulyonda",
      E: "ƏPA",
    },
    correctAnswer: "B",
  },
  {
    question: "683. Suyun qiymətləndirilməsinin sanitar göstəricisi nədir?",
    options: {
      A: "Bağırsaq çöpü",
      B: "Protey",
      C: "Meninqokok",
      D: "Stafilokok",
      E: "Difteriya çöpü",
    },
    correctAnswer: "A",
  },
  {
    question:
      "684. Bu antigenlərdən hansı biri hüceyrənin qamçısı ilə əlaqədardır?",
    options: {
      A: "H-antigen",
      B: "K-antigen",
      C: "O-antigen",
      D: "Vi-antigen",
      E: "Protektiv antigen",
    },
    correctAnswer: "A",
  },
  {
    question:
      "685. Aşağıdakılardan hansı ərzaq məhsullarının sanitar göstərici mikrobudur?",
    options: {
      A: "Difteriya çöpü",
      B: "Qonokok",
      C: "Sarsin",
      D: "Meninqokok",
      E: "Bağırsaq çöpü",
    },
    correctAnswer: "E",
  },
  {
    question:
      "686. Əllərin yuyuntu suyunun sanitar bakterioloji müayinəsində nəyi aşkar etmək olar?",
    options: {
      A: "Qonokok",
      B: "Qızılı stafilokok",
      C: "Difteriya çöpü",
      D: "Meninqokok",
      E: "Pnevmokok",
    },
    correctAnswer: "B",
  },
  {
    question:
      "687. Patogen ibtidailərə aşağıdakı törədicilərdən hansılar aiddir?",
    options: {
      A: "Spiroxet",
      B: "Mikobakteriya",
      C: "Qrip",
      D: "Malyariya plazmodisi",
      E: "Vəba",
    },
    correctAnswer: "D",
  },
  {
    question: "688. Malyariya plazmodisinin cinsi inkişaf dövrü harada gedir?",
    options: {
      A: "Havada",
      B: "İnsan orqanizmində",
      C: "Suda",
      D: "Dişi ağcaqanadın bədənində",
      E: "Quşlarda",
    },
    correctAnswer: "D",
  },
  {
    question:
      "689. Malyariya zamanı qandan hazırlanmış qalın damla hansı üsulla boyanır?",
    options: {
      A: "Romanovski-Gimza",
      B: "Sil-Nilsen",
      C: "Burri",
      D: "Qram",
      E: "Ojeşko",
    },
    correctAnswer: "A",
  },
  {
    question: "690. Malyariya zamanı müayinə üçün hansı material götürülür?",
    options: {
      A: "Qan",
      B: "Əsnəkdən selik",
      C: "Qusuntu kütləsi",
      D: "İrin",
      E: "Sidik",
    },
    correctAnswer: "A",
  },
  {
    question: "691. Leyşmaniyalar hansı xəstəlikləri törədir?",
    options: {
      A: "Lyamblioz",
      B: "Dermatomikoz",
      C: "Qarayara",
      D: "Qara azar (visseral leyşmanioz)",
      E: "Trixomonoz",
    },
    correctAnswer: "D",
  },
  {
    question: "692. Toksoplazmozda infeksiya mənbəyi nədir?",
    options: {
      A: "Ağcaqanadlar",
      B: "Pişiklər",
      C: "Bitlər",
      D: "Birələr",
      E: "Gənələr",
    },
    correctAnswer: "B",
  },
  {
    question: "693. Toksoplazmoz törədicisinin morfoloji quruluşu necədir?",
    options: {
      A: "Oval ucları burulmuş",
      B: "Ulduz forması",
      C: "Oval ucları şiş",
      D: "Aypara və ya portağal dilimi şəklində",
      E: "Uzun çöp",
    },
    correctAnswer: "D",
  },
  {
    question: "694. Bu xüsusiyyətlərdən hansı anticismə aiddir?",
    options: {
      A: "Toksigenlik",
      B: "Spesifiklik",
      C: "Virulentlik",
      D: "Patogenlik",
      E: "Antigen qıcıqlandırması nəticəsində yaranma",
    },
    correctAnswer: "E",
  },
  {
    question: "695. Patogen göbələklər insanlarda hansı xəstəlikləri törədir?",
    options: {
      A: "Leyşmanioz",
      B: "Lyambliyoz",
      C: "Brüselloz",
      D: "Trixofitiya",
      E: "Toksoplazmoz",
    },
    correctAnswer: "D",
  },
  {
    question: "696. Təmiz kultura nədir?",
    options: {
      A: "Bərk qidalı mühitdə mikrobların əmələ gətirdiyi populyasiyadır",
      B: "Qidalı mühitdə becərilən mikroorqanizmlərdir",
      C: "Yalnız bir növ mikrob olan kulturadır",
      D: "Bir mikrob hüceyrəsindən inkişaf edən mikrob populyasiyasıdır",
      E: "Bir və ya bir neçə mənbələrdən alınmış eyni növlü mikrob kulturasıdır",
    },
    correctAnswer: "C",
  },
  {
    question: "697. Dermatomikoz zamanı müayinə üçün hansı material götürülür?",
    options: {
      A: "Qan",
      B: "Bəlğəm",
      C: "Qusuntu",
      D: "Zədələnmiş dırnaq qırıntıları",
      E: "İrin",
    },
    correctAnswer: "D",
  },
  {
    question:
      "698. Qazanılmış immunçatışmazlıq sindromu virusların hansı fəsiləsinə aiddir?",
    options: {
      A: "Retroviruslar",
      B: "Rabdoviruslar",
      C: "Herpes viruslar",
      D: "Papoviruslar",
      E: "Adenoviruslar",
    },
    correctAnswer: "A",
  },
  {
    question: "699. Əkin zamanı nə üçün aseptik şərait yaradılır?",
    options: {
      A: "Mikrobları saxlamaq üçün",
      B: "Qidalı mühitin səthinə havadan əlavə mikrobların düşməməsi üçün",
      C: "Mikrobların böyüməsini zəiflətmək üçün",
      D: "Mikrobları məhv etmək üçün",
      E: "Mikrobların yetişməsini sürətləndirmək üçün",
    },
    correctAnswer: "B",
  },
  {
    question:
      "700. Havanın sanitar bakterioloji müayinəsi hansı üsulla aparılır?",
    options: {
      A: "Bioloji",
      B: "Brodil",
      C: "Sedimentasiya",
      D: "Membran filtirlər üsulu",
      E: "Faqotipaj üsulu",
    },
    correctAnswer: "C",
  },

  {
    question: "701. Nazik qan yaxması necə fiksasiya olunur?",
    options: {
      A: "Asetonla",
      B: "Turşu buxarı ilə",
      C: "Formalinlə",
      D: "Alov üzərində",
      E: "96%-li etil spirtində",
    },
    correctAnswer: "E",
  },
  {
    question: "702. Qaynatmaqla sterilizasiya hansı aparatda aparılır?",
    options: {
      A: "Sterilizatorda",
      B: "Paster peçində",
      C: "Kox aparatında",
      D: "Avtoklavda",
      E: "Şamberlan süzgəcində",
    },
    correctAnswer: "A",
  },
  {
    question: "703. Hansı bakteriyalara basillər deyilir?",
    options: {
      A: "Spor əmələ gətirən anaerob bakteriyalara",
      B: "Spiralvarilərə",
      C: "Spor əmələ gətirən aerob bakteriyalara",
      D: "Spor əmələ gətirməyən mikroorqanizmlərə",
      E: "Sarsinlərə",
    },
    correctAnswer: "C",
  },
  {
    question:
      "704. Seroloji müayinə aparmaq üçün venadan nə qədər qan götürülür?",
    options: {
      A: "0,3 ml",
      B: "0,5 ml",
      C: "1 ml",
      D: "2-3 ml",
      E: "5 ml",
    },
    correctAnswer: "D",
  },
  {
    question: "705. Bakterioloji müayinə üçün venadan nə qədər qan götürülür?",
    options: {
      A: "3 ml",
      B: "2 ml",
      C: "4 ml",
      D: "1 ml",
      E: "5-10 ml",
    },
    correctAnswer: "E",
  },
  {
    question:
      "706. Pambıq-tənzif tıxacların və tamponların sterilizasiyası hansı aparatda aparılır?",
    options: {
      A: "Termostatda",
      B: "Avtoklavda 1 atm təzyiqdə 20 dəqiqə",
      C: "Avtoklavda 0,5 atm təzyiqdə 15 dəqiqə",
      D: "Qızdırıcı şkafda",
      E: "Su hamamında",
    },
    correctAnswer: "B",
  },
  {
    question: "707. Mikrob koloniyası nədir?",
    options: {
      A: "Bir mikrob hüceyrəsindən inkişaf edən mikrob populyasiyasıdır",
      B: "Qidalı mühitdə hər hansı bir növə mənsub mikrobun yığılmasıdır",
      C: "Qidalı mühitdə becərilən mikroorqanizmlərdir",
      D: "Bir neçə mənbədən alınmış eyni növlü mikrob kulturasıdır",
      E: "Qidalı mühit səthində eyni növlü mikrobun bir yerə yığılmış formasıdır (populyasiyası)",
    },
    correctAnswer: "E",
  },
  {
    question:
      "708. Bakterioloji müayinə üçün götürülən müayinə materialı götürüldüyü andan laboratoriyaya hansı müddətdə çatdırılmalıdır?",
    options: {
      A: "5 saat",
      B: "2 saat",
      C: "3 saat",
      D: "1 saat",
      E: "4 saat",
    },
    correctAnswer: "B",
  },
  {
    question: "709. Yaxmalar nə üçün fiksasiya edilir?",
    options: {
      A: "Mikrobları qurutmaq üçün",
      B: "Asılan damla hazırlamaq üçün",
      C: "Mikrobları diri halda öyrənmək üçün",
      D: "Basma yaxma hazırlamaq üçün",
      E: "Yuma və rəngləmə zamanı mikrob axıb getməsin",
    },
    correctAnswer: "E",
  },
  {
    question: "710. İmmunpreparatlar harada saxlanılır?",
    options: {
      A: "Termostatda",
      B: "Soyuducuda",
      C: "Ayrıca, xüsusi yerdə",
      D: "Qaranlıq yerdə",
      E: "Quru yerdə",
    },
    correctAnswer: "B",
  },
  {
    question:
      '711. "Mirvari boyunbağı" testinin qoyuluşunda hansı antibiotikdən istifadə edilir?',
    options: {
      A: "Streptomisin",
      B: "Ampisillin",
      C: "Bisillin",
      D: "Tetrasiklin",
      E: "Penisillin",
    },
    correctAnswer: "D",
  },
  {
    question:
      "712. Bakteriyaların proteolitik xassələrinin təyini üçün hansı qidalı mühitdən istifadə edilir?",
    options: {
      A: "Saburo mühiti",
      B: "Ətli peptonlu bulyon",
      C: "Öd bulyonu",
      D: "Kozein kömür aqarı",
      E: "Peptonlu su",
    },
    correctAnswer: "B",
  },
  {
    question: "713. Maye qidalı mühitləri bərkitmək üçün ona nə əlavə edilir?",
    options: {
      A: "Aqar-aqar",
      B: "Öd",
      C: "Pepton",
      D: "Şəkər",
      E: "Qan",
    },
    correctAnswer: "A",
  },
  {
    question:
      "714. Mikroorqanizmlərin morfologiyasını öyrənmək üçün hansı müayinə üsulu tətbiq edilir?",
    options: {
      A: "Mikroskopik",
      B: "Allergik",
      C: "Mikrobioloji",
      D: "Bioloji",
      E: "Seroloji",
    },
    correctAnswer: "A",
  },
  {
    question:
      "715. Qaynatmaqla sterilizasiya zamanı nə üçün distillə suyundan istifadə edilir?",
    options: {
      A: "Qaynatmanı zəiflətmək üçün",
      B: "Vegetativ mikrobları məhv etmək üçün",
      C: "Qaynatmanı sürətləndirmək üçün",
      D: "Suyun codluğunu aradan qaldırmaq üçün",
      E: "Sporları məhv etmək üçün",
    },
    correctAnswer: "D",
  },
  {
    question: "716. Alovda qızdırmaqla nəyi sterilizasiya etmək olar?",
    options: {
      A: "İlgəklər",
      B: "Kolba",
      C: "Sınaq şüşəsi",
      D: "Petri fincanı",
      E: "Şprislər",
    },
    correctAnswer: "A",
  },
  {
    question: "717. Fasiləli sterilizasiya nə məqsədlə aparılır?",
    options: {
      A: "Rezindən hazırlanmış ləvazimatı sterilizasiya etmək üçün",
      B: "Dərman maddələrini sterilizasiya etmək üçün",
      C: "Virusları məhv etmək üçün",
      D: "Qidalı mühitləri sterilizasiya etmək üçün",
      E: "Sporları məhv etmək üçün",
    },
    correctAnswer: "E",
  },
  {
    question: "718. Serodiaqnostika nədir?",
    options: {
      A: "İmmunqlobulinlərin təyini",
      B: "Xəstənin serumunda anticismin təyini",
      C: "Bakteriyanın təmiz kulturasında antigenin təyini",
      D: "Müayinə materialında antigenin təyini",
      E: "Qan qrupunun təyini",
    },
    correctAnswer: "B",
  },
  {
    question:
      "719. Difteriyalı xəstə şəxsin əsnəyindən müayinə materialı nə ilə götürülür?",
    options: {
      A: "Şüşə çubuqla",
      B: "Alüminium çubuqla",
      C: "Paslanmayan metal məftillə",
      D: "Taxta çubuqla",
      E: "İynə ilə",
    },
    correctAnswer: "B",
  },
  {
    question:
      "720. Laboratoriya heyvanları üzərində aparılan təcrübələri öyrənmək üçün hansı üsul tətbiq edilir?",
    options: {
      A: "Seroloji",
      B: "Bakterioloji",
      C: "Dəri allergik",
      D: "Mikroskopik",
      E: "Bioloji və ya eksperimental üsul",
    },
    correctAnswer: "E",
  },
  {
    question:
      "721. Qanlı aqarda pnevmokok koloniyalarının xarakterik xüsusiyyətləri necədir?",
    options: {
      A: "Yaşıllaşmış zona",
      B: "Sarı piqmentli",
      C: "Hemoliz zona",
      D: "Hemolizsiz zona",
      E: "Selikli zona",
    },
    correctAnswer: "A",
  },
  {
    question: "722. Autovaksinlər nə deməkdir?",
    options: {
      A: "Xəstədən alınan və yalnız həmin xəstənin müalicəsi üçün istifadə olunan mikrob",
      B: "Bir sıra bakteriyaların kimyəvi parçalanma məhsulları",
      C: "Natrium xlorid məhlulunda öldürülmüş mikrobların suspenziyası",
      D: "Toksinə az miqdarda formalinin əlavə edilməsi",
      E: "Virulentliyi kəskin zəiflədilmiş mikrobların ştamı",
    },
    correctAnswer: "A",
  },
  {
    question: "723. Aşağıdakılardan hansı O-antigenə aiddir?",
    options: {
      A: "Lipopolisaxariddir",
      B: "Karbohidratdır",
      C: "Termostabildir, lipopolisaxariddir",
      D: "Termostabildir, zülaldır",
      E: "Termolabildir",
    },
    correctAnswer: "C",
  },
  {
    question: "724. Yaxmalar-izlər nədən hazırlanır?",
    options: {
      A: "Qandan",
      B: "Qida məhsullarından",
      C: "Nəcisdən",
      D: "Bəlğəmdən",
      E: "Sidiydən",
    },
    correctAnswer: "B",
  },
  {
    question:
      "725. Nikiforov qarışığı ilə aparılan fiksasiya hansı növə aiddir?",
    options: {
      A: "Morfoloji",
      B: "Bioloji",
      C: "Fiziki",
      D: "Texniki",
      E: "Kimyəvi",
    },
    correctAnswer: "E",
  },
  {
    question: "726. Vezuvin hansı rəngli boyaqlara aiddir?",
    options: {
      A: "Qırmızı",
      B: "Yaşıl",
      C: "Göy",
      D: "Sarı qəhvəyi",
      E: "Qara",
    },
    correctAnswer: "D",
  },
  {
    question:
      "727. Qidalı mühitlərin sterilizasiyası üçün ən geniş yayılan hansı üsuldan istifadə edilir?",
    options: {
      A: "Quru isti",
      B: "Qızdırmaq",
      C: "Avtoklavlaşdırma",
      D: "Pasterizə etmək",
      E: "Qaynatma",
    },
    correctAnswer: "C",
  },
  {
    question:
      "728. Təmiz mikrob kulturasının əldə edilməsinin ən geniş yayılan üsulu hansıdır?",
    options: {
      A: "Driqalski",
      B: "Qratsiya",
      C: "Asılan damla",
      D: "Kağız disklər",
      E: "Appelman",
    },
    correctAnswer: "A",
  },
  {
    question:
      "729. İçərisində əkin olan Petri kasası nə üçün termostatda tərsinə çevrilib qoyulur?",
    options: {
      A: "Təmiz kultura almaq üçün",
      B: "Mikrobun yetişməsini sürətləndirmək üçün",
      C: "Əmələ gələn kondensasiya suyunun bitəcək koloniyaların üzərinə tökülməsinin qarşısını almaq üçün",
      D: "Bakteriyaları diri halda öyrənmək üçün",
      E: "Mikrobları məhv etmək üçün",
    },
    correctAnswer: "C",
  },
  {
    question:
      "730. Mikrobların tinktorial xüsusiyyəti dedikdə nə nəzərdə tutulur?",
    options: {
      A: "Mikrobların rəng məhlullarına münasibəti",
      B: "Mikrobun identifikasiyası",
      C: "Xarici mühitə davamlılığı",
      D: "Qaynatmağa münasibəti",
      E: "Temperatura münasibəti",
    },
    correctAnswer: "A",
  },
  {
    question: "731. Süzmə yolu ilə nəyi sterilizə etmək olar?",
    options: {
      A: "Südü",
      B: "Meyvə şirələrini",
      C: "Bərk qidalı mühitləri",
      D: "Şprisləri",
      E: "Maye halında olan qidalı mühitləri",
    },
    correctAnswer: "E",
  },
  {
    question: "732. Bu mühitlərdən hansı sadə qidalı mühitlərə aiddir?",
    options: {
      A: "Qliserinli kartoflu aqar",
      B: "Kozein kömür aqarı",
      C: "Ətli-peptonlu aqar",
      D: "Rappoport mühiti",
      E: "Levin mühiti",
    },
    correctAnswer: "C",
  },
  {
    question: "733. Bu mühitlərdən hansı mürəkkəb qidalı mühitlərə aiddir?",
    options: {
      A: "Ətli peptonlu aqar",
      B: "Qliserinli kartoflu aqar",
      C: "Ətli-peptonlu jelatin",
      D: "Ətli-peptonlu bulyon",
      E: "Peptonlu aqar",
    },
    correctAnswer: "B",
  },
  {
    question: "734. Seroloji reaksiyalar xəstəliyin neçənci günündə qoyulur?",
    options: {
      A: "Xəstəliyin 2-ci həftəsində",
      B: "Xəstəliyin 3-cü həftəsində",
      C: "Xəstəliyin 1-2-ci günündə",
      D: "Xəstəliyin 1-5-ci günündə",
      E: "Xəstəliyin 5-ci həftəsində",
    },
    correctAnswer: "A",
  },
  {
    question: "735. Mikroorqanizmlər üçün optimal pH hansıdır?",
    options: {
      A: "7.8-8.0",
      B: "7.2-7.4",
      C: "9.1-10",
      D: "8.1-9.0",
      E: "6.8-7.8",
    },
    correctAnswer: "A",
  },
  {
    question: "736. Yaxmaların qurudulması harada aparılır?",
    options: {
      A: "Otaq temperaturunda havada",
      B: "Günəş şüası altında",
      C: "Kox aparatında",
      D: "Paster peçində",
      E: "Avtoklavda",
    },
    correctAnswer: "A",
  },
  {
    question: "737. Şüşə qabları sterilizasiyaya necə hazırlayırlar?",
    options: {
      A: "Silinir",
      B: "Yuyulur, silinir",
      C: "Qurudulur",
      D: "Qaynadılır, qurudulur",
      E: "Yuyulur, qurudulur, kağıza bükülür",
    },
    correctAnswer: "E",
  },
  {
    question:
      "738. Kəskin süzənəyin diaqnozunda hansı müayinə üsulundan istifadə edilir?",
    options: {
      A: "Mikrobioloji",
      B: "Bioloji",
      C: "Allergik",
      D: "Mikroskopik",
      E: "Seroloji",
    },
    correctAnswer: "D",
  },
  {
    question: "739. Morfoloji quruluşuna görə stafilokoklar nə formadadır?",
    options: {
      A: "Paxlaya oxşar diplokokdur",
      B: "Tetrakokdur",
      C: "Lanset şəkilli diplokokdur",
      D: "Üzüm salxımına bənzərdir",
      E: "Sarsindir",
    },
    correctAnswer: "D",
  },
  {
    question:
      "740. Difteriyanın profilaktikasında immunlaşdırma üçün hansı vaksindən istifadə olunur?",
    options: {
      A: "Elbert-Qaysk diri vaksini",
      B: "BCJ",
      C: "AGDT",
      D: "Autovaksin",
      E: "Serumlu preparat",
    },
    correctAnswer: "C",
  },
  {
    question:
      "741. Vərəmin spesifik profilaktikasında hansı vaksindən istifadə edilir?",
    options: {
      A: "BCJ",
      B: "Poliomielit vaksini",
      C: "Autovaksin",
      D: "Elbert-Qaysk",
      E: "AGDT",
    },
    correctAnswer: "A",
  },
  {
    question: "742. Bakterial ilgəklər necə sterilizasiya olunur?",
    options: {
      A: "Termostatda saxlanmaqla",
      B: "Buxarla",
      C: "Quru isti ilə",
      D: "Spirt və ya qaz lampası alovunda",
      E: "Qaynatmaqla",
    },
    correctAnswer: "D",
  },
  {
    question: "743. Pipetkaların yuxarı ucuna nə üçün pambıq taxılır?",
    options: {
      A: "Material ağıza daxil olmasın",
      B: "Pipetka steril qalsın",
      C: "Təkrar istifadə etmək olsun",
      D: "Pipetkanın içindəki material qurumasın",
      E: "Pipetka sınmasın",
    },
    correctAnswer: "A",
  },
  {
    question: "744. Romanovski-Gimza boyağının tərkibi nədən ibarətdir?",
    options: {
      A: "Qliserin",
      B: "Spirt",
      C: "Metilen göyü",
      D: "Azur, eozin və metilen göyü",
      E: "Gensian violet",
    },
    correctAnswer: "D",
  },
  {
    question: "745. Nikiforov məhlulunun tərkibi nədən ibarətdir?",
    options: {
      A: "Əsası fuksin",
      B: "Kalium yod",
      C: "Qliserin",
      D: "Etil spirti ilə efirin bərabər miqdarda qarışığı",
      E: "Distillə suyu",
    },
    correctAnswer: "D",
  },
  {
    question: "746. Sinev kağızından hansı boyama üsulunda istifadə edilir?",
    options: {
      A: "Neysser",
      B: "Hins-Burri",
      C: "Qram",
      D: "Sil-Nilsen",
      E: "Ojeşko",
    },
    correctAnswer: "C",
  },
  {
    question: "747. Sinev üsulunda filtr kağızına hansı boyaq hopdurulur?",
    options: {
      A: "Pfeyffer fuksini",
      B: "Lüqol məhlulu",
      C: "Gensian-violet",
      D: "Metilen göyü",
      E: "Spirt",
    },
    correctAnswer: "C",
  },
  {
    question: "748. Anaerob bakteriyaları hansı cihazlarda yetişdirmək olar?",
    options: {
      A: "Soyuducuda",
      B: "Kox aparatında",
      C: "Paster peçində",
      D: "Avtoklavda",
      E: "Stasionar anaerostatda",
    },
    correctAnswer: "E",
  },
  {
    question:
      "749. Anaerob bakteriyaları becərmək üçün anaerob şərait necə yaradılır?",
    options: {
      A: "Mühit olduğu kimi qalır",
      B: "Mühitə qan əlavə olunur",
      C: "Qidalı mühitin daxilindən oksigen çıxarılmalıdır",
      D: "Qidalı mühitə vitaminlər əlavə olunur",
      E: "Qidalı mühitə oksigen əlavə olunmalıdır",
    },
    correctAnswer: "C",
  },
  {
    question: "750. Canlı orqanizmin ən xırda vahidi nədir?",
    options: {
      A: "Tonofibrillər",
      B: "Miofibrillər",
      C: "Hüceyrə",
      D: "Liflər",
      E: "Toxuma",
    },
    correctAnswer: "C",
  },

  {
    question: "751. Hüceyrənin əsas hissələri hansılardır?",
    options: {
      A: "Vokuolalar, ribosom, mitoxondrialar",
      B: "Plastidlər, sitoplazma, nüvəcik",
      C: "Qlaf, nüvə, sitoplazma",
      D: "Nüvə, lizasom, piqment",
      E: "Piqment, vokuolalar",
    },
    correctAnswer: "C",
  },
  {
    question: "752. Hüceyrənin qlafı neçə qatdan ibarətdir?",
    options: {
      A: "2 qatdan",
      B: "3 qatdan",
      C: "5 qatdan",
      D: "1 qatdan",
      E: "4 qatdan",
    },
    correctAnswer: "B",
  },
  {
    question: "753. Hüceyrənin qlafının hansı qatı lipidlərdən təşkil olunub?",
    options: {
      A: "Xarici və daxili",
      B: "Orta",
      C: "Xarici",
      D: "Daxili",
      E: "Selikli",
    },
    correctAnswer: "B",
  },
  {
    question: "754. Hüceyrə qlafının neçə qatı zülallardan təşkil olunub?",
    options: {
      A: "Orta və daxili qat",
      B: "Daxili və xarici",
      C: "Daxili özlikli qat",
      D: "Orta əzələ qatı",
      E: "Xarici, orta qatı",
    },
    correctAnswer: "B",
  },
  {
    question: "755. Sitoplazmanın neçə faizini su təşkil edir?",
    options: {
      A: "100",
      B: "70",
      C: "60",
      D: "80",
      E: "90",
    },
    correctAnswer: "E",
  },
  {
    question: "756. Üzvi maddələr sitoplazmanın neçə faizini təşkil edir?",
    options: {
      A: "15%",
      B: "20%",
      C: "7%",
      D: "5%",
      E: "10%",
    },
    correctAnswer: "C",
  },
  {
    question: "757. Hüceyrənin neçə faizini qeyri-üzvi maddələr təşkil edir?",
    options: {
      A: "3%",
      B: "8%",
      C: "6%",
      D: "15%",
      E: "10%",
    },
    correctAnswer: "A",
  },
  {
    question: "758. Sitoplazma hansı halda olur?",
    options: {
      A: "Yumşaq, sərt",
      B: "Bərk, sərt",
      C: "Yarım maye, kolloid",
      D: "Maye, yumşaq",
      E: "Bərk, kolloid",
    },
    correctAnswer: "C",
  },
  {
    question: "759. Nüvəsiz hüceyrə hansıdır?",
    options: {
      A: "Eritrosit",
      B: "Plazmosit",
      C: "Trombosit",
      D: "Histosit",
      E: "Leykosit",
    },
    correctAnswer: "A",
  },
  {
    question: "760. Hüceyrədə nüvənin əsas vəzifəsi nədən ibarətdir?",
    options: {
      A: "Çoxalma",
      B: "Qidalanma",
      C: "Qıcıqlanma",
      D: "İfrazat",
      E: "Tənəffüs",
    },
    correctAnswer: "A",
  },
  {
    question:
      "761. Nüvənin tərkibində olan hansı maddələr boyağı yaxşı qəbul edir?",
    options: {
      A: "Zülallar",
      B: "Xromatin",
      C: "Karioplazma",
      D: "Yağlar",
      E: "Karbohidratlar",
    },
    correctAnswer: "B",
  },
  {
    question: "762. DNT hüceyrənin hansı hissəsində yerləşir?",
    options: {
      A: "Sitoplazmada",
      B: "Qlafda",
      C: "Lizosomda",
      D: "Ribosomda",
      E: "Nüvədə",
    },
    correctAnswer: "E",
  },
  {
    question: "763. RNT hüceyrənin hansı strukturunda yerləşir?",
    options: {
      A: "Nüvəcikdə",
      B: "Sitoplazmada",
      C: "Nüvədə",
      D: "Lizosomda",
      E: "Mitoxondridə",
    },
    correctAnswer: "A",
  },
  {
    question: "764. Orqanizmində neçə növ toxuma vardır?",
    options: {
      A: "7",
      B: "4",
      C: "6",
      D: "8",
      E: "21",
    },
    correctAnswer: "B",
  },
  {
    question:
      "765. Maddələri bir mühitdən digər mühitə keçirən toxuma hansıdır?",
    options: {
      A: "Sinir",
      B: "Qan",
      C: "Epitel",
      D: "Birləşdirici",
      E: "Əzələ",
    },
    correctAnswer: "C",
  },
  {
    question: "766. Regenerasiya prosesi hansı toxuma növündə daha fəaldır?",
    options: {
      A: "Epitel",
      B: "Əzələ",
      C: "Sinir",
      D: "Sümük",
      E: "Birləşdirici",
    },
    correctAnswer: "A",
  },
  {
    question: "767. Hansı toxuma hüceyrələrində tonofibrillər vardır?",
    options: {
      A: "Sinir toxumasında",
      B: "Qığırdaqda",
      C: "Epitel toxumasında",
      D: "Əzələ toxumasında",
      E: "Birləşdirici toxumada",
    },
    correctAnswer: "C",
  },
  {
    question:
      "768. Hansı üzvlərin epitel hüceyrələrində kirpikciklər yerləşir?",
    options: {
      A: "Həzm yollarında",
      B: "Böyrəklərdə",
      C: "Tənəffüs yollarında",
      D: "Dalaqda",
      E: "Qaraciyərdə",
    },
    correctAnswer: "C",
  },
  {
    question: "769. Təkqatlı yastı epitel hüceyrələri necə adlanır?",
    options: {
      A: "Endoteli",
      B: "Mezoderma",
      C: "Endoderma",
      D: "Mezoteli",
      E: "Mezenxim",
    },
    correctAnswer: "D",
  },
  {
    question: "770. Hansı toxuma daxili mühit toxuması adlanır?",
    options: {
      A: "Epitel",
      B: "Əzələ",
      C: "Qığırdaq",
      D: "Sinir",
      E: "Birləşdirici",
    },
    correctAnswer: "E",
  },
  {
    question:
      "771. Kövşək birləşdirici toxumanın ara maddəsini hansı liflər təşkil edir?",
    options: {
      A: "1,3,5",
      B: "1,3,6",
      C: "2,3,4",
      D: "4,5,6",
      E: "1,2,4",
    },
    correctAnswer: "B",
  },
  {
    question: "772. Qan damarlarını hansı birləşdirici toxuma əhatə edir?",
    options: {
      A: "Sümük-qığırdaq",
      B: "Kövşək",
      C: "Sərt lifli",
      D: "Sümük",
      E: "Qığırdaq",
    },
    correctAnswer: "B",
  },
  {
    question:
      "773. Hamiləlikdə qidanın həzm prosesində hansı hüceyrələrin sayı artır?",
    options: {
      A: "Plazmatik hüceyrələr",
      B: "Tosqun hüceyrələr",
      C: "Piqment hüceyrələri",
      D: "Makrofaq hüceyrələri",
      E: "Piy hüceyrələri",
    },
    correctAnswer: "B",
  },
  {
    question:
      "774. Traxeyanın, bronxların qişasını hansı birləşdirici toxuma təşkil edir?",
    options: {
      A: "Kövşək",
      B: "Kövşək və qığırdaq",
      C: "Sərt",
      D: "Qığırdaq",
      E: "Sümük",
    },
    correctAnswer: "C",
  },
  {
    question:
      "775. Qanın plazmasındakı hansı maddələr qanın laxtalanmasında iştirak etmir?",
    options: {
      A: "Albuminlər",
      B: "Trombokinaza",
      C: "Qlobulinlər",
      D: "Fibrinogen",
      E: "Azot qalığı",
    },
    correctAnswer: "E",
  },
  {
    question: "776. Normal halda qanda neçə eritrosit olmalıdır?",
    options: {
      A: "8,5-9,5 x 10¹²",
      B: "7,5-9,5 x 10¹²",
      C: "6,5-7,5 x 10¹²",
      D: "4,5-5,5 x 10¹²",
      E: "3,5-4,5 x 10¹²",
    },
    correctAnswer: "D",
  },
  {
    question: "777. Eritrositlərə qırmızı rəng verən nədir?",
    options: {
      A: "Albumin",
      B: "Qlobulin",
      C: "Fibronogen",
      D: "Fibrin",
      E: "Hemoqlobin",
    },
    correctAnswer: "E",
  },
  {
    question: "778. Qanda leykositlərin miqdarı nə qədərdir?",
    options: {
      A: "4,5 x",
      B: "7-9 x",
      C: "5-7 x",
      D: "6-8 x",
      E: "5-6 x",
    },
    correctAnswer: "D",
  },
  {
    question: "779. Hansı qan hüceyrəsində əlavə cinsi xromatin toplanır?",
    options: {
      A: "Monositlərdə",
      B: "Neytrofildə",
      C: "Eritrositlərdə",
      D: "Bazofildə",
      E: "Leykositlərdə",
    },
    correctAnswer: "B",
  },
  {
    question: "780. Qan lövhəcikləri hansı elementlərdir?",
    options: {
      A: "Monositlər",
      B: "Eritrositlər",
      C: "Trombositlər",
      D: "Limfositlər",
      E: "Leykositlər",
    },
    correctAnswer: "C",
  },
  {
    question:
      "781. Qanın hansı hüceyrəsi bir-birinə yapışmaq qabiliyyətinə malikdir?",
    options: {
      A: "Limfosit",
      B: "Leykosit",
      C: "Bazofil",
      D: "Trombosit",
      E: "Monosit",
    },
    correctAnswer: "D",
  },
  {
    question:
      "782. Vərəm xəstəlikləri zamanı qanda hansı qan hüceyrələrinin sayı artır?",
    options: {
      A: "Neyrofil",
      B: "Bazofil",
      C: "Monosit",
      D: "Eozonofil",
      E: "Limfosit",
    },
    correctAnswer: "E",
  },
  {
    question:
      "783. Bronxial astma xəstəliyi zamanı hansı qan hüceyrələrin sayı artır?",
    options: {
      A: "Limfosit",
      B: "Neyrofil",
      C: "Monosit",
      D: "Eozonofil",
      E: "Leykosit",
    },
    correctAnswer: "D",
  },
  {
    question: "784. Hialin qığırdağı insan orqanizmində harada yerləşir?",
    options: {
      A: "Fərəqələrdə",
      B: "Sümüklərin üstündə",
      C: "Qida borusunda",
      D: "Oynaq başında, qabırğaların ucunda",
      E: "Qaraciyərdə",
    },
    correctAnswer: "D",
  },
  {
    question: "785. Elastiki qığırdaq harada yerləşir?",
    options: {
      A: "Oynaqlarda",
      B: "Qida borusunda",
      C: "Sümük üstülüyündə",
      D: "Qulaq seyvanında, qırtlaqda",
      E: "Onurğa sütununda",
    },
    correctAnswer: "D",
  },
  {
    question: "786. Hansı hüceyrələr sümük toxumasını qidalandırır?",
    options: {
      A: "Osteoblastlar",
      B: "Osteosit və osteoblastlar",
      C: "Osteoblastlar və osteoklastlar",
      D: "Osteoklastlar",
      E: "Osteositlər",
    },
    correctAnswer: "E",
  },
  {
    question:
      "787. Hansı xüsusi strukturların hesabına əzələ toxuması yığılır?",
    options: {
      A: "Miositlərin",
      B: "Tonofibrillər",
      C: "Miofibrillərin",
      D: "Tonofibrillər və miositlərin",
      E: "Neyrofibrillərin",
    },
    correctAnswer: "C",
  },
  {
    question:
      "788. Aşağıdakılardan hansının hesabına daxili üzvlərin hərəkəti baş verir?",
    options: {
      A: "Ürək əzələsi",
      B: "Miositlər",
      C: "Tonofibrillər",
      D: "Eninə-zolaqlı əzələ",
      E: "Saya əzələ",
    },
    correctAnswer: "E",
  },
  {
    question:
      "789. Əzələ toxumasının hansı xüsusiləşmiş növü bəbəyin genəlib-daralmasında iştirak edir?",
    options: {
      A: "Ürək əzələsi",
      B: "Saya və ürək əzələsi",
      C: "Mioepitel",
      D: "Eninə-zolaqlı əzələ",
      E: "Saya əzələ",
    },
    correctAnswer: "C",
  },
  {
    question: "790. Hansı əzələdə tünd və açıq disklər var?",
    options: {
      A: "Eninə-zolaqlı əzələdə",
      B: "Mioepitel hüceyrələri",
      C: "Ürək əzələsi",
      D: "Ürək əzələsi, mioepitel hüceyrələri",
      E: "Saya əzələdə",
    },
    correctAnswer: "A",
  },
  {
    question: "791. Tünd disklər hansı zülaldan ibarətdir?",
    options: {
      A: "Lipidlər",
      B: "Aktin",
      C: "Pepsin, lipidlər",
      D: "Pepsin",
      E: "Miozin",
    },
    correctAnswer: "E",
  },
  {
    question: "792. Nazik disklər hansı zülaldan ibarətdir?",
    options: {
      A: "Miozin",
      B: "Pepsin",
      C: "Qlobulin",
      D: "Aktin",
      E: "Albumin",
    },
    correctAnswer: "D",
  },
  {
    question:
      "793. Əzələlərdə enerji mənbəyi kimi hansı orqanoid fəaliyyət göstərir?",
    options: {
      A: "Fermentlər",
      B: "Sarkosomlar (mitoxondrilər)",
      C: "Ribosomlar",
      D: "Lizosomlar",
      E: "Piqmentlər",
    },
    correctAnswer: "B",
  },
  {
    question: "794. Aktin miozinlə nə zaman birləşir?",
    options: {
      A: "Əzələ açıldıqda",
      B: "Əzələ tam yığıldıqda",
      C: "Durğunluqda",
      D: "İstirahət zamanı",
      E: "Açıldıqda və istirahət zamanı",
    },
    correctAnswer: "B",
  },
  {
    question: "795. Anastomoz hansı əzələlərdə mövcuddur?",
    options: {
      A: "Mioepitel hüceyrələrində",
      B: "Saya və ürək əzələsində",
      C: "Eninə-zolaqlı əzələdə",
      D: "Ürək əzələsində",
      E: "Saya əzələdə",
    },
    correctAnswer: "D",
  },
  {
    question: "796. Sinir toxuması hansı komponentlərdən ibarətdir?",
    options: {
      A: "Sinir düyünlərdən və sinirlərdən",
      B: "Limflərdən",
      C: "Liflərdən və sinirlərdən",
      D: "Sinirlərdən",
      E: "Sinir hüceyrələrdən, neyroqliyadan",
    },
    correctAnswer: "E",
  },
  {
    question:
      "797. Sinir toxumasının hansı komponenti qıcıqlanır və sinir impulslarını keçirir?",
    options: {
      A: "Neyrositlər",
      B: "Neyroqliya",
      C: "Sinir lifləri",
      D: "Sinirlər və liflər",
      E: "Sinirlər",
    },
    correctAnswer: "A",
  },
  {
    question:
      "798. Sinir toxumasının hansı komponenti dayaq, trofiki, sekretor və qoruyucu funksiyaları yerinə yetirir?",
    options: {
      A: "Neyrositlər",
      B: "Neyroqliya",
      C: "Neyrofibrilyar",
      D: "Sinir ucları",
      E: "Sinir düyünləri",
    },
    correctAnswer: "B",
  },
  {
    question: "799. Dendritlə neyrit birləşəndə neyrosit necə adlanır?",
    options: {
      A: "Bipolyar",
      B: "Multipolyar",
      C: "Bipolyar və unipolyar",
      D: "Yalançı unipolyar",
      E: "Unipolyar",
    },
    correctAnswer: "D",
  },
  {
    question: "800. Neyroqliyanın hansı növündə kirpikcikli hüceyrələr var?",
    options: {
      A: "Mikroqliya və astroqliya",
      B: "Oliqodentdroqliya",
      C: "Mikroqliya",
      D: "Ependemqliya",
      E: "Astroqliya",
    },
    correctAnswer: "D",
  },

  {
    question: "801. Neyroqliyanın hansı növü trofiki funksiyaya malikdir?",
    options: {
      A: "Mikroqliya",
      B: "Astroqliya",
      C: "Oliqodentroqliya",
      D: "Ependimqliya",
      E: "Mikroqliya və astroqliya",
    },
    correctAnswer: "C",
  },
  {
    question: "802. Miokardın hüceyrələri necə adlanır?",
    options: {
      A: "Makrofaqlar",
      B: "Miositlər",
      C: "Fibroblastlar",
      D: "Astrositlər",
      E: "Histositlər",
    },
    correctAnswer: "B",
  },
  {
    question: "803. Damarların divarı neçə qatdan təşkil olunub?",
    options: {
      A: "Orta və xarici qatdan",
      B: "Daxili və orta qatdan",
      C: "Orta qatdan",
      D: "Daxili, xarici qatdan",
      E: "Daxili, orta, xarici qatdan",
    },
    correctAnswer: "E",
  },
  {
    question:
      "804. Əsasən hansı qanyaradıcı üzvlərdə eritrositlər, qranulositlər və trombositlər yaranır?",
    options: {
      A: "Sümük iliyində",
      B: "Limfa düyünlərində",
      C: "Qara ciyərdə",
      D: "Timus vəzində",
      E: "Dalaqda",
    },
    correctAnswer: "A",
  },
  {
    question:
      "805. Aşağıda göstərilən qanyaradıcı orqanlardan hansı əsas üzv hesab olunur?",
    options: {
      A: "Sümük iliyi",
      B: "Timus vəzi",
      C: "Dalaq və timus vəzi",
      D: "Dalaq",
      E: "Limfatik düyünlər",
    },
    correctAnswer: "A",
  },
  {
    question: "806. Hansı toxuma növü qanyarıdıcı üzvləri təşkil edir?",
    options: {
      A: "Lifli birləşdirici toxuma",
      B: "Epitel toxuması",
      C: "Retikulyar toxuması",
      D: "Kövşək birləşdirici toxuma",
      E: "Əsil birləşdirici toxuma",
    },
    correctAnswer: "C",
  },
  {
    question:
      "807. Hansı halda sümük iliyindən qana nüvəli eritrositlər daxil olur?",
    options: {
      A: "Qocalma proseslərində",
      B: "Regenerasiya prosesində",
      C: "Patolojı proseslərdə",
      D: "Boy artımında",
      E: "Fizioloji proseslərdə",
    },
    correctAnswer: "C",
  },
  {
    question: "808. Hansı qanyaradıcı üzvü bioloji filtir adlandırırlar?",
    options: {
      A: "Timus vəzini",
      B: "Limfatik düyünləri",
      C: "Dalağı",
      D: "Dalaq və timus vəzi",
      E: "Sümük iliyini",
    },
    correctAnswer: "B",
  },
  {
    question: "809. Dalağın əsas funksiyası nədən ibarətdir?",
    options: {
      A: "Qan hüceyrələrini toplamaq (depo)",
      B: "Qan hüceyrələrini qorumaq",
      C: "Qan hüceyrələrini udmaq",
      D: "Qan hüceyrələrini parçalamaq",
      E: "Qan hüceyrələrini yaratmaq",
    },
    correctAnswer: "A",
  },
  {
    question:
      "810. Orqanizmdə hansı vəzi ən iri vəzidir və orqan kimi fəaliyyət göstərir?",
    options: {
      A: "Hipofiz",
      B: "Çənəaltı",
      C: "Mədəaltı",
      D: "Dilaltı",
      E: "Qaraciyər",
    },
    correctAnswer: "E",
  },
  {
    question:
      "811. Hansı endokrin vəzi beyin və qabıq qatlarından təşkil olunub?",
    options: {
      A: "Hipofiz vəzi",
      B: "Qalxanabənzər vəzi",
      C: "Qalxanabənzər ətraf vəzi",
      D: "Epifiz vəzi",
      E: "Böyrəküstü vəzi",
    },
    correctAnswer: "E",
  },
  {
    question:
      "812. Mədəaltı vəzinin hansı hüceyrəsi vəzidəki bütün hüceyrələrin 70 % -ni təşkil edir və insulin hormonu hasil edir?",
    options: {
      A: "PP-hüceyrələr",
      B: "A-hüceyrələr",
      C: "D-hüceyrələr",
      D: "A və D-hüceyrələr",
      E: "B-hüceyrələr",
    },
    correctAnswer: "E",
  },
  {
    question:
      "813. Mədəaltı vəzinin hansı hüceyrəsi bütün hüceyrələrin 22 % təşkil edir və qlukaqon hormnu hasil edir?",
    options: {
      A: "D-hüceyrələr",
      B: "B-hüceyrələr",
      C: "A-hüceyrələr",
      D: "PP-hüceyrələr",
      E: "PP və D hüceyrələr",
    },
    correctAnswer: "C",
  },
  {
    question:
      "814. Mədəaltı vəzinin hansı hüceyrəsi digər hüceyrələrin 8 %-ni təşkil edir və samostatin hormonu hasil edir?",
    options: {
      A: "D-hüceyrələr",
      B: "B və A-hüceyrələr",
      C: "A-hüceyrələr",
      D: "PP-hüceyrələr",
      E: "B-hüceyrələr",
    },
    correctAnswer: "A",
  },
  {
    question: "815. Böyrək nefronlarını hansı toxuma təşkil edir?",
    options: {
      A: "Epitel toxuması",
      B: "Sinir toxuması",
      C: "Sümük toxuması",
      D: "Əzələ toxuması",
      E: "Birləşdirici toxuma",
    },
    correctAnswer: "A",
  },
  {
    question:
      "816. Hansı epitel növü sidik kisəsi və sidik axarlarının epitelini təşkil edir?",
    options: {
      A: "Çoxqatlı buynuz",
      B: "Təkqatlı",
      C: "Çoxsıralı",
      D: "Keçid",
      E: "Təksıralı",
    },
    correctAnswer: "D",
  },
  {
    question: "817. Hansı toxuma toxumluğu əhatə edir?",
    options: {
      A: "Birləşdirici toxuma",
      B: "Sinir toxuması",
      C: "Epitel toxuması",
      D: "Əzələ toxuması",
      E: "Sümük toxuması",
    },
    correctAnswer: "A",
  },
  {
    question: "818. Yumurtalığı hansı toxuma növü təşkil edir?",
    options: {
      A: "Epitel və birləşdirici toxuma",
      B: "Sinir toxuması",
      C: "Birləşdirici toxuma",
      D: "Əzələ toxuması",
      E: "Qığırdaq toxuması",
    },
    correctAnswer: "A",
  },
  {
    question: "819. Selikli qişa hansı toxumadan təşkil olunmuşdur?",
    options: {
      A: "Epitel, birləşdirici toxuma",
      B: "Əzələ toxumasından",
      C: "Epitel, birləşdirici və əzələ qatıdan",
      D: "Epitel qatından",
      E: "Epitel əzələ toxumasından",
    },
    correctAnswer: "C",
  },
  {
    question: "820. Selikaltı qatı hansı toxuma təşkil edir?",
    options: {
      A: "Qığırdaq toxuması",
      B: "Əsl birləşdirici toxuma",
      C: "Əzələ toxuması",
      D: "Sinir toxuması",
      E: "Kövşək birləşdirici toxuma",
    },
    correctAnswer: "E",
  },
  {
    question: "821. Həzm sisteminin əzələ qatını hansı əzələ təşkil edir?",
    options: {
      A: "Eninə-zolaqlı və saya əzələ",
      B: "Eninə-zolaqlı əzələ",
      C: "Saya əzələ",
      D: "Saya əzələ və xüsusiləşmiş növlər",
      E: "Ürək əzələsi",
    },
    correctAnswer: "A",
  },
  {
    question:
      "822. Hansı vəzili hüceyrələr mədənin epitelini regenerasiyasını təmin edir?",
    options: {
      A: "Oksifil-pariental hüceyrələr",
      B: "Oksifil endokrin hüceyrələr",
      C: "Ara hüceyrələr",
      D: "Əsas hüceyrələr",
      E: "Endokrin funksialı hüceyrələr",
    },
    correctAnswer: "C",
  },
  {
    question:
      "823. Mədədə hansı vəzi hüceyrəsi zülal şirəsi - pepsinogen ifraz edir?",
    options: {
      A: "Ara və endokrin hüceyrələr",
      B: "Ara hüceyrələr",
      C: "Əsas hüceyrələr",
      D: "Endokrin funksialı hüceyrələr",
      E: "Pariental-okifil hüceyrələr",
    },
    correctAnswer: "C",
  },
  {
    question: "824. Dərinin epidermis qatını hansi toxuma növü təşkil edir?",
    options: {
      A: "Çoxqatlı buynuzlaşmış",
      B: "Çoxsıralı epitel",
      C: "Keçid epiteli",
      D: "Təkqatlı epitel",
      E: "Təksiralı epitel",
    },
    correctAnswer: "A",
  },
  {
    question: "825. Dərinin derma qatını hansı toxuma növü təşkil edir?",
    options: {
      A: "Birləşdirici toxuma",
      B: "Sinir toxuması",
      C: "Epitel toxuması",
      D: "Əzələ toxuması",
      E: "Sümük toxuması",
    },
    correctAnswer: "A",
  },
  {
    question:
      "826. Dəri törəmələri: tər, piy vəziləri, tüklər, dırnaqlar dərinin hansı qatında yerləşir?",
    options: {
      A: "Sinirlərdə",
      B: "Əzələlərdə",
      C: "Dermada",
      D: "Birləşdirici toxumada",
      E: "Epidermisdə",
    },
    correctAnswer: "C",
  },
  {
    question: "827. Traxeyanın selikli qişası hansı epitel növü təşkil edir?",
    options: {
      A: "Çoxqatlı epitel",
      B: "Təkqatlı epitel",
      C: "Təksıralı epitel",
      D: "Vəzili epitel",
      E: "Çoxsıralı kirpikcikli epitel",
    },
    correctAnswer: "E",
  },
  {
    question: "828. Alveolların divarında hansı liflər yerləşir?",
    options: {
      A: "Elastiki liflər",
      B: "Retikulyar liflər",
      C: "Xondrin lifləri",
      D: "Kollogen lifləri",
      E: "Osseyn lifləri",
    },
    correctAnswer: "A",
  },
  {
    question:
      "829. Müayinə üçün götürülmüş materialın kəsiyinin qalınlığı neçə mm olmalıdır?",
    options: {
      A: "12mm",
      B: "15mm",
      C: "10 mm",
      D: "11mm",
      E: "5 mm",
    },
    correctAnswer: "E",
  },
  {
    question: "830. Fiksasiya nədir?",
    options: {
      A: "Toxuma strukturlarının bütövlüklə saxlanması",
      B: "Kəsiklərin parafindən azad edməsi",
      C: "Materialın donan mühitə salınması",
      D: "Kəsiklərin əşya şüşəsinə yapışdırılması",
      E: "Kəsiklərin susuzlaşdırılması",
    },
    correctAnswer: "A",
  },
  {
    question:
      "831. Fiksəedici məhlul, fiksə olunan materialın həcmindən neçə dəfə çox olmalıdır?",
    options: {
      A: "30 dəfə",
      B: "25 dəfə",
      C: "20 dəfə",
      D: "15 dəfə",
      E: "10 dəfə",
    },
    correctAnswer: "C",
  },
  {
    question: "832. Sadə fiksəedicilər hansılardır?",
    options: {
      A: "Senker, Müller məhlulu",
      B: "Novasin-Krılov məhlulu",
      C: "Formalin, etil, metil, aseton",
      D: "Senker, Maksimov məhlulları",
      E: "Maksimov, Buen, Karnua",
    },
    correctAnswer: "C",
  },
  {
    question: "833. Mürəkkəb fiksəedici məhlul hansıdır?",
    options: {
      A: "Aseton",
      B: "Etil spirti",
      C: "Metil spirit",
      D: "Bouin məhlulu",
      E: "Formalin",
    },
    correctAnswer: "D",
  },
  {
    question: "834. Xüsusi histoloji kəsikləri hazırlayan cihaz necə adlanır?",
    options: {
      A: "Termostat",
      B: "Mikroskop",
      C: "Sentrifuqa",
      D: "Kriosat",
      E: "Mikrotom",
    },
    correctAnswer: "E",
  },
  {
    question: "835. Materialı nədən azad etmək üçün yuyurlar?",
    options: {
      A: "Qliserindən",
      B: "Parafindən",
      C: "Zəhərli maddələrdən",
      D: "Selluloiddən",
      E: "Fiksəedicilərin qalıqların çöküntülərindən",
    },
    correctAnswer: "E",
  },
  {
    question: "836. Preparatları nə üçün rəngləyirlər?",
    options: {
      A: "Dekansizlətmək üçün",
      B: "Kəsiklərdən donan məhlulları çıxartmaq üçün",
      C: "Toxuma və hüceyrə quruluşunu mikroskopda yaxşı görünsün deyə",
      D: "Toxuma kəsiyini susuzlandırmaq üçün",
      E: "Donan mühitdə saxlamaq üçün",
    },
    correctAnswer: "C",
  },
  {
    question:
      "837. Analətrafı nahiyyənin müayinəsi üçün hazırlanmış pambıq tampon hansı məhlulda isladılır?",
    options: {
      A: "50 %-li qliserin, 1%-li çay sodası",
      B: "10 %-li HCl",
      C: "Yuyucu toz məhlulu",
      D: "ZnSO4",
      E: "MgSO4",
    },
    correctAnswer: "A",
  },
  {
    question:
      "838. Plazmodium falciparumun (tropik malyariya) qamontları hansı formadadır?",
    options: {
      A: "Parçalanmış",
      B: "Kiçik dairəvi",
      C: "Aypara şəkilli",
      D: "İri dairəvi",
      E: "Kiçik oval",
    },
    correctAnswer: "C",
  },
  {
    question:
      "839. Adı çəkilən qurd yumurtalarından hansının örtüyü rəngsizdir?",
    options: {
      A: "Fasiola",
      B: "Enli-lent qurdu",
      C: "Klonorx",
      D: "Ankilostom",
      E: "Paraqonim",
    },
    correctAnswer: "D",
  },
  {
    question:
      "840. Laboratoriyaya müayinə üçün bir neçə material çatdırılıb. Laborant hansı materialın müayinəsindən başlamalıdır?",
    options: {
      A: "İrinli",
      B: "Formalaşmış",
      C: "Yarım formalaşmış",
      D: "Duru patoloji qarışığı olmayan",
      E: "Duru,qanlı-selikli",
    },
    correctAnswer: "E",
  },
  {
    question:
      "841. Bütün helmintlərin yumurtalarını aşkar etmək üçün yararlı olan, hidrofilli sallofon parçalarından istifadə etməklə yerinə yetirilən üsul hansıdır?",
    options: {
      A: "Kato üzrə qalın yaxma",
      B: "Fülleborn",
      C: "Kalantaryan",
      D: "Berman",
      E: "Qoryaçev",
    },
    correctAnswer: "A",
  },
  {
    question:
      "842. Uşaq müalicə olunmasına baxmayaraq daimi olaraq enterobioza yoluxur.Nə üçün?",
    options: {
      A: "Yaxşı yuyulmamış meyvə-tərəvəzlə qidalanır",
      B: "Autoinoaziya baş verir",
      C: "Çirkli oyuncaqlarla oynayır",
      D: "Torpaqla oynayır",
      E: "Çiy su içir",
    },
    correctAnswer: "B",
  },
  {
    question:
      "843. Kato üsulu ilə müayinə zamanı bozumtul-sarı,uzunsov,bir ucunda qabarıq digər ucunda qapaqcıq, içərisində ankosfer olmayan, 75 mkm ölçüdə yumurta aşkar olunub.Bu hansı parazitə məxsusdur?",
    options: {
      A: "Exinokokk",
      B: "Donuz soliteri",
      C: "Öküz soliteri",
      D: "Kiçik lent qurdu",
      E: "Enli-lent qurdu",
    },
    correctAnswer: "E",
  },
  {
    question:
      "844. Laborant müayinə zmanı 7 nəfərlik ailədə 3 uşaqda bizquyruq aşkar edib. Necə etməli?",
    options: {
      A: "Digər 4 nəfəri müayinə etmək",
      B: "Ailənin bütün üzvlərini müalicəyə cəlb etmək",
      C: "Uşaqları müalicə etmək",
      D: "Uşaqların paltarını dezinfeksiya etmək",
      E: "Uşaqları ailədən ayırmaq",
    },
    correctAnswer: "B",
  },
  {
    question:
      "845. Xəstədə tenioz aşkar edilib. Laborant hansı müayinə üsulunu seçir?",
    options: {
      A: "İsupov-Proxorov",
      B: "Berman",
      C: "Şurman",
      D: "Xarad və More",
      E: "Nativ yaxma",
    },
    correctAnswer: "E",
  },
  {
    question:
      "846. Laborant müayinə zamanı limonabənzər sarı-qəhvəyi, hər iki qütbündə açıq rəngli cisimciyi olan yumurtaya rast gəlib. Yumurta hansı qurda məxsusdur?",
    options: {
      A: "Metaqonim",
      B: "Paraqonim",
      C: "Şistasom",
      D: "Askarid",
      E: "Tükbaşqurd",
    },
    correctAnswer: "E",
  },
  {
    question:
      "847. Kütləvi müayinələr zamanı nəcisdə strongiolid sürfələrini aşkar etmək üçün hansı üsuldan istifadə olunur?",
    options: {
      A: "Fülleborn",
      B: "Şulman",
      C: "Karto",
      D: "Qoryaçev",
      E: "İsupov və Proxorov",
    },
    correctAnswer: "E",
  },
  {
    question:
      "848. İşlədici qəbul etdikdən sonra xaric olunmuş qurdun öküz teniyası olduğunu laborant necə təyin edə bilir?",
    options: {
      A: "Başcığın üzərində çoxsaylı qarmaqcıqlar yoxdur",
      B: "Başcığın üzərində 22-32 ədəd qarmaqcıq var",
      C: "Uzunluğu 3 metrə qədərdir",
      D: "Hər yetkin buğumda balalığın 8-12 yan şaxəsi var",
      E: "Buğumlar passivdir",
    },
    correctAnswer: "A",
  },
  {
    question:
      "849. Duodenal möhtəviyyatın və ödün götürülməsi zamanı hansı məhluldan istifadə olunur?",
    options: {
      A: "NaOH",
      B: "ZnSO4",
      C: "NaCl",
      D: "HCl",
      E: "33%-li MgSO4",
    },
    correctAnswer: "E",
  },
  {
    question:
      "850. Dizenteriya amöbünün böyük vegetativ formasının xarakterik xüsusiyyəti hansıdır?",
    options: {
      A: "Yalançı ayaqların əmələ gəlməməsi",
      B: "Formalaşmış nəcisdə aşkar edilməsi",
      C: "30-40 mkm ölçüdə olması",
      D: "Sitoplazmada bakteriaların olması",
      E: "Endoplazmasında eritrositin olması",
    },
    correctAnswer: "E",
  },

  {
    question:
      "851. Dizenteriyanın diaqnozu zamanı yaxmalardan biri nəyə görə lüqol məhlulunda hazırlanır?",
    options: {
      A: "Sistaları aşkar etmək üçün",
      B: "Parazitin nüvəsini müəyyən etmək üçün",
      C: "Toxuma formasını aşkar etmək üçün",
      D: "Böyük vegetativ formanı aşkar etmək üçün",
      E: "Amöbü hava qabarcıqlarından fərqləndirmək üçün",
    },
    correctAnswer: "A",
  },
  {
    question: "852. Leyşmaniyozun keçiricisi hansı buğumayaqlıdır?",
    options: {
      A: "Milçək",
      B: "Bitlər",
      C: "Tarakan",
      D: "Birə",
      E: "Mığmığa",
    },
    correctAnswer: "E",
  },
  {
    question:
      "853. Lyambliyanın vegetativ formaları hansı materialda aşkar edilir?",
    options: {
      A: "Bəlğəmdə",
      B: "Qanda",
      C: "Limfa mayesində",
      D: "Duodeal möhtəviyyatda",
      E: "Sidikdə",
    },
    correctAnswer: "D",
  },
  {
    question:
      "854. Bağırsaq trixomonadının cinsiyyət yollarında patogenlik edə bilməməsinə səbəb nədir?",
    options: {
      A: "Hərəkəti zəif olduğu üçün",
      B: "Kiçik ölçüdə olduğu üçün",
      C: "Müxtəlif növlər olduğu və müxtəlif qidalanma şəraitinə uyğunlaşdığı üçün",
      D: "5 qamçılı olduğu üçün",
      E: "Sista əmələ gətirmədiyi üçün",
    },
    correctAnswer: "C",
  },
  {
    question:
      "855. Dördgünlük malyariya zamanı bir eritrositin içərisinə neçə parazit düşür ?",
    options: {
      A: "Bir",
      B: "Dörd",
      C: "Beş, altı",
      D: "Üç",
      E: "Altı, səkkiz",
    },
    correctAnswer: "A",
  },
  {
    question: "856. Hansı qida vasitəsi ilə opistorxla yoluxma baş verir?",
    options: {
      A: "Yumurta ilə",
      B: "Su bitkiləri ilə",
      C: "Mal əti ilə",
      D: "Meyvə-tərəvəz ilə",
      E: "Balıq əti ilə",
    },
    correctAnswer: "E",
  },
  {
    question:
      "857. Romanovski üzrə boyanmış preparatda plazmodiumun nüvəsi hansı rəngə boyanır?",
    options: {
      A: "Tünd qəhvəyi",
      B: "Sarı",
      C: "Tünd boz",
      D: "Qırmızı albalı",
      E: "Qara",
    },
    correctAnswer: "D",
  },
  {
    question:
      "858. Hansı materialın müayinəsi malyariyanın diaqnozunu təsdiqləyir ?",
    options: {
      A: "Limfa mayesi",
      B: "Sidik",
      C: "Bronxial selik",
      D: "Qan",
      E: "Mədə möhtəviyyatı",
    },
    correctAnswer: "D",
  },
  {
    question:
      "859. Berman üsulu zamanı stronqiloid sürfələrinin hərəkəti nəyə əsaslanır?",
    options: {
      A: "Sürfələrin həyatilik qabiliyyətinin təyin edilməsinə",
      B: "NaNO3 məhlulunda aşkar edilməsinə",
      C: "Stronqiloid sürfələrinin istiliyə doğru hərəkət etmə qabiliyyətinə",
      D: "NaCl məhlulunda aşkar edilməsinə",
      E: "Askarid yumurtalarının məhlulun səthində üzməsinə",
    },
    correctAnswer: "C",
  },
  {
    question:
      "860. Aşağıdakılardan hansılar öküz teniyalasının fərqləndirici cəhətləridir?",
    options: {
      A: "Uzunluğu 10 m,buğumları çox enli",
      B: "Baş iri, buğumların sayı 300-500",
      C: "Uzunluğu 5-6 m, buğumları aktiv, balalığın 18-36 yan şaxəsi",
      D: "Balalığın 35-40 yan şaxəsi",
      E: "Başın diametri 4m, buğumları qısa",
    },
    correctAnswer: "C",
  },
  {
    question:
      "861. Xəstə sərbəst olaraq qurd buğumlarının düz bağırsaqdan çıxdığını müşahidə edir. Hansı helmintozdan şübhələnmək olar?",
    options: {
      A: "Humenolepidozdan",
      B: "Teniozdan",
      C: "Teniarinxozdan",
      D: "Enterebiozdan",
      E: "Askaridozdan",
    },
    correctAnswer: "C",
  },
  {
    question:
      "862. Xəstənin laboratoriyaya çatdırdığı qurd buğumunun uzunluğu 10-12 mm, eni 5-6 mm, balalığın 8-12 yan şaxəsi olub, içərisində 50 minə qədər yumurta vardır. Buğum hansı helmintə aiddir?",
    options: {
      A: "Alveokokk",
      B: "Kiçik lent qurdu",
      C: "Donuz teniyası",
      D: "Öküz teniyası",
      E: "Exinokokk",
    },
    correctAnswer: "C",
  },
  {
    question:
      "863. Öd və duodenal möhtəviyyat selikli və irinli olarsa, onlara nə əlavə edilməklə sentrifuqlaşdırılır?",
    options: {
      A: "ZnSO4 ilə",
      B: "Spirt ilə",
      C: "NaCl ilə",
      D: "Kükürd efiri ilə",
      E: "Süd turşusu ilə",
    },
    correctAnswer: "D",
  },
  {
    question:
      "864. Bəlğəmin Lüqol məhlulu ilə boyanmış nativ yaxmasında laborant hansı ibtidailəri aşkar edir?",
    options: {
      A: "Leyşmaniya",
      B: "Pnevmasista, trixomonad, amöb",
      C: "Plazmodiumlar",
      D: "Lyambliya",
      E: "Sarkosista",
    },
    correctAnswer: "B",
  },
  {
    question:
      "865. Nəcisin müayinəsində yumurtasına rast gəlinmir. Ancaq qurdun düz bağırsağından çıxması, qaşınma əmələ gətirməsi müşahidə edilmişdir. Söhbət hansı helmintdən gedir?",
    options: {
      A: "Strongiloid",
      B: "Tükbaş qurd",
      C: "Askarid",
      D: "Bizquyruq",
      E: "Ankilostom",
    },
    correctAnswer: "D",
  },
  {
    question:
      "866. Dəri üzərində olan “qoturluq” elementlərinin qaşınıb götürülməsi üçün hansı vasitələrdən istifadə edilir?",
    options: {
      A: "Pipet",
      B: "Tənzif",
      C: "Pambıq",
      D: "Kibrit çöpü",
      E: "Skalpel, Folkman qaşığı, ülgüc",
    },
    correctAnswer: "E",
  },
  {
    question:
      "867. Amöb dizenteriyalı xəstənin əşyaları və yataq dəsti necə zərərsizləşdirilir?",
    options: {
      A: "KMnnO4 məhlulu ilə",
      B: "NaCL məhlulu ilə",
      C: "3%-li lizol məhlulu ilə",
      D: "96%-li spirtlə",
      E: "HCl məhlulu ilə",
    },
    correctAnswer: "C",
  },
  {
    question:
      "868. İbtidailərə görə nativ yaxmanın hazırlanmasında hansı məhluldan istifadə olur?",
    options: {
      A: "Etanol",
      B: "Metanol",
      C: "Sirkə turşusu",
      D: "NaCl",
      E: "Qliserin",
    },
    correctAnswer: "D",
  },
  {
    question:
      "869. Variantlarda göstərilən sistalardan hansı bağırsaq amöbünə (Entamoeba Coli) aiddir?",
    options: {
      A: "6 nüvəli",
      B: "8 nüvəli",
      C: "3 nüvəli",
      D: "5-6 nüvəli",
      E: "4 nüvəli",
    },
    correctAnswer: "B",
  },
  {
    question:
      "870. Dəri leyşmaniozuna görə hazırlanmış nativ yaxmanın boyanması hansı üsulla aparılır?",
    options: {
      A: "Sil Nilsen üsulu ilə",
      B: "Lyüqol ilə",
      C: "Heydenhayn üsulu ilə",
      D: "Romanovski üsulu ilə",
      E: "Metilen göyü ilə",
    },
    correctAnswer: "D",
  },
  {
    question: "871. İki nüvəsi və 4 cüt qamçısı olan ibtidai hansıdır?",
    options: {
      A: "Trixomonad",
      B: "Triponosom",
      C: "Leyşmaniya",
      D: "Lyambliya",
      E: "Balantidiya",
    },
    correctAnswer: "D",
  },
  {
    question:
      "872. Cinsiyyət yollarının trixomonozu zamanı hansı material müayinə edilir?",
    options: {
      A: "Limfa düyünləri punktatı",
      B: "Bəlğəm",
      C: "Nəcis",
      D: "Qan",
      E: "Uşaqlıq yolu ifrazatı",
    },
    correctAnswer: "E",
  },
  {
    question:
      "873. Qan yaxması preparatında laborant Plazmodium-falsiparum (tropik) növünün morula mərhələsində neçə merazoid aşkar edir?",
    options: {
      A: "5-6",
      B: "12-24",
      C: "10-13",
      D: "8-10",
      E: "2-4",
    },
    correctAnswer: "B",
  },
  {
    question:
      "874. Qoryaçev üsulunu hansı məhluldan istifadə etməklə tətbiq edirlər?",
    options: {
      A: "50%-li qliserin",
      B: "HCl-məhlulu",
      C: "NaSO4-məhlulu",
      D: "NaCl-doymuş məhlulu və su",
      E: "Efir və spirt",
    },
    correctAnswer: "D",
  },
  {
    question:
      "875. Hansı xəstəliklər zamanı duodenal möhtəviyyatın müayinəsi aparılır?",
    options: {
      A: "Askaridoz",
      B: "Opistarxoz",
      C: "Trixosefalyoz",
      D: "Enterobioz",
      E: "Şistosomoz",
    },
    correctAnswer: "B",
  },
  {
    question:
      "876. Bu helmintlərdən hansı qara ciyərin öd yollarında parazitlik edir?",
    options: {
      A: "Fassiola",
      B: "Bizquyruq",
      C: "Paraqonium",
      D: "Şistosom",
      E: "Nanotiet",
    },
    correctAnswer: "A",
  },
  {
    question:
      "877. Hansı zənginləşdirmə üsulunun tətbiqi zamanı helmint yumurtalarını aşkar etmək üçün həm məhlul, həm də çöküntü tədqiq edilir?",
    options: {
      A: "Flotasiya",
      B: "Fülleborn",
      C: "Çökdürmə",
      D: "Kato",
      E: "Berman",
    },
    correctAnswer: "B",
  },
  {
    question:
      "878. Buğumunun eni uzunluğundan çox olan, ölçüsü 10-12 metr olan helmint hansıdır?",
    options: {
      A: "Kiçik lent qurdu",
      B: "Enli lent qurdu",
      C: "Exinokokk",
      D: "Donuz teniyası",
      E: "Öküz teniyası",
    },
    correctAnswer: "B",
  },
  {
    question: "879. Teniarinxozun diaqnostik üsullarından biri hansıdır?",
    options: {
      A: "Anusətrafı nahiyədə qaşıntı materialının götürülməsi",
      B: "Qoryaçev",
      C: "Berman",
      D: "Şulınan fırlatma",
      E: "Duodenal zondlama",
    },
    correctAnswer: "A",
  },
  {
    question: "880. Romanovski boyağının tərkibi hansıdır?",
    options: {
      A: "Azur,metien abısı",
      B: "Azur, eozin, etanol, qliserin",
      C: "Lüqol məhlulu,eozin",
      D: "NaCl və qliserin",
      E: "Efir,metil spirti",
    },
    correctAnswer: "B",
  },
  {
    question: "881. İnsanın opistorla yoluxması necə baş verir?",
    options: {
      A: "Krab və xərçənglə",
      B: "Donuz əti",
      C: "Çiy mal əti ilə",
      D: "Çiy və yaxşı duzlanmamış balıq əti ilə",
      E: "Torpaqdan,çirkli əllərlə",
    },
    correctAnswer: "D",
  },
  {
    question:
      "882. Askaridin sürfələrinin ağciyərdə inkişaf mərhələsinın diaqnozu hansı materialın müayinəsinə əsasən qoyulur?",
    options: {
      A: "Nəcis",
      B: "Bəlğəm",
      C: "Qan",
      D: "Limfa mayesi",
      E: "Sidik",
    },
    correctAnswer: "B",
  },
  {
    question:
      "883. Entomoeba Coli-nin vegetativ formasını xarakterizə edən əlamətlər:",
    options: {
      A: "Sitoplazmasında göbələk, mikroorqanizmlər, qida hissəcikləri olur, eritrositlər olmur",
      B: "Sista əmələ gətirmir",
      C: "Nüvəsi görünmür",
      D: "Ölçüsü 40-80 mkm-dir",
      E: "12 barmaq bağırsaqla qidalanır",
    },
    correctAnswer: "A",
  },
  {
    question:
      "884. Laborant fassiolanın yumurtasını aşkar edib. Lakin şəxs fassialyoza yoluxmayıb. Bu nə deməkdir?",
    options: {
      A: "Bitki hüceyrələridir",
      B: "Yumurtalar tranzit olaraq insan orqanizmə keçə bilib",
      C: "Toxuma heceyrələridir",
      D: "Qida hissəcikləridir",
      E: "Yumurtalar orqanizmə meyvə-tərəvəz ilə daxil olub",
    },
    correctAnswer: "B",
  },
  {
    question:
      "885. Nə üçün himenolepidozun laborator diaqnostikası zamanı xəstəyə fenasol və purgen təyin edilir, sonra müayinə aparılır?",
    options: {
      A: "İşlədici kimi",
      B: "Müayinənin effekliliyini artırmaq üçün",
      C: "Yumurtaların çoxlu miqdarda aşkar olunması üçün",
      D: "Qurdun strobilasını dağıtmaq üçün",
      E: "Bütün cavablar düzdür",
    },
    correctAnswer: "E",
  },
  {
    question:
      "886. Vegetativ formasının uzunluğu 30-150 mkm, eni 30-100 mkm olan və insanın ən iri ibtidai paraziti aşağıdakılardan hansı ola bilər?",
    options: {
      A: "Balantidiya",
      B: "Bağırsaq amöbü",
      C: "Trixomonad",
      D: "Lyambliya",
      E: "Leyşmaniya",
    },
    correctAnswer: "A",
  },
  {
    question:
      "887. Dəri leyşmaniyozunun tədqiqi zamanı yalnız deformasiyaya uğramış və dağılmış törədicilərin aşkar edilməsi nəyi göstərir?",
    options: {
      A: "Materialın sağalma dövründə götürülməsini",
      B: "Sağlam toxumadan götürülməsini",
      C: "Materialın xoranın üzərindən götürülməsini",
      D: "Xəstəliyin ilk stadiyası zamanı götürülməsini",
      E: "Materialın irinli nahiyədən götürülməsini",
    },
    correctAnswer: "E",
  },
  {
    question: "888. Cinsiyyət yolları trixomonadının ölçüsü nə qədərdir?",
    options: {
      A: "30-430 mkm",
      B: "10-15 mkm",
      C: "8-15 mkm",
      D: "25-35 mkm",
      E: "14-30 mkm",
    },
    correctAnswer: "E",
  },
  {
    question:
      "889. Öd və duodenal möhtəviyyatda hansı ibtidai parazitin vegetativ mərhələsi aşkar edilir?",
    options: {
      A: "Amöb",
      B: "Balantidiya",
      C: "Trixomonad",
      D: "Leyşmaniya",
      E: "Lyambliya",
    },
    correctAnswer: "E",
  },
  {
    question:
      "890. Lyambliyanın hansı mərhələsi insan üçün invazion hesab edilir?",
    options: {
      A: "3 nüvəli sistası",
      B: "2 nüvəli sistası",
      C: "1 nüvəli sistası",
      D: "Vegetativ forması",
      E: "4 nüvəli sistası",
    },
    correctAnswer: "E",
  },
  {
    question:
      "891. Kontakt helmintozuna yoluxmuş uşaqların dırnaqları altında yumurtalarına rast gəlinən helmint hansıdır?",
    options: {
      A: "Tükbaş qurd",
      B: "Enli lent qurdu",
      C: "Askarid",
      D: "Bizquyruq",
      E: "Nekator",
    },
    correctAnswer: "D",
  },
  {
    question:
      "892. Hansı helmintozun diaqnozu üçün anal ətrafı müayinə üsulu tətbiq edilir?",
    options: {
      A: "Trixosefalyoz",
      B: "Askaridoz",
      C: "Ankitostomitoz",
      D: "Teniorinxoz",
      E: "Stronqiloidoz",
    },
    correctAnswer: "D",
  },
  {
    question: "893. Bu əlamətlərdən hansı opistorxun yumurtasına aiddir?",
    options: {
      A: "130-145 mkm, simmetrik, qapaqlı",
      B: "75 mkm, simmetrik, sarı rəngli",
      C: "26-30 mkm, asimmetrik, sarımtıl-bozumtul rəngli",
      D: "100 mkm, qızılı-qəhvəyi rəngli, qapaqlı",
      E: "25-35 mkm, asimmetrik, qəhvəyi rəngli",
    },
    correctAnswer: "C",
  },
  {
    question: "894. Hansı canlılar alveokokun əsas sahibidir?",
    options: {
      A: "At",
      B: "Tülkü, canavar",
      C: "Ev quşları",
      D: "Dövşan",
      E: "Donuz",
    },
    correctAnswer: "B",
  },
  {
    question:
      "895. Kato üsulu ilə müayinə apararkən kiçik lentqurdunun yumurtalarını aşkar etmək üçün laborant diqqətli olmalıdır. Nə üçün?",
    options: {
      A: "Çoxqatlı örtüyü olduğu üçün",
      B: "Yumurtalar rəngsiz və şəffaf olduğu üçün",
      C: "Yumurtalar kiçik olduğu üçün",
      D: "Yumurtalar tünd rəngli olduğu üçün",
      E: "İçərisində onkosfer olduğu üçün",
    },
    correctAnswer: "B",
  },
  {
    question:
      "896. Uşaq düz bağırsağından bizquyruqların çıxdığını görüb, lakin analətrafı müayinədə yumurtalar aşkar edilmir. Nə üçün?",
    options: {
      A: "Digər helmint ola bilər",
      B: "Müayinə düzgün aparılmayıb",
      C: "Nəcisin müayinəsinə ehtiyac var",
      D: "Bağırsaqda ancaq erkən fərdlərdir",
      E: "Uşaq səhv edib",
    },
    correctAnswer: "D",
  },
  {
    question:
      "897. Iri 130-145 mkm, oval, qapaqcıqlı, qəhvəyi və ya sarı, içərisi yumurta sarısı hüceyrələri ilə dolu olan yumurta hansı helmintə məxsusdur?",
    options: {
      A: "Opistorx",
      B: "Klonorx",
      C: "Fassiola",
      D: "Bizquyruq",
      E: "Askarid",
    },
    correctAnswer: "C",
  },
  {
    question:
      "898. Hansı helmintoz zamanı diaqnostika məqsədi ilə “sorğu üsulu” tətbiq edilir?",
    options: {
      A: "Himenolepidoz",
      B: "Exinokokkoz",
      C: "Trixosefalyoz",
      D: "Teniarinxoz",
      E: "Difillobotsioz",
    },
    correctAnswer: "D",
  },
  {
    question:
      "899. Qızılı – qəhvəyi, oval, 100 mkm ölçüdə, daxilə doğru basılmış qapaqcıqlı iri yumurta hansı helmintə aiddir?",
    options: {
      A: "Paraqonium",
      B: "Sistosom",
      C: "Enlilent qurdu",
      D: "Metaqonium",
      E: "Stranqiloid",
    },
    correctAnswer: "A",
  },
  {
    question: "900. Aşağıdakı qurdların hansının yumurtasında onkosfer olmur?",
    options: {
      A: "Öküz teniyası",
      B: "Kiçik lent qurdu",
      C: "Exinokokk",
      D: "Klonorx",
      E: "Donuz teniyası",
    },
    correctAnswer: "D",
  },

  {
    question:
      "901. Laborant nativ preparatda müxtəlif ölçülü, qara örtüklü, daxili struktursuz və şəffaf törəmələr aşkar etmişdir. Bu törəmələr nədir?",
    options: {
      A: "Tenid yumurtası",
      B: "Amöb sistası",
      C: "Hava qabarcıqları",
      D: "Bizquyruq yumurtası",
      E: "Onkosfer",
    },
    correctAnswer: "C",
  },
  {
    question:
      "902. Ağız trixomonadini müəyyən etmək üçün laborant hansı materialı müayinə etməlidir?",
    options: {
      A: "Limfa mayesi",
      B: "Öd",
      C: "Mədə şirəsi",
      D: "Bronxial selik, bəlğəm",
      E: "Qan",
    },
    correctAnswer: "D",
  },
  {
    question:
      "903. Preparatda aşkar olunmuş ölçüsü 50-60 mkm, bir tərəfi qabarıq, digər tərəfi yastı, içərisində rüşeym olan, şəffaf yumurtalar hansı helmintə aiddir?",
    options: {
      A: "Opistorx",
      B: "Askarid",
      C: "Ankilostom",
      D: "Bizquyruq",
      E: "Klonorx",
    },
    correctAnswer: "D",
  },
  {
    question: "904. Bu məhsulların hansı ilə tenioza yoluxma baş verir?",
    options: {
      A: "Donuz əti",
      B: "Mal əti",
      C: "Balıq əti",
      D: "Meyvə-tərəvəz",
      E: "Konsevslər",
    },
    correctAnswer: "A",
  },
  {
    question:
      "905. Toplanmış zərərli materiallar hansı xüsusi vəsaitlərlə laboratoriyaya çatdırılır?",
    options: {
      A: "Metal futlyar, biks",
      B: "Əl çantaları ilə",
      C: "Yol çantaları ilə",
      D: "Səbətlərlə",
      E: "İri polietilen torbalarla",
    },
    correctAnswer: "A",
  },
  {
    question:
      "906. Laboratoriyada material tədqiqata qədər hansı şəraitdə saxlanılmalıdır?",
    options: {
      A: "Adı temperaturda sorucu şkafda",
      B: "Soyuducuda aşağı temperaturda",
      C: "Pəncərə qarşısında",
      D: "Masa üzərində",
      E: "Dolabda",
    },
    correctAnswer: "A",
  },
  {
    question:
      "907. Laborator müayinə zamanı zərərli material gözə düşərsə onu nə ilə yumalı?",
    options: {
      A: "Kalium-permanqanat məhlulu ilə",
      B: "Adi su ilə",
      C: "NaCl məlulu ilə",
      D: "70%-li etanolla",
      E: "Lüqol məhlulu ilə",
    },
    correctAnswer: "A",
  },
  {
    question:
      "908. Hansı helmintoza görə müayinə apararkən laborant özü yoluxa bilər?",
    options: {
      A: "Opistorxoz",
      B: "Himenolepidoz",
      C: "Klonorxoz",
      D: "Teniarinxoz",
      E: "Difillobotrioz",
    },
    correctAnswer: "B",
  },
  {
    question:
      "909. Laboratoriyada olan xloramin, spirt, karbol turşusu məhlulları nə üçün tətbiq edilir?",
    options: {
      A: "Yaxma hazırlamaq üçün",
      B: "İbtidailəri aşkar etmək üçün",
      C: "Zərərsizləşdirici və dezinfeksiyaedici kimi",
      D: "Helmint yumurtaları aşkar etmək üçün",
      E: "Dərini təmizləmək üçün",
    },
    correctAnswer: "C",
  },
  {
    question: "910. Öküz teniyası ilə insanın yoluxması necə baş verir?",
    options: {
      A: "Çirkli meyvə-tərəvəzlə",
      B: "Çirkli əllərdən",
      C: "Yaxşı bişməmiş donuz əti ilə",
      D: "Yaxşı bişməmiş balıq əti ilə",
      E: "Yaxşı bişməmiş mal əti ilə",
    },
    correctAnswer: "E",
  },
  {
    question: "911. Miozlar nədir?",
    options: {
      A: "Sarkosistanın əmələ gətirdiyi xəstəlikdir",
      B: "Gənələrin keçirdiyi xəstəlikdir",
      C: "Pnevmasistanın əmələ gətirdiyi xəstəlikdir",
      D: "Milçək və mozalan sürfələrinin insan orqanizmində əmələ gətirdiyi xəstəliklərdir",
      E: "Amöbün əmələ gətirdiyi xəstəlikdir",
    },
    correctAnswer: "D",
  },
  {
    question: "912. Bu əlamətlərdən hansı exinokokka aiddir?",
    options: {
      A: "Sürfəsi qovuq şəkillidir",
      B: "Yetkin buğumda 1500-ə qədər yumurta olur",
      C: "Uzunluğu 5 sm",
      D: "Ayrı cinslidir",
      E: "Bədən 100-120 buğumdan ibarətdir",
    },
    correctAnswer: "A",
  },
  {
    question:
      "913. Yumurtaları xüsusi baramacığın içərisində yerləşən qurd aşağıdakılardan hansıdır?",
    options: {
      A: "Donuz teniyası",
      B: "Balqabaqvari qurd",
      C: "Kiçik lent qurdu",
      D: "Alveokokk",
      E: "Öküz teniyası",
    },
    correctAnswer: "B",
  },
  {
    question:
      "914. Qadın cinsiyyət orqanlarına sürünərək daxil olan və orada iltihab prosesinə səbəb olan qurd hansıdır?",
    options: {
      A: "Tükbaş qurd",
      B: "Ankilostom",
      C: "Askarid",
      D: "Bizquyruq",
      E: "Stronqiloid",
    },
    correctAnswer: "D",
  },
  {
    question:
      "915. Sürfələri aktiv hərəkətlə dəridən keçərək orqanizmə daxil olan helmint hansıdır?",
    options: {
      A: "Askarid",
      B: "Bizquyruq",
      C: "Nekator",
      D: "Paraqonim",
      E: "Fassida",
    },
    correctAnswer: "C",
  },
  {
    question:
      "916. Helmint yumurtasını aşkar etmək üçün sentrifuqlaşdırma zamanı sidik çöküntüsünün üzərinə hansı məhlul tökülür?",
    options: {
      A: "Malaxit yaşılı",
      B: "Lüqol və ya Metilen abısı",
      C: "MgSO4",
      D: "ZnSO4",
      E: "NaCl",
    },
    correctAnswer: "B",
  },
  {
    question:
      "917. Bu üsullardan hansı toksoplazmozun diaqnozu zamanı tətbiq edilir?",
    options: {
      A: "Nəcisin müayinəsi",
      B: "Qanda İg G vəİg M anticismlərinin aşkar edilməsi",
      C: "Bəlğəm müayinəsi",
      D: "Zənginləşdirmə üsulları",
      E: "Analətrafı müayinə",
    },
    correctAnswer: "B",
  },
  {
    question:
      "918. Tükbaş qurdun diaqnozu zamanı tətbiq edilən üsullar bunlardan hansı ola bilər?",
    options: {
      A: "Berman üsulu",
      B: "Yapışqanlı lent üsulu",
      C: "Qoryaçev üsulu",
      D: "Kato üsulu, zənginləşdirmə üsulları",
      E: "Şulman-fırlatma",
    },
    correctAnswer: "D",
  },
  {
    question:
      "919. Tünd sarı zülal təbəqəli, mayalanmış, düzgün dalğavari kontura malik yumurta hansı helmintə məxsusdur?",
    options: {
      A: "Kiçik lent qurdu",
      B: "Nekator",
      C: "Klanorx",
      D: "Şistosom",
      E: "Askarid",
    },
    correctAnswer: "E",
  },
  {
    question:
      "920. Helmintozlara görə qanın müayinəsi zamanı hansı qan elementinin normadan artıq olduğu müşahidə edilir?",
    options: {
      A: "Trombosit",
      B: "Monosit",
      C: "Eozinofil",
      D: "Limfosit",
      E: "Eritrosit",
    },
    correctAnswer: "C",
  },
  {
    question:
      "921. Askaridozun bağırsaq stadiyasını aşkar etmək üçün hansı materialın müayinəsi aparılır?",
    options: {
      A: "Mədə möhtəviyyatı",
      B: "Qan",
      C: "Limfa mayesi",
      D: "Nəcis",
      E: "Sidik",
    },
    correctAnswer: "D",
  },
  {
    question:
      "922. Stronqiloidin miqrasiya etmiş sürfələri hansı materialın müayinəsinə əsasən qoyulur?",
    options: {
      A: "Bəlğəmin",
      B: "Mədə şirəsinin",
      C: "Sidiyin",
      D: "Nəcisin",
      E: "Ödün",
    },
    correctAnswer: "A",
  },
  {
    question: "923. Filyariozlara nəyə əsasən diaqnoz qoyulur?",
    options: {
      A: "Qanda yumurtaların tapılmasına",
      B: "Ödün müayinəsinə",
      C: "Sidiyin müayinəsinə",
      D: "Qan yaxması və qalın qan damlası preparatında sürfələrin tapılmasına",
      E: "Nəcisin müayinəsinə",
    },
    correctAnswer: "D",
  },
  {
    question:
      "924. Şistosomun çökdürmə üsulu ilə müayinəsində istifadə olunan həlledici hansı maddələrdən ibarətdir?",
    options: {
      A: "CaCO3",
      B: "Qliserin, NaCl",
      C: "NaN O3, su",
      D: "Qliserin, H2SO4",
      E: "Fenol, spirt",
    },
    correctAnswer: "B",
  },
  {
    question:
      "925. Brumpt üsulu ilə stronqiloid sürfələrini aşkar edərkən nəcisin üzərinə hansı maddə əlavə edilir?",
    options: {
      A: "HCl",
      B: "Qliserin",
      C: "Su",
      D: "NaCl",
      E: "Fenol",
    },
    correctAnswer: "C",
  },
  {
    question:
      "926. Nəcisin Qoryaçev üsulu ilə tədqiqi zamanı sınaq şüşəsində olan NaCl məhlulunun üzərinə hansı qarışıq tökülür?",
    options: {
      A: "NaHCO3 və su",
      B: "Su və qliserin",
      C: "Su və efir qarışığı",
      D: "Su və nəcis qarışığı",
      E: "NCl və su",
    },
    correctAnswer: "D",
  },
  {
    question:
      "927. Zənginləşdirmə üsullarını yerinə yetirərkən preparatın qurumaması üçün üzərinə hansı maddə əlavə olunur?",
    options: {
      A: "Efir",
      B: "Na-bikarbonat",
      C: "50%-li qliserin",
      D: "Spirt",
      E: "Fenol",
    },
    correctAnswer: "C",
  },
  {
    question:
      "928. Fülleborn üsulu ilə nəcisin tədqiqi zamanı məhlulun səthinə toplanmış helmint yumurtalarını yığmaq üçün nədən istifadə edilir?",
    options: {
      A: "Taxta şpatel",
      B: "Qasıq",
      C: "Şüşə çubuq",
      D: "Pipet",
      E: "Spiral şəkilli ilmək",
    },
    correctAnswer: "E",
  },
  {
    question:
      "929. Əşya şüşəsi üzərində hazırlanmış qalın qan damlasının diametri nə qədər olmalıdır?",
    options: {
      A: "2 sm",
      B: "1,5 sm",
      C: "5 sm",
      D: "3 sm",
      E: "4 sm",
    },
    correctAnswer: "B",
  },
  {
    question:
      "930. Quru Romonovski boyağını əzdikdən sonra hansı maddələrlə qarışdırılmalıdır?",
    options: {
      A: "Qliserin , etanol",
      B: "Efir, farmalin",
      C: "MgSO4, su",
      D: "Sirkə turşusu",
      E: "Fenol, su",
    },
    correctAnswer: "A",
  },
  {
    question:
      "931. Romonovski boyağının tam yetişməsi üçün onu hansı temperaturda və neçə gün müddətinə termostata yerləşdirirlər?",
    options: {
      A: "45 °C T-da 12-15 gün",
      B: "37°C T-da 3-5 gün",
      C: "50°C T-da 12-15gün",
      D: "60°C T-da 15-20 gün",
      E: "40°C T-da 6-8 gün",
    },
    correctAnswer: "B",
  },
  {
    question:
      "932. Uzun müddət yüksək temperaturda saxlanmış qalın qan damlası preparatı hansı rəng alır?",
    options: {
      A: "Qara",
      B: "Sarı",
      C: "Mavi",
      D: "Göy",
      E: "Açıq qırmızı",
    },
    correctAnswer: "A",
  },
  {
    question:
      "933. İbtidailər aşkar etmək üçün “asılan damla” üsulunu yerinə yetirərkən istifadə olunan məhlul hansıdır?",
    options: {
      A: "NaCl –in izotonik məhlulu",
      B: "Qliserin",
      C: "Efir",
      D: "Spirt",
      E: "Kapron turşusu",
    },
    correctAnswer: "A",
  },
  {
    question:
      "934. Dizenteriya amöbünün toxuma forması hansı materialda aşkar edilir?",
    options: {
      A: "Ağ ciyər toxumasında",
      B: "Mədə şirəsində",
      C: "Yoğun bağırsaq xorasından hazırlanmış histoloji kəsikdə",
      D: "Nazik bağırsağın selikli qişasında",
      E: "Qara ciyər toxumasında",
    },
    correctAnswer: "C",
  },
  {
    question:
      "935. Qəhvəyi rəngli, içərisində iki dairəvi rüşeym hüceyrəsi olan, qapaqcığı ensiz qütbündə yerləşən yetkin yumurta hansı sorucuya məxsusdur?",
    options: {
      A: "Şistosoma",
      B: "Paraqonimə",
      C: "Metaqonimə",
      D: "Fassiolaya",
      E: "Lansetşəkilli iki ağızlı qurda",
    },
    correctAnswer: "E",
  },
  {
    question:
      "936. Suyun yüksək qələvi reaksiyası (PH 7,3 və çox) zamanı yaxma hansı rəngə boyanır?",
    options: {
      A: "Bozumtul-yaşıl, mavi",
      B: "Tünd göy",
      C: "Bənövşəyi",
      D: "Qırmızı",
      E: "Çəhrayı",
    },
    correctAnswer: "A",
  },
  {
    question:
      "937. Iri, sarımtıl, uzunsov-oval formalı və iri yan çıxıntısı olan yumurta hansı helmintə aiddir?",
    options: {
      A: "Askarid",
      B: "Manson şistomu",
      C: "Bizquyruq",
      D: "Opistarx",
      E: "Donuz teniyası",
    },
    correctAnswer: "B",
  },
  {
    question:
      "938. Hansı müayinə materialında qan şistosomunun yumurtaları axtarılır?",
    options: {
      A: "Öddə",
      B: "Mədə şirəsində",
      C: "Yoğun bağırsağın selikli qişasında",
      D: "Nazik bağırsağın selikli qişasında",
      E: "Sidik çöküntüsündə",
    },
    correctAnswer: "E",
  },
  {
    question:
      "939. Nəcisin flotasiya üsulu ilə müayinəsi zamanı əşya şüşələri bankanın üzərində neçə dəqiqə saxlanılır?",
    options: {
      A: "60-70",
      B: "50-60",
      C: "20-30",
      D: "40-50",
      E: "60-80",
    },
    correctAnswer: "C",
  },
  {
    question:
      "940. Aşağıdakılardan hansı qalın qan damlası preparatına aiddir?",
    options: {
      A: "Eritrositlər hemolizə uğrayır",
      B: "Kiçik böyüdücü ilə mikroskoplaşdırılır",
      C: "Fiksə olunmur",
      D: "Fiksə olunur",
      E: "Prepart çox nazik olmalıdır",
    },
    correctAnswer: "C",
  },
  {
    question:
      "941. Qalın qan yaxması preparatında orta hesabla hər görmə sahəsində neçə leykosit sayılmalıdır?",
    options: {
      A: "30-40",
      B: "10-15",
      C: "40-50",
      D: "25-30",
      E: "20-25",
    },
    correctAnswer: "B",
  },
  {
    question:
      "942. Romanovski boyağının hazırlanması zamanı suyun reaksiyasını təyin etmək üçün suya hansı maddə əlavə olunur?",
    options: {
      A: "Efir",
      B: "NaCl",
      C: "H2SO4",
      D: "Formalin",
      E: "Hematoksillin",
    },
    correctAnswer: "E",
  },
  {
    question:
      "943. Romanovski işçi boyağını alarkən turş reaksiyalı suyu qələviləşdirmək üçün suya hansı maddə əlavə olunur?",
    options: {
      A: "1 %-li natrium bikarbonat",
      B: "HCl",
      C: "H2S",
      D: "Spirt",
      E: "Na2SO4",
    },
    correctAnswer: "A",
  },
  {
    question:
      "944. Cinsiyyət yolları trixonomozunun əlaməti aşağıdakılardan hansıdır?",
    options: {
      A: "Bəlğəm ifrazı",
      B: "Ürək bulanması",
      C: "İrinli-serozli ifrazat",
      D: "İshal",
      E: "Qarında ağrılar",
    },
    correctAnswer: "C",
  },
  {
    question:
      "945. Hansı helmintoz zamanı duodenal möhtəviyyat və nəcis müayinə edilir?",
    options: {
      A: "Askaridoz",
      B: "Şistosomoz",
      C: "Fassialioz",
      D: "Difillobotrioz",
      E: "Tenioz",
    },
    correctAnswer: "C",
  },
  {
    question:
      "946. Toksoplazmozdan şübhələndikdə hansı materialın müayinəsi aparılır?",
    options: {
      A: "Sidik",
      B: "Qan, onurğa beyin mayesi",
      C: "Bəlğəm",
      D: "Nəcis",
      E: "Mədə möhtəviyyatı",
    },
    correctAnswer: "B",
  },
  {
    question: "947. İnsanın difillobotrioza yoluxması necə baş verir?",
    options: {
      A: "Mal əti ilə",
      B: "Çirkli əllərlə",
      C: "Sürfələrlə yoluxmuş balıq əti ilə",
      D: "Krab əti ilə",
      E: "Meyvə tərəvəzlə",
    },
    correctAnswer: "C",
  },
  {
    question:
      "948. Balıqçılar və su təsərrüfatı işçiləri arasında profilaktik tədbirlər hansı helmintoz zamanı aparılır?",
    options: {
      A: "Enterobioz",
      B: "Difillobotrioz",
      C: "Trixinelloz",
      D: "Nekatoroz",
      E: "Askaridoz",
    },
    correctAnswer: "B",
  },
  {
    question:
      "949. Teniarinxozlu xəstə tibb məntəqəsinə müraciət edibsə, tibb işçisi diaqnoz məqsədilə hansı üsuldan istifadə etməlidir?",
    options: {
      A: "Sulman",
      B: "İsupov və Broxorov",
      C: "Sorğu üsulundan",
      D: "Berman",
      E: "Qoryaçev",
    },
    correctAnswer: "C",
  },
  {
    question:
      "950. Profilaktik tədbir olaraq hansı helmintoz zamanı otun, yem sahələrinin insanın nəcisi ilə çirklənməsinin qarşısı alınmalıdır?",
    options: {
      A: "Fassialyoz",
      B: "Paroqonimoz",
      C: "Opistorxoz",
      D: "Teniarinxoz",
      E: "Klonorxoz",
    },
    correctAnswer: "D",
  },
  {
    question:
      "951. Sidikdə urobilin olarsa, Florens sınağı ilə təyin edildikdə hansı rəngli həlqə alınır?",
    options: {
      A: "Çəhrayı",
      B: "Sarı",
      C: "Abı",
      D: "Qəhvəyi",
      E: "Yaşıl",
    },
    correctAnswer: "A",
  },
  {
    question:
      "952. Sidikdə qan piqmenti olarsa Amidopirin sınağında hansı rəng alınır?",
    options: {
      A: "Göy",
      B: "Qırmızı",
      C: "Sarı",
      D: "Bənövşəyi",
      E: "Qara",
    },
    correctAnswer: "D",
  },
  {
    question:
      "953. Sidikdə qan piqmenti təyin edildikdə hansı qaydaya riayət edilməlidir?",
    options: {
      A: "Sidik çalxalanmalıdır",
      B: "Sidik təzə olmalıdır",
      C: "Bütün cavablar doğrudur",
      D: "Qablar tam təmiz olmalıdır",
      E: "Kimyəvi təmiz reaktivdən istifadə olunmalıdır",
    },
    correctAnswer: "C",
  },
  {
    question:
      "954. Sidikdə qan piqmentini təyin etmək üçün hidrogen-peroksidin (H2O2) 3%-li məhlulu necə hazırlanır?",
    options: {
      A: "30 hissə perihidrol, 40 hissə distillə suyu",
      B: "35 hissə perihidrol, 45 hissə distillə suyu",
      C: "2,5 hissə perihidrol, 35 hissə distillə suyu",
      D: "2 hissə perihidrol, 30 hissə distillə suyu",
      E: "3 hissə perihidrol, 27 hissə distillə suyu",
    },
    correctAnswer: "E",
  },
  {
    question:
      "955. Sidikdə urat duzlarını əritmək üçün sidiyə hansı reaktiv damızdırılır?",
    options: {
      A: "Fuşe reaktivi",
      B: "Selena reaktivi",
      C: "Sudan III reaktivi",
      D: "Haynes reaktivi",
      E: "Yaffe reaktivi",
    },
    correctAnswer: "B",
  },
  {
    question:
      "956. Urat duzlarını əritmək üçün Selena reaktivinin tərkibi hansı maddələrdən ibarətdir?",
    options: {
      A: "Pikrin turşusu, bura, su",
      B: "Bura, bor turşusu, distillə suyu",
      C: "Sirkə turşusu, yod, distillə suyu",
      D: "Xlorid turşusu – benzidin, distillə suyu",
      E: "Buzlu sirkə turşusu, sulfat turşusu, su",
    },
    correctAnswer: "B",
  },
  {
    question: "957. Fibrinoliz prosesi nə deməkdir?",
    options: {
      A: "Qan laxtasının yığılması",
      B: "Qan laxtasının həll olması",
      C: "Qanın trombokinazasının əmələ gəlməsi",
      D: "Fibrinogenin fibrinə çevrilməsi",
      E: "Protrombinin trombinə çevrilməsi",
    },
    correctAnswer: "B",
  },
  {
    question:
      "958. Yaranma mexanizmlərindən asılı olaraq hemorragik diatezlər neçə qrupa bölünür?",
    options: {
      A: "5",
      B: "7",
      C: "2",
      D: "4",
      E: "3",
    },
    correctAnswer: "E",
  },
  {
    question:
      "959. Trombositlərin kəmiyyət dəyişkənliyi ilə müşayət olunan xəstəlik necə adlanır?",
    options: {
      A: "Anemiya",
      B: "Hemofiliya",
      C: "Trombositopatiya",
      D: "Trombositopeniya",
      E: "Vaskulit",
    },
    correctAnswer: "D",
  },
  {
    question:
      "960. Trombositlərin keyfiyyət dəyişkənliyi ilə müşayiət olunan xəstəlik necə adlanır?",
    options: {
      A: "Anemiya",
      B: "Leykoz",
      C: "Trombositopatiya",
      D: "Hemofiliya",
      E: "Trombositopeniya",
    },
    correctAnswer: "C",
  },
  {
    question: "961. Trombositlərin adgeziya xüsusiyyəti nə deməkdir?",
    options: {
      A: "Damarlarda qanın normal axımının bərpası",
      B: "Trombositlərin bir-birinə yapışaraq aqreqatlar əmələ gətirməsi",
      C: "Qan laxtasının lizisə uğraması",
      D: "Qan laxtasının yığılması",
      E: "Trombositlərin damarın zədələnmiş sahələrinə yapışması",
    },
    correctAnswer: "E",
  },
  {
    question: "962. Trombositlərin aqreqasiya xüsusiyyəti nə deməkdir?",
    options: {
      A: "Trombositlərin kəmiyyətcə dəyişməsi",
      B: "Trombositlərin keyfiyyətcə dəyişməsi",
      C: "Trombositlərin damarın zədələnmiş sahələrinə yapışması",
      D: "Trombositlərin reflektor spazmının saxlanılmasında iştirakı",
      E: "Trombositlərin bir-birinə yapışaraq toplantılar əmələ gətirməsi",
    },
    correctAnswer: "E",
  },
];
