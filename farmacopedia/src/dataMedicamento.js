const medicamentosAnalg = {
  noOpioides: [
    {
      nombreGenerico: 'Paracetamol - No Opioide',
      nombreComercial: 'Dolex®, Panadol®, Acetaminofén MK®',
      efectosSecundariosTexto: 'Náuseas, vómito, malestar estomacal, hepatotoxicidad en dosis altas.',
      cuidados: [
        'No exceder la dosis máxima diaria.',
        'Evaluar función hepática, especialmente en pacientes con antecedentes hepáticos o alcohólicos.',
        'Educar al paciente sobre el riesgo de toxicidad si combina con otros productos que contengan paracetamol.'
      ]
    },
    {
      nombreGenerico: 'Ibuprofeno - No Opioide',
      nombreComercial: 'Advil®, Motrin®, Ibuprofeno MK®',
      efectosSecundariosTexto: 'Dolor gástrico, náuseas, acidez, úlceras gástricas en uso prolongado.',
      cuidados: [
        'Administrar con alimentos para minimizar efectos gástricos.',
        'Controlar función renal en pacientes con enfermedades renales o en tratamiento prolongado.',
        'Observar signos de sangrado digestivo o anemia.'
      ]
    },
    {
      nombreGenerico: 'Ácido acetilsalicílico (Aspirina) - No Opioide',
      nombreComercial: 'Aspirina®, Ecotrin®, Acetilsalicílico MK®',
      efectosSecundariosTexto: 'Gastritis, úlceras gástricas, sangrado gastrointestinal, tinnitus en dosis altas.',
      cuidados: [
        'Evitar en pacientes con antecedentes de úlceras o trastornos hemorrágicos.',
        'No administrar en niños con fiebre (riesgo de síndrome de Reye).',
        'Administrar con alimentos para disminuir irritación gástrica.'
      ]
    }
  ],
  opioides: [
    {
      nombreGenerico: 'Morfina - Opioide',
      nombreComercial: 'Doloral®, Morfina MK®, Morfina Genfar®',
      efectosSecundariosTexto: 'Estreñimiento, somnolencia, náuseas, depresión respiratoria.',
      cuidados: [
        'Monitorear la frecuencia respiratoria (riesgo de depresión respiratoria).',
        'Evaluar el nivel de sedación y estado de conciencia.',
        'Prevenir y tratar el estreñimiento inducido con hidratación, dieta rica en fibra o laxantes.'
      ]
    },
    {
      nombreGenerico: 'Tramadol - Opioide',
      nombreComercial: 'Tramal®, Tramadol MK®, Dolotram®',
      efectosSecundariosTexto: 'Mareo, somnolencia, náuseas, riesgo de convulsiones.',
      cuidados: [
        'Usar con precaución en pacientes con epilepsia o riesgo de convulsiones.',
        'Evitar combinaciones con depresores del sistema nervioso central.',
        'Monitorear signos de dependencia o abuso.'
      ]
    },
    {
      nombreGenerico: 'Fentanilo - Opioide',
      nombreComercial: 'Duragesic®, Fentanilo MK®, Durogesic®',
      efectosSecundariosTexto: 'Depresión respiratoria, bradicardia, somnolencia, estreñimiento.',
      cuidados: [
        'Uso hospitalario preferido, debido a su potencia.',
        'Monitoreo continuo de signos vitales, especialmente respiración.',
        'Evitar el uso en pacientes sin tolerancia previa a opioides potentes.'
      ]
    }
  ],
  antiinflamatorios: [
    {
      nombreGenerico: 'Naproxeno - Antiinflamatorio',
      nombreComercial: 'Flanax®, Naproxeno MK®, Naprosyn®',
      efectosSecundariosTexto: 'Dolor gástrico, náuseas, cefalea, mareo, retención de líquidos.',
      cuidados: [
        'Administrar con alimentos para reducir efectos gástricos.',
        'Evitar en pacientes con antecedentes de úlcera péptica o insuficiencia renal.',
        'Monitorear presión arterial en tratamientos prolongados.'
      ]
    },
    {
      nombreGenerico: 'Diclofenaco - Antiinflamatorio',
      nombreComercial: 'Voltaren®, Diclofenaco MK®, Doloneurobion®',
      efectosSecundariosTexto: 'Gastritis, dolor abdominal, hipertensión, aumento de enzimas hepáticas.',
      cuidados: [
        'Usar la menor dosis efectiva durante el menor tiempo posible.',
        'Evitar en pacientes con problemas cardiovasculares o gastrointestinales.',
        'Monitorear función hepática y renal periódicamente.'
      ]
    },
    {
      nombreGenerico: 'Celecoxib - Antiinflamatorio',
      nombreComercial: 'Celebra®, Celecoxib MK®, Celecoxib Genfar®',
      efectosSecundariosTexto: 'Dolor abdominal, diarrea, náuseas, cefalea.',
      cuidados: [
        'Evitar en pacientes con antecedentes de úlcera gástrica o problemas cardiovasculares.',
        'Monitorizar la función renal y hepática durante el tratamiento.',
        'Administrar con alimentos para reducir efectos secundarios gastrointestinales.'
      ]
    }
  ],
  antibioticos: [
    {
      nombreGenerico: 'Amoxicilina - Antibiótico',
      nombreComercial: 'Amoxil®, Amoxicilina MK®, Amoxicilina Genfar®',
      efectosSecundariosTexto: 'Diarrea, náuseas, sarpullido, reacción alérgica.',
      cuidados: [
        'Verificar antecedentes de alergia a penicilinas.',
        'Completar el tratamiento, aunque los síntomas mejoren.',
        'Administrar con alimentos para reducir molestias gástricas.'
      ]
    },
    {
      nombreGenerico: 'Ciprofloxacina - Antibiótico',
      nombreComercial: 'Ciprofloxacino MK®, Cipro®, Ciflox®',
      efectosSecundariosTexto: 'Diarrea, dolor muscular, mareo, fotosensibilidad.',
      cuidados: [
        'Evitar la exposición prolongada al sol durante el tratamiento.',
        'No administrar con productos lácteos o antiácidos (reduce absorción).',
        'Evaluar función renal antes y durante el tratamiento prolongado.'
      ]
    },
    {
      nombreGenerico: 'Azitromicina - Antibiótico',
      nombreComercial: 'Zithromax®, Azitromicina MK®, Azitromicina Genfar®',
      efectosSecundariosTexto: 'Náuseas, diarrea, dolor abdominal, reacciones alérgicas.',
      cuidados: [
        'Administrar con o sin alimentos.',
        'Monitorear posibles reacciones alérgicas o efectos gastrointestinales.',
        'Evitar el uso concomitante con otros antibióticos macrólidos.'
      ]
    }
  ],
  antidiabeticos: [
    {
      nombreGenerico: 'Metformina - Antidiabético',
      nombreComercial: 'Glucofage®, Metformina MK®, Glafornil®',
      efectosSecundariosTexto: 'Distensión abdominal, diarrea, náuseas, acidosis láctica (rara).',
      cuidados: [
        'Administrar con alimentos para reducir efectos gastrointestinales.',
        'No usar en pacientes con insuficiencia renal severa.',
        'Controlar niveles de glucosa y función renal regularmente.'
      ]
    },
    {
      nombreGenerico: 'Glibenclamida - Antidiabético',
      nombreComercial: 'Daonil®, Glibenclamida MK®, Gliboral®',
      efectosSecundariosTexto: 'Hipoglucemia, aumento de peso, náuseas.',
      cuidados: [
        'Supervisar riesgo de hipoglucemia, especialmente en adultos mayores.',
        'No omitir comidas al usar este medicamento.',
        'Monitorear glucosa capilar de forma regular.'
      ]
    },
    {
      nombreGenerico: 'Pioglitazona - Antidiabético',
      nombreComercial: 'Actos®, Pioglitazona MK®, Actoplus®',
      efectosSecundariosTexto: 'Retención de líquidos, aumento de peso, dolor muscular, riesgo de insuficiencia cardíaca.',
      cuidados: [
        'Evitar en pacientes con insuficiencia cardíaca o problemas hepáticos.',
        'Monitorear peso, signos de edema y función hepática.',
        'Usar con precaución en pacientes con antecedentes de fracturas óseas.'
      ]
    }
  ],
  antihipertensivos: [
    {
      nombreGenerico: 'Enalapril - Antihipertensivo',
      nombreComercial: 'Renitec®, Enalapril MK®, Ecapril®',
      efectosSecundariosTexto: 'Tos seca, mareo, hipotensión, hipercalemia.',
      cuidados: [
        'Controlar presión arterial regularmente.',
        'Monitorear niveles de potasio y función renal.',
        'Advertir sobre posibilidad de tos persistente.'
      ]
    },
    {
      nombreGenerico: 'Losartán - Antihipertensivo',
      nombreComercial: 'Cozaar®, Losartán MK®, Zartán®',
      efectosSecundariosTexto: 'Mareos, fatiga, hipercalemia, dolor muscular.',
      cuidados: [
        'No combinar con suplementos de potasio sin indicación médica.',
        'Monitorear presión arterial y función renal.',
        'Revisar signos de deshidratación o presión muy baja.'
      ]
    },
    {
      nombreGenerico: 'Atenolol - Antihipertensivo',
      nombreComercial: 'Tenormin®, Atenolol MK®, Atenolol Genfar®',
      efectosSecundariosTexto: 'Fatiga, mareo, bradicardia, hipotensión.',
      cuidados: [
        'Evitar la suspensión abrupta (puede causar hipertensión rebote).',
        'Monitorear la frecuencia cardíaca y la presión arterial.',
        'Uso cauteloso en pacientes con insuficiencia cardíaca o asma.'
      ]
    }
  ],
  antipireticos: [
    {
      nombreGenerico: 'Paracetamol - Antipirético',
      nombreComercial: 'Dolex®, Panadol®, Acetaminofén MK®',
      efectosSecundariosTexto: 'Náuseas, vómito, malestar estomacal, hepatotoxicidad en dosis altas.',
      cuidados: [
        'No exceder la dosis máxima diaria.',
        'Evaluar función hepática, especialmente en pacientes con antecedentes hepáticos o alcohólicos.',
        'Educar al paciente sobre el riesgo de toxicidad si combina con otros productos que contengan paracetamol.'
      ]
    },
    {
      nombreGenerico: 'Ácido acetilsalicílico (Aspirina) - Antipirético',
      nombreComercial: 'Aspirina®, Ecotrin®, Acetilsalicílico MK®',
      efectosSecundariosTexto: 'Gastritis, úlceras gástricas, sangrado gastrointestinal, tinnitus en dosis altas.',
      cuidados: [
        'Evitar en pacientes con antecedentes de úlceras o trastornos hemorrágicos.',
        'No administrar en niños con fiebre (riesgo de síndrome de Reye).',
        'Administrar con alimentos para disminuir irritación gástrica.'
      ]
    },
    {
      nombreGenerico: 'Ibuprofeno - Antipirético',
      nombreComercial: 'Advil®, Motrin®, Ibuprofeno MK®',
      efectosSecundariosTexto: 'Dolor gástrico, náuseas, acidez, úlceras gástricas en uso prolongado.',
      cuidados: [
        'Administrar con alimentos para minimizar efectos gástricos.',
        'Controlar función renal en pacientes con enfermedades renales o en tratamiento prolongado.',
        'Observar signos de sangrado digestivo o anemia.'
      ]
    }
  ],
  antidepresivos: [
    {
      nombreGenerico: 'Fluoxetina - Antidepresivo',
      nombreComercial: 'Prozac®, Fluoxetina MK®, Flutop®',
      efectosSecundariosTexto: 'Náuseas, insomnio, ansiedad, disminución del apetito, disfunción sexual.',
      cuidados: [
        'Monitorear signos de suicidio en las primeras semanas del tratamiento.',
        'Evitar el uso con inhibidores de la monoaminooxidasa (IMAO).',
        'Controlar los niveles de serotonina para prevenir síndrome serotoninérgico.'
      ]
    },
    {
      nombreGenerico: 'Sertralina - Antidepresivo',
      nombreComercial: 'Zoloft®, Sertralina MK®, Sertralin®',
      efectosSecundariosTexto: 'Náuseas, insomnio, somnolencia, pérdida de apetito.',
      cuidados: [
        'Monitorear síntomas de síndrome serotoninérgico.',
        'Evitar el uso concomitante con IMAOs o litio.',
        'Evaluar la función hepática antes de iniciar tratamiento.'
      ]
    },
    {
      nombreGenerico: 'Citalopram - Antidepresivo',
      nombreComercial: 'Celexa®, Citalopram MK®, Citolap®',
      efectosSecundariosTexto: 'Somnolencia, insomnio, náuseas, disminución de la líbido.',
      cuidados: [
        'Monitorear el estado emocional del paciente, especialmente al inicio del tratamiento.',
        'Evitar la combinación con otros antidepresivos sin supervisión médica.',
        'Ajustar la dosis en pacientes con insuficiencia hepática.'
      ]
    }
  ],
  ansioliticos: [
    {
      nombreGenerico: 'Diazepam - Ansiolítico',
      nombreComercial: 'Valium®, Diazepam MK®, Diazepán®',
      efectosSecundariosTexto: 'Somnolencia, mareo, debilidad muscular, dependencia.',
      cuidados: [
        'Uso a corto plazo debido a riesgo de dependencia.',
        'Monitorear la función hepática y renal.',
        'No combinar con alcohol o depresores del SNC.'
      ]
    },
    {
      nombreGenerico: 'Lorazepam - Ansiolítico',
      nombreComercial: 'Ativan®, Lorazepam MK®, Lorazepán®',
      efectosSecundariosTexto: 'Somnolencia, mareo, debilidad, cansancio.',
      cuidados: [
        'Evitar el uso prolongado para prevenir la dependencia.',
        'Monitorear signos de depresión respiratoria y somnolencia excesiva.',
        'No administrar en combinación con alcohol o analgésicos opioides.'
      ]
    },
    {
      nombreGenerico: 'Alprazolam - Ansiolítico',
      nombreComercial: 'Xanax®, Alprazolam MK®, Alzam®',
      efectosSecundariosTexto: 'Somnolencia, mareos, sequedad de boca, alteraciones de la memoria.',
      cuidados: [
        'Uso a corto plazo debido al riesgo de dependencia.',
        'Evitar en pacientes con antecedentes de abuso de sustancias.',
        'Monitorear efectos de somnolencia y coordinación motora.'
      ]
    }
  ],
  anticonvulsionantes: [
    {
      nombreGenerico: 'Fenitoína - Anticonvulsionante',
      nombreComercial: 'Dilantin®, Fenitoína MK®, Phenytoin®',
      efectosSecundariosTexto: 'Mareos, gingival hiperplasia, erupciones cutáneas, toxicidad.',
      cuidados: [
        'Monitorear niveles en sangre debido a su estrecho margen terapéutico.',
        'Evitar suspensiones bruscas (puede inducir convulsiones).',
        'Revisar la salud dental regularmente por riesgo de gingivitis.'
      ]
    },
    {
      nombreGenerico: 'Valproato - Anticonvulsionante',
      nombreComercial: 'Depakote®, Valproato MK®, Valpro®',
      efectosSecundariosTexto: 'Náuseas, temblores, aumento de peso, hepatotoxicidad.',
      cuidados: [
        'Monitorear función hepática y recuento sanguíneo.',
        'Evitar en mujeres embarazadas debido a riesgos teratogénicos.',
        'Ajustar la dosis en función de la respuesta clínica.'
      ]
    },
    {
      nombreGenerico: 'Lamotrigina - Anticonvulsionante',
      nombreComercial: 'Lamictal®, Lamotrigina MK®, Lamotrin®',
      efectosSecundariosTexto: 'Erupción cutánea, somnolencia, mareo, dolor de cabeza.',
      cuidados: [
        'Introducir lentamente en el tratamiento para evitar reacciones cutáneas graves.',
        'Monitorear por signos de síndrome de Stevens-Johnson.',
        'Evitar en pacientes con antecedentes de reacciones alérgicas graves a anticonvulsionantes.'
      ]
    }
  ],
  antihistaminicos: [
    {
      nombreGenerico: 'Loratadina - Antihistamínico',
      nombreComercial: 'Claritin®, Loratadina MK®, Clarityn®',
      efectosSecundariosTexto: 'Somnolencia, sequedad de boca, dolor de cabeza.',
      cuidados: [
        'Preferentemente tomar en la noche para evitar somnolencia diurna.',
        'Evitar el uso con alcohol o sedantes.',
        'Consultar antes de usar en mujeres embarazadas o lactando.'
      ]
    },
    {
      nombreGenerico: 'Cetirizina - Antihistamínico',
      nombreComercial: 'Zyrtec®, Cetirizina MK®, Cetrine®',
      efectosSecundariosTexto: 'Somnolencia, dolor de cabeza, sequedad de boca.',
      cuidados: [
        'Evitar en pacientes con insuficiencia renal o hepática.',
        'No usar con alcohol o sedantes.',
        'Tomar preferentemente antes de acostarse si se presenta somnolencia.'
      ]
    },
    {
      nombreGenerico: 'Fexofenadina - Antihistamínico',
      nombreComercial: 'Allegra®, Fexofenadina MK®, Telfast®',
      efectosSecundariosTexto: 'Dolor de cabeza, mareo, sequedad de boca.',
      cuidados: [
        'Evitar tomar con jugos de frutas (pueden reducir su absorción).',
        'No combinar con otros antihistamínicos sin consultar al médico.',
        'Consultar si está tomando medicamentos para la presión arterial.'
      ]
    }
  ],
  anticoagulantes: [
    {
      nombreGenerico: 'Warfarina - Anticoagulante',
      nombreComercial: 'Coumadin®, Warfarina MK®, Marevan®',
      efectosSecundariosTexto: 'Sangrado excesivo, moretones, hemorragias internas.',
      cuidados: [
        'Monitorear regularmente el INR para ajustar la dosis.',
        'Evitar alimentos ricos en vitamina K (pueden alterar la eficacia).',
        'Revisar interacciones con otros medicamentos anticoagulantes.'
      ]
    },
    {
      nombreGenerico: 'Heparina - Anticoagulante',
      nombreComercial: 'Hepflush®, Heparina MK®, Heparin®',
      efectosSecundariosTexto: 'Sangrado, trombocitopatía, reacciones alérgicas.',
      cuidados: [
        'Monitorear tiempo de protrombina y recuento plaquetario.',
        'Evitar en pacientes con antecedentes de hemorragia activa.',
        'Controlar el uso en pacientes con insuficiencia renal.'
      ]
    },
    {
      nombreGenerico: 'Rivaroxabán - Anticoagulante',
      nombreComercial: 'Xarelto®, Rivaroxabán MK®, Rivarox®',
      efectosSecundariosTexto: 'Sangrado, hematomas, náuseas.',
      cuidados: [
        'Evitar el uso con otros anticoagulantes orales.',
        'Monitorear signos de sangrado anormal.',
        'Consultar con el médico antes de realizar cirugías o procedimientos invasivos.'
      ]
    }
  ],
  broncodilatadores: [
    {
      nombreGenerico: 'Salbutamol - Broncodilatador',
      nombreComercial: 'Ventolin®, Salbutamol MK®, Aerolin®',
      efectosSecundariosTexto: 'Temblor, palpitaciones, taquicardia, nerviosismo.',
      cuidados: [
        'Uso exclusivo en episodios agudos, no para mantenimiento.',
        'Evitar el uso excesivo que pueda inducir taquicardia severa.',
        'Consultar si los síntomas persisten o empeoran.'
      ]
    },
    {
      nombreGenerico: 'Budesonida - Broncodilatador',
      nombreComercial: 'Pulmicort®, Budesonida MK®, Symbicort®',
      efectosSecundariosTexto: 'Irritación de garganta, tos, candidiasis oral.',
      cuidados: [
        'Enjuagar la boca después de usar para evitar candidiasis.',
        'Uso continuado para el control de asma y EPOC.',
        'Monitorear función pulmonar regularmente.'
      ]
    },
    {
      nombreGenerico: 'Formoterol - Broncodilatador',
      nombreComercial: 'Foradil®, Formoterol MK®, Oxis®',
      efectosSecundariosTexto: 'Temblor, palpitaciones, mareos, dolor de cabeza.',
      cuidados: [
        'No usar en caso de ataque asmático agudo sin el uso de un medicamento de rescate.',
        'Monitorear la función cardiovascular y respiratoria.',
        'Consultar antes de iniciar tratamiento en pacientes con hipertensión.'
      ]
    }
  ],
  diureticos: [
    {
      nombreGenerico: 'Furosemida - Diurético',
      nombreComercial: 'Lasix®, Furosemida MK®, Fursemida®',
      efectosSecundariosTexto: 'Deshidratación, desequilibrio electrolítico, hipotensión.',
      cuidados: [
        'Monitorear niveles de potasio y sodio en sangre.',
        'Administrar en la mañana para evitar la micción nocturna.',
        'Evitar en pacientes con insuficiencia renal grave.'
      ]
    },
    {
      nombreGenerico: 'Hidroclorotiazida - Diurético',
      nombreComercial: 'Esidrex®, Hidroclorotiazida MK®, Hidrotiac®',
      efectosSecundariosTexto: 'Hipokalemia, mareos, deshidratación.',
      cuidados: [
        'Monitorear niveles de electrolitos, especialmente potasio.',
        'Ajustar la dosis en pacientes con insuficiencia renal.',
        'Evitar el uso con medicamentos que aumenten el riesgo de hipokalemia.'
      ]
    },
    {
      nombreGenerico: 'Espironolactona - Diurético',
      nombreComercial: 'Aldactone®, Espironolactona MK®, Spiractin®',
      efectosSecundariosTexto: 'Hiperpotasemia, acidosis, ginecomastia.',
      cuidados: [
        'Evitar el uso concomitante con suplementos de potasio.',
        'Monitorear los niveles de potasio en sangre.',
        'Revisar signos de insuficiencia renal o acidosis metabólica.'
      ]
    }
  ],
  antiacidos: [
    {
      nombreGenerico: 'Omeprazol - Antiácido',
      nombreComercial: 'Losec®, Omeprazol MK®, Prilosec®',
      efectosSecundariosTexto: 'Dolor de cabeza, náuseas, diarrea, dolor abdominal.',
      cuidados: [
        'Evitar el uso prolongado sin supervisión médica.',
        'No usar en pacientes con antecedentes de problemas hepáticos graves.',
        'Tomar antes de las comidas para mejor eficacia.'
      ]
    },
    {
      nombreGenerico: 'Ranitidina - Antiácido',
      nombreComercial: 'Zantac®, Ranitidina MK®, Acidol®',
      efectosSecundariosTexto: 'Dolor de cabeza, mareos, náuseas, vómitos.',
      cuidados: [
        'Monitorear función renal en pacientes con insuficiencia renal.',
        'Evitar el uso con otros antiácidos sin consulta médica.',
        'Consultar si los síntomas persisten o empeoran.'
      ]
    },
    {
      nombreGenerico: 'Pantoprazol - Antiácido',
      nombreComercial: 'Protonix®, Pantoprazol MK®, Pantoloc®',
      efectosSecundariosTexto: 'Dolor abdominal, náuseas, diarrea, cefalea.',
      cuidados: [
        'Evitar el uso a largo plazo sin indicación médica.',
        'Monitorear los niveles de magnesio en sangre en tratamientos prolongados.',
        'Evitar su uso en pacientes con antecedentes de problemas hepáticos.'
      ]
    }
  ],
  antipsicoticos: [
    {
      nombreGenerico: 'Risperidona - Antipsicótico',
      nombreComercial: 'Risperdal®, Risperidona MK®, Rispolept®',
      efectosSecundariosTexto: 'Somnolencia, aumento de peso, rigidez muscular, mareos.',
      cuidados: [
        'Monitorear los efectos secundarios extrapiramidales.',
        'Ajustar la dosis en pacientes con problemas hepáticos o renales.',
        'Evitar el consumo de alcohol o sedantes mientras se usa.'
      ]
    },
    {
      nombreGenerico: 'Olanzapina - Antipsicótico',
      nombreComercial: 'Zyprexa®, Olanzapina MK®, Olanzapine®',
      efectosSecundariosTexto: 'Aumento de peso, somnolencia, mareos, hiperglucemia.',
      cuidados: [
        'Monitorear niveles de glucosa en sangre.',
        'Evitar su uso en pacientes con antecedentes de trastornos metabólicos.',
        'Evaluar la función hepática antes de iniciar el tratamiento.'
      ]
    },
    {
      nombreGenerico: 'Quetiapina - Antipsicótico',
      nombreComercial: 'Seroquel®, Quetiapina MK®, Quetipe®',
      efectosSecundariosTexto: 'Somnolencia, aumento de peso, sequedad de boca, mareos.',
      cuidados: [
        'Monitorear signos de síndrome neuroléptico maligno.',
        'Evitar el uso con otros depresores del SNC sin supervisión médica.',
        'Ajustar la dosis en pacientes con insuficiencia hepática o renal.'
      ]
    }
  ],
  antivirales: [
    {
      nombreGenerico: 'Aciclovir - Antiviral',
      nombreComercial: 'Zovirax®, Aciclovir MK®, Virolex®',
      efectosSecundariosTexto: 'Dolor de cabeza, náuseas, diarrea, erupción cutánea.',
      cuidados: [
        'Hidratar bien al paciente durante el tratamiento.',
        'Evitar en pacientes con insuficiencia renal grave.',
        'Monitorear los niveles de creatinina durante el tratamiento.'
      ]
    },
    {
      nombreGenerico: 'Oseltamivir - Antiviral',
      nombreComercial: 'Tamiflu®, Oseltamivir MK®, Influvac®',
      efectosSecundariosTexto: 'Náuseas, vómitos, dolor abdominal, fatiga.',
      cuidados: [
        'Iniciar el tratamiento dentro de las primeras 48 horas de síntomas.',
        'Evitar en pacientes con problemas renales sin ajuste de dosis.',
        'Monitorear los efectos gastrointestinales.'
      ]
    },
    {
      nombreGenerico: 'Lamivudina - Antiviral',
      nombreComercial: 'Epivir®, Lamivudina MK®, Zeffix®',
      efectosSecundariosTexto: 'Dolor de cabeza, fatiga, náuseas, diarrea.',
      cuidados: [
        'Monitorear función hepática y renal durante el tratamiento.',
        'Evitar la interrupción abrupta del tratamiento para prevenir la resistencia viral.',
        'Consultar si los síntomas persisten o empeoran.'
      ]
    }
  ],
  antifungicos: [
    {
      nombreGenerico: 'Fluconazol - Antifúngico',
      nombreComercial: 'Diflucan®, Fluconazol MK®, Fluco®',
      efectosSecundariosTexto: 'Dolor abdominal, náuseas, mareos, reacciones alérgicas.',
      cuidados: [
        'Monitorear función hepática en tratamientos prolongados.',
        'Evitar en pacientes con insuficiencia renal grave.',
        'Consultar si hay signos de reacciones alérgicas graves.'
      ]
    },
    {
      nombreGenerico: 'Itraconazol - Antifúngico',
      nombreComercial: 'Sporanox®, Itraconazol MK®, Itracol®',
      efectosSecundariosTexto: 'Náuseas, diarrea, dolor abdominal, reacciones cutáneas.',
      cuidados: [
        'Monitorear la función hepática y renal.',
        'Evitar en pacientes con insuficiencia cardíaca congestiva.',
        'Administrar con alimentos para mejorar la absorción.'
      ]
    },
    {
      nombreGenerico: 'Terbinafina - Antifúngico',
      nombreComercial: 'Lamisil®, Terbinafina MK®, Terbin®',
      efectosSecundariosTexto: 'Dolor abdominal, náuseas, diarrea, erupciones cutáneas.',
      cuidados: [
        'Evitar en pacientes con trastornos hepáticos.',
        'Monitorear función hepática durante el tratamiento.',
        'Consultar si hay signos de reacciones alérgicas o erupciones graves.'
      ]
    }
  ],
  antiemeticos: [
    {
      nombreGenerico: 'Ondansetrón - Antiemético',
      nombreComercial: 'Zofran®, Ondansetrón MK®, Ondansetron®',
      efectosSecundariosTexto: 'Dolor de cabeza, estreñimiento, mareos, fatiga.',
      cuidados: [
        'Monitorear signos de efectos adversos en el sistema nervioso.',
        'Evitar en pacientes con antecedentes de alteraciones cardíacas.',
        'Administrar lentamente por vía intravenosa para evitar efectos adversos.'
      ]
    },
    {
      nombreGenerico: 'Metoclopramida - Antiemético',
      nombreComercial: 'Primperan®, Metoclopramida MK®, Maxolon®',
      efectosSecundariosTexto: 'Somnolencia, mareos, sequedad de boca, alteraciones extrapiramidales.',
      cuidados: [
        'Monitorear signos de reacciones extrapiramidales, especialmente en adultos mayores.',
        'Evitar el uso prolongado para prevenir el riesgo de discinesia tardía.',
        'Consultar si se desarrollan efectos secundarios graves como temblores o rigidez muscular.'
      ]
    },
    {
      nombreGenerico: 'Domperidona - Antiemético',
      nombreComercial: 'Motilium®, Domperidona MK®, Motilid®',
      efectosSecundariosTexto: 'Dolor abdominal, diarrea, sequedad de boca, somnolencia.',
      cuidados: [
        'Evitar su uso en pacientes con antecedentes de problemas cardíacos.',
        'Monitorear los efectos gastrointestinales y cardiovasculares.',
        'Consultar si hay síntomas de efectos adversos graves.'
      ]
    }
  ],
  relajantesMusculares: [
    {
      nombreGenerico: 'Ciclobenzaprina - Relajante muscular',
      nombreComercial: 'Flexeril®, Ciclobenzaprina MK®, Fexmid®',
      efectosSecundariosTexto: 'Somnolencia, mareos, sequedad de boca, visión borrosa.',
      cuidados: [
        'No operar maquinaria pesada mientras esté bajo tratamiento.',
        'Evitar el consumo de alcohol o sedantes.',
        'Ajustar la dosis en pacientes con insuficiencia hepática o renal.'
      ]
    },
    {
      nombreGenerico: 'Tizanidina - Relajante muscular',
      nombreComercial: 'Zanaflex®, Tizanidina MK®, Tizalud®',
      efectosSecundariosTexto: 'Somnolencia, mareos, boca seca, hipotensión.',
      cuidados: [
        'Evitar el uso con otros relajantes musculares o sedantes.',
        'Monitorear la presión arterial debido a sus efectos hipotensores.',
        'Consultar con el médico antes de realizar ajustes de dosis.'
      ]
    },
    {
      nombreGenerico: 'Baclofeno - Relajante muscular',
      nombreComercial: 'Lioresal®, Baclofeno MK®, Baclofen®',
      efectosSecundariosTexto: 'Somnolencia, debilidad muscular, mareos, náuseas.',
      cuidados: [
        'Evitar el uso abrupto para prevenir síntomas de abstinencia.',
        'Monitorear los efectos secundarios relacionados con el sistema nervioso.',
        'Ajustar la dosis en pacientes con insuficiencia renal o hepática.'
      ]
    }
  ],
  hipnoticos: [
    {
      nombreGenerico: 'Zolpidem - Hipnótico',
      nombreComercial: 'Ambien®, Stilnox®, Zolpidem MK®',
      efectosSecundariosTexto: 'Somnolencia, mareos, dolor de cabeza, náuseas.',
      cuidados: [
        'Usar solo para tratamiento a corto plazo de insomnio.',
        'Evitar en pacientes con antecedentes de abuso de sustancias.',
        'Evitar el consumo de alcohol o sedantes durante el tratamiento.'
      ]
    },
    {
      nombreGenerico: 'Eszopiclona - Hipnótico',
      nombreComercial: 'Lunesta®, Eszopiclona MK®, Soluna®',
      efectosSecundariosTexto: 'Sabor metálico, somnolencia diurna, mareos, dolor de cabeza.',
      cuidados: [
        'Utilizar en dosis bajas para evitar efectos adversos severos.',
        'Evitar la conducción de vehículos tras la administración.',
        'No interrumpir de forma abrupta para evitar síntomas de abstinencia.'
      ]
    },
    {
      nombreGenerico: 'Triazolam - Hipnótico',
      nombreComercial: 'Halcion®, Triazolam MK®, Triazolan®',
      efectosSecundariosTexto: 'Amnesia, somnolencia, mareos, alteraciones de la memoria.',
      cuidados: [
        'Usar con precaución en pacientes con antecedentes de trastornos mentales.',
        'Evitar el uso a largo plazo para prevenir dependencia.',
        'Monitorear los efectos secundarios relacionados con el sistema nervioso.'
      ]
    }
  ],
  inmunosupresores: [
    {
      nombreGenerico: 'Ciclosporina - Inmunosupresor',
      nombreComercial: 'Sandimmun®, Neoral®, Ciclosporina MK®',
      efectosSecundariosTexto: 'Hipertensión, temblores, dolores musculares, insuficiencia renal.',
      cuidados: [
        'Monitorear la función renal y la presión arterial regularmente.',
        'Evitar el consumo de jugos cítricos que puedan interferir con la absorción.',
        'Consultar con el médico en caso de infecciones recurrentes.'
      ]
    },
    {
      nombreGenerico: 'Azatioprina - Inmunosupresor',
      nombreComercial: 'Imuran®, Azatioprina MK®, Azapro®',
      efectosSecundariosTexto: 'Náuseas, vómitos, pérdida de apetito, leucopenia.',
      cuidados: [
        'Monitorear los recuentos sanguíneos debido al riesgo de leucopenia.',
        'Evitar la exposición al sol debido a la fotosensibilidad.',
        'Consultar con el médico si aparecen signos de infecciones.'
      ]
    },
    {
      nombreGenerico: 'Metotrexato - Inmunosupresor',
      nombreComercial: 'Trexall®, Methotrexate MK®, Rheumatrex®',
      efectosSecundariosTexto: 'Náuseas, vómitos, pérdida de cabello, daño hepático.',
      cuidados: [
        'Monitorear la función hepática y los recuentos sanguíneos.',
        'Evitar el consumo de alcohol durante el tratamiento.',
        'Tomar con alimentos para reducir los efectos gastrointestinales.'
      ]
    }
  ],
  antineoplasicos: [
    {
      nombreGenerico: 'Cisplatino - Antineoplásico',
      nombreComercial: 'Platinol®, Cisplatino MK®, Cisplatin®',
      efectosSecundariosTexto: 'Náuseas, vómitos, pérdida de apetito, neuropatía.',
      cuidados: [
        'Monitorear la función renal y la hidratación.',
        'Prevenir la náusea con medicamentos antieméticos antes del tratamiento.',
        'Evitar en pacientes con insuficiencia renal grave.'
      ]
    },
    {
      nombreGenerico: 'Doxorrubicina - Antineoplásico',
      nombreComercial: 'Adriamycin®, Doxorrubicina MK®, Rubex®',
      efectosSecundariosTexto: 'Náuseas, vómitos, alopecia, insuficiencia cardíaca.',
      cuidados: [
        'Monitorear la función cardíaca durante el tratamiento.',
        'Evitar su uso con otros medicamentos cardiotóxicos.',
        'Consultar si hay signos de infecciones o reacciones alérgicas.'
      ]
    },
    {
      nombreGenerico: 'Paclitaxel - Antineoplásico',
      nombreComercial: 'Taxol®, Paclitaxel MK®, Onxol®',
      efectosSecundariosTexto: 'Alopecia, náuseas, vómitos, neutropenia.',
      cuidados: [
        'Monitorear recuentos sanguíneos debido al riesgo de neutropenia.',
        'Evitar en pacientes con infecciones activas.',
        'Realizar pruebas de función hepática periódicamente.'
      ]
    }
  ],
  corticoides: [
    {
      nombreGenerico: 'Prednisona - Corticoide',
      nombreComercial: 'Deltasone®, Prednisona MK®, Prednisone®',
      efectosSecundariosTexto: 'Aumento de peso, retención de líquidos, cambios de humor.',
      cuidados: [
        'Usar la menor dosis efectiva durante el menor tiempo posible.',
        'Monitorear signos de infecciones durante el tratamiento.',
        'Evitar la interrupción abrupta del tratamiento.'
      ]
    },
    {
      nombreGenerico: 'Dexametasona - Corticoide',
      nombreComercial: 'Decadron®, Dexametasona MK®, Dexalgin®',
      efectosSecundariosTexto: 'Aumento de peso, insomnio, aumento de la glucosa sanguínea.',
      cuidados: [
        'Monitorear los niveles de glucosa en sangre.',
        'Evitar el uso prolongado sin supervisión médica.',
        'Consultar si hay síntomas de infección o reacciones alérgicas.'
      ]
    },
    {
      nombreGenerico: 'Hidrocortisona - Corticoide',
      nombreComercial: 'Cortef®, Hydrocortisone MK®, Solu-Cortef®',
      efectosSecundariosTexto: 'Aumento de peso, insomnio, alteraciones en el estado de ánimo.',
      cuidados: [
        'Evitar el uso prolongado sin evaluación médica.',
        'Monitorear la función adrenal durante el tratamiento.',
        'Ajustar la dosis en pacientes con insuficiencia renal o hepática.'
      ]
    }
  ],
  antiparasitarios: [
    {
      nombreGenerico: 'Mebendazol - Antiparasitario',
      nombreComercial: 'Vermox®, Mebendazol MK®, Mebendazol®',
      efectosSecundariosTexto: 'Dolor abdominal, diarrea, náuseas, reacciones alérgicas.',
      cuidados: [
        'Tomar con alimentos para mejorar la absorción.',
        'Evitar en pacientes con problemas hepáticos graves.',
        'Consultar con el médico si hay signos de reacciones alérgicas.'
      ]
    },
    {
      nombreGenerico: 'Albendazol - Antiparasitario',
      nombreComercial: 'Albenza®, Albendazol MK®, Zentel®',
      efectosSecundariosTexto: 'Dolor de cabeza, mareos, náuseas, erupción cutánea.',
      cuidados: [
        'Monitorear signos de reacciones alérgicas graves.',
        'Tomar con alimentos para mejorar la absorción.',
        'Evitar en pacientes con insuficiencia hepática severa.'
      ]
    },
    {
      nombreGenerico: 'Praziquantel - Antiparasitario',
      nombreComercial: 'Biltricide®, Praziquantel MK®, Biltricide®',
      efectosSecundariosTexto: 'Dolor abdominal, náuseas, vómitos, fiebre.',
      cuidados: [
        'Evitar en pacientes con antecedentes de convulsiones.',
        'Monitorear la función hepática durante el tratamiento.',
        'Consultar si los síntomas persisten o empeoran.'
      ]
    }
  ],
  laxantes: [
    {
      nombreGenerico: 'Bisacodilo - Laxante',
      nombreComercial: 'Dulcolax®, Bisacodilo MK®, Correctol®',
      efectosSecundariosTexto: 'Dolor abdominal, cólicos, diarrea, náuseas.',
      cuidados: [
        'Usar por períodos cortos para evitar dependencia.',
        'Evitar en pacientes con obstrucción intestinal.',
        'Tomar con suficiente cantidad de agua para evitar deshidratación.'
      ]
    },
    {
      nombreGenerico: 'Lactulosa - Laxante',
      nombreComercial: 'Duphalac®, Lactulosa MK®, Normacol®',
      efectosSecundariosTexto: 'Flatulencia, dolor abdominal, diarrea.',
      cuidados: [
        'Monitorear los efectos secundarios gastrointestinales.',
        'Evitar su uso en pacientes con diabetes sin supervisión médica.',
        'Tomar con suficiente cantidad de agua para prevenir deshidratación.'
      ]
    },
    {
      nombreGenerico: 'Senósidos - Laxante',
      nombreComercial: 'Senokot®, Senósidos MK®, X-Prep®',
      efectosSecundariosTexto: 'Dolor abdominal, diarrea, cólicos, náuseas.',
      cuidados: [
        'No usar de forma prolongada para evitar dependencia.',
        'Evitar en pacientes con enfermedad inflamatoria intestinal.',
        'Consultar con el médico si hay efectos secundarios persistentes.'
      ]
    }
  ],
  antitusivos: [
    {
      nombreGenerico: 'Dextrometorfano - Antitusivo',
      nombreComercial: 'Vicks 44®, Robitussin®, Dextrometorfano MK®',
      efectosSecundariosTexto: 'Somnolencia, mareos, náuseas, confusión en altas dosis.',
      cuidados: [
        'Evitar en menores de 6 años sin indicación médica.',
        'No combinar con otros depresores del sistema nervioso central.',
        'Evitar sobredosis, puede causar efectos neurológicos graves.'
      ]
    },
    {
      nombreGenerico: 'Codeína - Antitusivo',
      nombreComercial: 'Codeisan®, Toseína®, Codeína MK®',
      efectosSecundariosTexto: 'Somnolencia, estreñimiento, náuseas, dependencia.',
      cuidados: [
        'Usar con precaución por su potencial adictivo.',
        'Evitar en menores de edad y embarazadas.',
        'No combinar con alcohol ni otros opioides.'
      ]
    },
    {
      nombreGenerico: 'Levodropropizina - Antitusivo',
      nombreComercial: 'Levopront®, Levodropropizina MK®',
      efectosSecundariosTexto: 'Somnolencia, mareos, molestias gastrointestinales.',
      cuidados: [
        'No administrar junto con medicamentos expectorantes.',
        'Evitar operar maquinaria o conducir tras la toma.',
        'Consultar al médico si la tos persiste más de una semana.'
      ]
    }
  ],
  mucoliticos: [
    {
      nombreGenerico: 'Acetilcisteína - Mucolítico',
      nombreComercial: 'Fluimucil®, Acetilcisteína MK®',
      efectosSecundariosTexto: 'Náuseas, vómitos, erupciones, sabor desagradable.',
      cuidados: [
        'Tomar con abundante agua para facilitar la expulsión de flemas.',
        'Evitar en casos de úlcera gástrica activa.',
        'Consultar si hay dificultad respiratoria severa.'
      ]
    },
    {
      nombreGenerico: 'Ambroxol - Mucolítico',
      nombreComercial: 'Mucosolvan®, Ambroxol MK®, Lysomucil®',
      efectosSecundariosTexto: 'Náuseas, vómitos, diarrea, erupciones cutáneas.',
      cuidados: [
        'No usar junto con antitusivos para no dificultar la eliminación del moco.',
        'Puede administrarse con o sin alimentos.',
        'Consultar si se presenta urticaria o dificultad respiratoria.'
      ]
    },
    {
      nombreGenerico: 'Bromhexina - Mucolítico',
      nombreComercial: 'Bisolvon®, Bromhexina MK®',
      efectosSecundariosTexto: 'Malestar gástrico, náuseas, vómitos.',
      cuidados: [
        'Aumentar la ingesta de líquidos para potenciar su efecto.',
        'Evitar su uso en pacientes con úlcera péptica activa.',
        'Consultar si los síntomas empeoran o no mejoran.'
      ]
    }
  ],
  vasodilatadores: [
    {
      nombreGenerico: 'Nitroglicerina - Vasodilatador',
      nombreComercial: 'Tridil®, Nitrostat®, Nitroglicerina MK®',
      efectosSecundariosTexto: 'Dolor de cabeza, hipotensión, mareos, taquicardia.',
      cuidados: [
        'Usar con precaución en pacientes con presión baja.',
        'Evitar el uso conjunto con medicamentos para la disfunción eréctil.',
        'Mantener reposo tras la administración para prevenir caídas.'
      ]
    },
    {
      nombreGenerico: 'Hidralazina - Vasodilatador',
      nombreComercial: 'Apresolina®, Hidralazina MK®',
      efectosSecundariosTexto: 'Taquicardia, retención de líquidos, dolor de cabeza.',
      cuidados: [
        'Monitorear la presión arterial regularmente.',
        'Evitar suspender bruscamente el tratamiento.',
        'Puede usarse junto con diuréticos o betabloqueadores.'
      ]
    },
    {
      nombreGenerico: 'Minoxidil - Vasodilatador',
      nombreComercial: 'Loniten®, Minoxidil MK® (oral)',
      efectosSecundariosTexto: 'Crecimiento de vello, retención de líquidos, taquicardia.',
      cuidados: [
        'Monitorear la función renal y la presión arterial.',
        'Puede causar hipertricosis (vello excesivo).',
        'Usar solo bajo estricta supervisión médica.'
      ]
    }
  ],
  antiespasmodicos: [
    {
      nombreGenerico: 'Butilhioscina - Antiespasmódico',
      nombreComercial: 'Buscapina®, Butilhioscina MK®',
      efectosSecundariosTexto: 'Sequedad bucal, visión borrosa, estreñimiento.',
      cuidados: [
        'Evitar en pacientes con glaucoma o hipertrofia prostática.',
        'No combinar con otros anticolinérgicos.',
        'Usar con precaución en ancianos.'
      ]
    },
    {
      nombreGenerico: 'Hioscina - Antiespasmódico',
      nombreComercial: 'Scopolamina®, Hioscina MK®',
      efectosSecundariosTexto: 'Somnolencia, visión borrosa, mareos.',
      cuidados: [
        'Evitar conducir tras la toma.',
        'No usar en casos de obstrucción intestinal.',
        'Hidratarse bien para reducir sequedad de mucosas.'
      ]
    },
    {
      nombreGenerico: 'Mebeverina - Antiespasmódico',
      nombreComercial: 'Duspatalin®, Mebeverina MK®',
      efectosSecundariosTexto: 'Náuseas, dolor de cabeza, mareos.',
      cuidados: [
        'Indicado en síndrome de intestino irritable.',
        'No interrumpir sin consultar al médico.',
        'Tomar antes de las comidas para mayor efectividad.'
      ]
    }
  ],
  antidemencia: [
    {
      nombreGenerico: 'Donepezilo - Antidemencia',
      nombreComercial: 'Aricept®, Donepezilo MK®',
      efectosSecundariosTexto: 'Náuseas, insomnio, diarrea, mareos.',
      cuidados: [
        'Administrar por la noche para reducir náuseas.',
        'Evitar interrupciones bruscas del tratamiento.',
        'Monitorear cambios en conducta y estado mental.'
      ]
    },
    {
      nombreGenerico: 'Memantina - Antidemencia',
      nombreComercial: 'Ebixa®, Memantina MK®',
      efectosSecundariosTexto: 'Confusión, dolor de cabeza, hipertensión, somnolencia.',
      cuidados: [
        'Ajustar la dosis en pacientes con insuficiencia renal.',
        'Evaluar periódicamente la respuesta al tratamiento.',
        'Evitar combinaciones con otros medicamentos neurológicos sin indicación.'
      ]
    },
    {
      nombreGenerico: 'Galantamina - Antidemencia',
      nombreComercial: 'Reminyl®, Galantamina MK®',
      efectosSecundariosTexto: 'Náuseas, vómitos, pérdida de apetito.',
      cuidados: [
        'Tomar con alimentos para reducir efectos gastrointestinales.',
        'Monitorear signos de bradicardia (latido lento).',
        'Mantener seguimiento médico regular.'
      ]
    }
  ]
};


export default medicamentosAnalg;
