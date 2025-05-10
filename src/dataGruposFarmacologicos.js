const gruposFarmacologicos = [
  {
    tipo: 'noOpioides',
    nombre: "Analgésicos no opioides",
    texto: "Los analgésicos no opioides son medicamentos comúnmente utilizados para tratar el dolor leve a moderado. A menudo se emplean para dolores musculares, articulares o cefaleas. A diferencia de los opioides, tienen menos riesgo de dependencia.",
    accion: "Actúan principalmente inhibiendo la síntesis de prostaglandinas, compuestos que promueven la inflamación y la sensación de dolor. Esto se logra a través de la inhibición de la ciclooxigenasa (COX), una enzima clave en la producción de estas sustancias."
  },
  {
    tipo: 'opioides',
    nombre: "Analgésicos opioides",
    texto: "Los analgésicos opioides son medicamentos potentes utilizados para el tratamiento del dolor moderado a severo, como en el caso de lesiones graves, cirugías o cáncer. Su uso debe ser supervisado cuidadosamente debido a su alto potencial de abuso y dependencia.",
    accion: "Actúan sobre los receptores opioides en el sistema nervioso central, bloqueando las señales de dolor y alterando la percepción de este. Esto provoca una sensación de euforia y relajación, lo que puede llevar a la adicción si no se usa adecuadamente."
  },
  {
    tipo: 'antiinflamatorios',
    nombre: "Antiinflamatorios",
    texto: "Los antiinflamatorios son medicamentos que se utilizan para reducir la inflamación, aliviar el dolor y bajar la fiebre. Son comunes en el tratamiento de afecciones como artritis, lesiones deportivas y afecciones respiratorias.",
    accion: "Inhiben la acción de las enzimas ciclooxigenasa (COX-1 y COX-2), que son responsables de la producción de prostaglandinas, mediadores clave en el proceso inflamatorio."
  },
  {
    tipo: 'antibioticos',
    nombre: "Antibióticos",
    texto: "Los antibióticos son medicamentos esenciales para combatir infecciones causadas por bacterias. Son ampliamente utilizados en medicina para tratar infecciones respiratorias, urinarias, de la piel y otras. Su uso debe ser apropiado para evitar la resistencia bacteriana.",
    accion: "Actúan matando bacterias o inhibiendo su reproducción al interferir con funciones celulares clave, como la síntesis de proteínas o la replicación del ADN. Dependiendo del antibiótico, pueden atacar paredes celulares bacterianas, proteínas o ácidos nucleicos."
  },
  {
    tipo: 'antidiabeticos',
    nombre: "Antidiabéticos",
    texto: "Los antidiabéticos son medicamentos usados para controlar los niveles de glucosa en sangre, principalmente en personas con diabetes tipo 2. Estos medicamentos mejoran la respuesta del cuerpo a la insulina o aumentan la producción de esta.",
    accion: "Están diseñados para mejorar la sensibilidad a la insulina, estimular la liberación de insulina del páncreas o bloquear la producción de glucosa en el hígado. Algunos incluso retardan la absorción de glucosa en el intestino."
  },
  {
    tipo: 'antihipertensivos',
    nombre: "Antihipertensivos",
    texto: "Los antihipertensivos son fármacos utilizados para tratar la hipertensión (presión arterial alta). Reducen el riesgo de complicaciones graves como infartos, accidentes cerebrovasculares y insuficiencia renal.",
    accion: "Relajan los vasos sanguíneos, mejorando el flujo sanguíneo y reduciendo la presión. Algunos grupos de antihipertensivos actúan inhibiendo la actividad del sistema renina-angiotensina-aldosterona, mientras que otros bloquean los receptores de calcio o actúan sobre los receptores adrenérgicos."
  },
  {
    tipo: 'antipireticos',
    nombre: "Antipiréticos",
    texto: "Los antipiréticos son medicamentos utilizados para reducir la fiebre, comúnmente en infecciones virales o bacterianas. Son esenciales para aliviar el malestar asociado con la fiebre alta.",
    accion: "Actúan sobre el centro termorregulador en el hipotálamo, reduciendo la temperatura corporal elevada. Lo hacen inhibiendo la producción de prostaglandinas, que son responsables de la fiebre."
  },
  {
    tipo: 'antidepresivos',
    nombre: "Antidepresivos",
    texto: "Los antidepresivos son medicamentos utilizados para tratar trastornos del estado de ánimo como la depresión y la ansiedad. Ayudan a equilibrar los neurotransmisores en el cerebro, mejorando el bienestar emocional.",
    accion: "Modifican los niveles de neurotransmisores clave como la serotonina, la noradrenalina y la dopamina. Existen diferentes tipos de antidepresivos, que actúan de manera distinta para regular la función cerebral y aliviar los síntomas de la depresión."
  },
  {
    tipo: 'ansioliticos',
    nombre: "Ansiolíticos",
    texto: "Los ansiolíticos son medicamentos utilizados para reducir la ansiedad y el estrés. Son comúnmente recetados para trastornos de ansiedad generalizada, ataques de pánico y trastornos relacionados.",
    accion: "Actúan sobre los receptores GABA en el cerebro, lo que reduce la actividad neuronal excitatoria. Esto provoca un efecto calmante, ayudando a controlar los síntomas de la ansiedad."
  },
  {
    tipo: 'anticonvulsivantes',
    nombre: "Anticonvulsivantes",
    texto: "Los anticonvulsivantes son medicamentos que se utilizan para prevenir o controlar las convulsiones en trastornos como la epilepsia. También son útiles en el tratamiento de trastornos neurológicos y en el control de dolor crónico.",
    accion: "Modulan la actividad eléctrica en el cerebro, estabilizando la actividad neuronal. Actúan bloqueando canales iónicos o aumentando la inhibición en el cerebro, evitando la propagación de impulsos eléctricos anormales."
  },
  {
    tipo: 'antihistaminicos',
    nombre: "Antihistamínicos",
    texto: "Los antihistamínicos son fármacos usados para tratar reacciones alérgicas, como rinitis, urticaria y otras condiciones relacionadas con la liberación de histamina en el cuerpo.",
    accion: "Bloquean los receptores H1 de la histamina, una sustancia química que se libera durante las reacciones alérgicas. Esto ayuda a reducir los síntomas de picazón, enrojecimiento y congestión nasal."
  },
  {
    tipo: 'anticoagulantes',
    nombre: "Anticoagulantes",
    texto: "Los anticoagulantes son medicamentos que ayudan a prevenir la formación de coágulos sanguíneos. Se utilizan comúnmente en personas con riesgo de trombosis, embolias o enfermedades cardíacas.",
    accion: "Interfieren con el proceso de coagulación de la sangre, inhibiendo la acción de ciertos factores de coagulación o interfiriendo con la conversión de fibrinógeno en fibrina, lo que evita la formación de coágulos."
  },
  {
    tipo: 'broncodilatadores',
    nombre: "Broncodilatadores",
    texto: "Los broncodilatadores son medicamentos utilizados para facilitar la respiración, abriendo las vías respiratorias en enfermedades pulmonares como el asma y la EPOC.",
    accion: "Relajan los músculos de los bronquios y dilatan las vías respiratorias, lo que mejora el flujo de aire hacia los pulmones. Pueden actuar a través de receptores beta-2 adrenérgicos o inhibiendo la actividad de la fosfodiesterasa."
  },
  {
    tipo: 'diureticos',
    nombre: "Diuréticos",
    texto: "Los diuréticos son fármacos que aumentan la eliminación de agua y sal del cuerpo, utilizados comúnmente para tratar la hipertensión, insuficiencia cardíaca y edema.",
    accion: "Actúan sobre los riñones, promoviendo la excreción de sodio y agua. Esto reduce el volumen sanguíneo, lo que a su vez disminuye la presión arterial y el edema."
  },
  {
    tipo: 'antiacidos',
    nombre: "Antiácidos",
    texto: "Los antiácidos son medicamentos utilizados para neutralizar el exceso de ácido gástrico, aliviando síntomas de acidez estomacal y reflujo gastroesofágico.",
    accion: "Reaccionan químicamente con el ácido clorhídrico en el estómago, elevando el pH gástrico y proporcionando alivio de la acidez."
  },
  {
    tipo: 'antipsicoticos',
    nombre: "Antipsicóticos",
    texto: "Los antipsicóticos son medicamentos utilizados para tratar trastornos psiquiátricos graves como la esquizofrenia y el trastorno bipolar. Ayudan a controlar síntomas como alucinaciones y delirios.",
    accion: "Bloquean los receptores de dopamina en el cerebro, lo que reduce la actividad de este neurotransmisor. Algunos también afectan otros neurotransmisores, como la serotonina, para mejorar el estado de ánimo y reducir los síntomas psicóticos."
  },
  {
    tipo: 'antivirales',
    nombre: "Antivirales",
    texto: "Los antivirales son medicamentos utilizados para tratar infecciones causadas por virus. Son esenciales en el tratamiento de enfermedades como la gripe, el VIH y el herpes.",
    accion: "Inhiben la replicación del virus dentro de las células, ya sea bloqueando la entrada del virus en las células, inhibiendo la replicación del ARN o el ADN viral o impidiendo la liberación de nuevos viriones."
  },
  {
    tipo: 'antifungicos',
    nombre: "Antifúngicos",
    texto: "Los antifúngicos son medicamentos utilizados para tratar infecciones causadas por hongos. Son efectivos contra infecciones cutáneas, sistémicas y superficiales.",
    accion: "Actúan destruyendo la membrana celular de los hongos, interfiriendo con la síntesis de ergosterol, un componente esencial en la membrana celular fúngica."
  },
  {
    tipo: 'antiemeticos',
    nombre: "Antieméticos",
    texto: "Los antieméticos son medicamentos que previenen o controlan las náuseas y los vómitos, especialmente en pacientes sometidos a quimioterapia o con trastornos gástricos.",
    accion: "Actúan sobre los centros del vómito en el cerebro o bloquean los receptores involucrados en la percepción de náuseas, como los receptores de serotonina (5-HT3) o dopamina (D2)."
  },
  {
    tipo: 'relajantesMusculares',
    nombre: "Relajantes musculares",
    texto: "Los relajantes musculares son fármacos que ayudan a reducir la rigidez o espasmos musculares, utilizados en condiciones como la esclerosis múltiple, lesiones deportivas o dolor muscular.",
    accion: "Actúan en el sistema nervioso central o directamente en los músculos para disminuir el tono muscular, aliviando la tensión y el dolor asociado a espasmos musculares."
  },
  {
    tipo: 'hipnoticos',
    nombre: "Hipnóticos",
    texto: "Los hipnóticos son medicamentos que inducen y mantienen el sueño, utilizados en el tratamiento del insomnio y otros trastornos del sueño.",
    accion: "Depresionan el sistema nervioso central, aumentando la actividad del neurotransmisor GABA, lo que produce un efecto sedante y facilita el inicio y la duración del sueño."
  },
  {
    tipo: 'inmunosupresores',
    nombre: "Inmunosupresores",
    texto: "Los inmunosupresores son medicamentos utilizados para suprimir la respuesta inmunitaria, principalmente en pacientes que reciben trasplantes de órganos o en enfermedades autoinmunes.",
    accion: "Inhiben la actividad de las células del sistema inmune, previniendo el rechazo de injertos o reduciendo la inflamación en enfermedades autoinmunes."
  },
  {
    tipo: 'antineoplasicos',
    nombre: "Antineoplásicos",
    texto: "Los antineoplásicos son medicamentos utilizados para tratar el cáncer. Actúan deteniendo el crecimiento de las células cancerosas o matándolas.",
    accion: "Actúan interfiriendo con la división celular, inhibiendo la síntesis de ADN, ARN o proteínas en las células cancerosas, lo que detiene su proliferación y provoca su muerte."
  },
  {
    tipo: 'corticoides',
    nombre: "Corticoides",
    texto: "Los corticoides son medicamentos antiinflamatorios potentes que reducen la inflamación y suprimen el sistema inmune. Son usados para tratar diversas condiciones como enfermedades autoinmunes, alergias graves, y enfermedades inflamatorias.",
    accion: "Imitan los efectos de las hormonas corticosteroides producidas por las glándulas suprarrenales, inhibiendo la inflamación y modulación de la respuesta inmune. También son utilizados para prevenir el rechazo en trasplantes de órganos."
  },
  {
    tipo: 'antiparasitarios',
    nombre: "Antiparasitarios",
    texto: "Los antiparasitarios son medicamentos utilizados para tratar infecciones causadas por parásitos, como protozoos, gusanos y ectoparásitos (ej. pulgas, garrapatas). Se utilizan tanto en humanos como en animales para erradicar la presencia de parásitos.",
    accion: "Actúan sobre funciones vitales del parásito, como su metabolismo, su reproducción o la movilidad. Algunos interfieren en la formación de su pared celular, otros afectan la capacidad de los parásitos para metabolizar nutrientes."
  },
  {
    tipo: 'laxantes',
    nombre: "Laxantes",
    texto: "Los laxantes son medicamentos que facilitan la evacuación intestinal y son utilizados para tratar el estreñimiento. Pueden ser de diferentes tipos, como osmóticos, estimulantes, formadores de masa y emolientes.",
    accion: "Estimulando el peristaltismo intestinal (movimiento de los músculos del tracto digestivo), ablandando las heces o aumentando la cantidad de agua en los intestinos, lo que facilita la evacuación. Algunos laxantes también incrementan la motilidad intestinal al interactuar con los músculos lisos."
  },
  {
    tipo: 'antitusivos',
    nombre: "Antitusivos",
    texto: "Los antitusivos son medicamentos utilizados para controlar la tos. Son indicados en casos de tos seca y no productiva, que generalmente es un síntoma de infecciones respiratorias o irritaciones en las vías respiratorias.",
    accion: "Actúan sobre el centro de la tos en el cerebro, inhibiendo la respuesta refleja que provoca la tos. Esto proporciona alivio al evitar la irritación y el malestar causado por la tos constante."
  },
  {
    tipo: 'mucoliticos',
    nombre: "Mucolíticos",
    texto: "Los mucolíticos son medicamentos que ayudan a disolver o fluidificar el moco espeso en las vías respiratorias, facilitando su expulsión y mejorando la respiración. Se utilizan en afecciones respiratorias como la bronquitis, la EPOC o la fibrosis quística.",
    accion: "Rompen los enlaces de las moléculas de moco, reduciendo su viscosidad y facilitando su eliminación a través de la tos. Esto mejora la ventilación pulmonar y disminuye la sensación de dificultad respiratoria."
  },
  {
    tipo: 'vasodilatadores',
    nombre: "Vasodilatadores",
    texto: "Los vasodilatadores son medicamentos que ayudan a expandir los vasos sanguíneos, lo que reduce la presión arterial y facilita el flujo sanguíneo. Son comúnmente usados en pacientes con hipertensión, insuficiencia cardíaca y angina de pecho.",
    accion: "Relajan los músculos lisos de las paredes vasculares, aumentando el diámetro de los vasos sanguíneos. Esto permite una circulación sanguínea más eficiente, reduciendo la presión sobre el corazón y mejorando el flujo de sangre a los órganos."
  },
  {
    tipo: 'antiespasmodicos',
    nombre: "Antiespasmódicos",
    texto: "Los antiespasmódicos son fármacos que se utilizan para aliviar los espasmos o contracciones involuntarias de los músculos lisos, especialmente en el tracto gastrointestinal y urinario. Son útiles en trastornos como el síndrome del intestino irritable y cólicos renales.",
    accion: "Relajan la musculatura involuntaria de los órganos internos, como los músculos del intestino y la vejiga. Esto ayuda a aliviar el dolor y la incomodidad provocados por los espasmos musculares."
  },
  {
    tipo: 'antidemencia',
    nombre: "Antidemencia",
    texto: "Los fármacos antidemencia se utilizan para mejorar los síntomas de las demencias, como el Alzheimer y otros trastornos neurodegenerativos. Estos medicamentos pueden ayudar a retrasar la progresión de los síntomas y mejorar la calidad de vida de los pacientes.",
    accion: "Aumentan los niveles de neurotransmisores como la acetilcolina en el cerebro o protegen las neuronas de la degeneración, mejorando las funciones cognitivas y la memoria. Algunos también actúan bloqueando la acción de proteínas que dañan las células cerebrales."
  }
];

export default gruposFarmacologicos;
