export interface EducationArticle {
  id: string;
  title: string;
  category: string;
  readTime: string;
  sections: {
    heading: string;
    content: string[];
  }[];
}

export const articlesData: Record<string, EducationArticle> = {
  'stroke-symptoms': {
    id: 'stroke-symptoms',
    title: 'Recognizing Stroke Symptoms',
    category: 'Symptoms Check',
    readTime: '3 min read',
    sections: [
      {
        heading: 'The F.A.S.T. Warning Signs',
        content: [
          'A stroke is a medical emergency. Fast treatment can lessen the brain damage that strokes can cause. By knowing the signs and symptoms, you can take quick action and perhaps save a life—maybe even your own.',
          'Remember the acronym F.A.S.T. to check for signs of a stroke:',
          '• **F**ace Drooping: Does one side of the face droop or is it numb? Ask the person to smile.',
          '• **A**rm Weakness: Is one arm weak or numb? Ask the person to raise both arms. Does one arm drift downward?',
          '• **S**peech Difficulty: Is speech slurred, are they unable to speak, or are they hard to understand? Ask the person to repeat a simple sentence like, "The sky is blue."',
          '• **T**ime to call 911: If the person shows any of these symptoms, even if the symptoms go away, call 911 and get them to the hospital immediately.'
        ]
      },
      {
        heading: 'Other Watch-Out Signs',
        content: [
          'In addition to F.A.S.T., other symptoms of a stroke include:',
          '• Sudden numbness or weakness of the leg.',
          '• Sudden confusion or trouble understanding.',
          '• Sudden trouble seeing in one or both eyes.',
          '• Sudden trouble walking, dizziness, loss of balance or coordination.',
          '• Sudden severe headache with no known cause.'
        ]
      }
    ]
  },
  'heart-attack': {
    id: 'heart-attack',
    title: 'Heart Attack Warning Signs',
    category: 'Symptoms Check',
    readTime: '4 min read',
    sections: [
      {
        heading: 'Common Symptoms',
        content: [
          'A heart attack occurs when the blood flow that brings oxygen to the heart muscle is severely reduced or cut off completely. Recognizing the early symptoms could save your life.',
          'Common warning signs include:',
          '• **Chest Discomfort:** Most heart attacks involve discomfort in the center of the chest that lasts more than a few minutes, or that goes away and comes back. It can feel like uncomfortable pressure, squeezing, fullness, or pain.',
          '• **Discomfort in other areas of the upper body:** Symptoms can include pain or discomfort in one or both arms, the back, neck, jaw, or stomach.',
          '• **Shortness of breath:** This can occur with or without chest discomfort.',
          '• **Other signs:** May include breaking out in a cold sweat, nausea, or lightheadedness.'
        ]
      },
      {
        heading: 'Differences in Symptoms for Women',
        content: [
          'As with men, women\'s most common heart attack symptom is chest pain or discomfort. But women are somewhat more likely than men to experience some of the other common symptoms, particularly shortness of breath, nausea/vomiting, and back or jaw pain.'
        ]
      }
    ]
  },
  'back-pain': {
    id: 'back-pain',
    title: 'When to Worry About Back Pain',
    category: 'Symptoms Check',
    readTime: '4 min read',
    sections: [
      {
        heading: 'Understanding Back Pain',
        content: [
          'Back pain is incredibly common and usually resolves on its own with time and conservative treatment. However, certain "red flag" symptoms can indicate a more serious underlying condition.'
        ]
      },
      {
        heading: 'When to Seek Immediate Medical Attention',
        content: [
          'You should consult a healthcare professional immediately if your back pain is accompanied by any of the following:',
          '• **Bowel or bladder incontinence:** Sudden inability to hold or control your bowel movements or urine.',
          '• **Numbness or weakness:** Specifically around the groin, buttocks, or severe weakness in your legs.',
          '• **Following trauma:** Pain that starts after a fall, blow to the back, or other injury.',
          '• **Fever:** Unexplained fever accompanying your back pain.',
          '• **Unexplained weight loss:** Losing weight without trying while experiencing back pain.'
        ]
      }
    ]
  },
  'abnormal-growths': {
    id: 'abnormal-growths',
    title: 'Identifying Abnormal Growths',
    category: 'Symptoms Check',
    readTime: '5 min read',
    sections: [
      {
        heading: 'What is an Abnormal Growth?',
        content: [
          'Abnormal growths, also known as tumors, can be benign (non-cancerous) or malignant (cancerous). Being aware of changes in your body and knowing what to look for is key to early detection.'
        ]
      },
      {
        heading: 'Skin Growths: The ABCDE Rule',
        content: [
          'For skin moles or growths, remember the ABCDE rule:',
          '• **A**symmetry: One half of the spot doesn\'t match the other.',
          '• **B**order irregularity: The edges are ragged, notched, or blurred.',
          '• **C**olor: The color is not uniform. It may include shades of brown, black, pink, red, white, or blue.',
          '• **D**iameter: The spot is larger than 6 millimeters across (about the size of a pencil eraser).',
          '• **E**volving: The mole is changing in size, shape, or color.'
        ]
      },
      {
        heading: 'Lumps Under the Skin',
        content: [
          'You should have a doctor examine any new lump or mass under the skin, especially if it is hard, fixed in place, painless, or growing rapidly. This applies to the breast, neck, testicles, and anywhere else on the body.'
        ]
      }
    ]
  },
  'mri-prep': {
    id: 'mri-prep',
    title: 'Preparing for an MRI',
    category: 'Diagnosis & Testing',
    readTime: '3 min read',
    sections: [
      {
        heading: 'Before the MRI',
        content: [
          'Magnetic Resonance Imaging (MRI) uses a powerful magnetic field and radio waves to create detailed images of organs and tissues. Because of the strong magnet, preparation is crucial.',
          '• **Metal Items:** You must remove all jewelry, watches, hairpins, eyeglasses, and hearing aids. The technologist will ask if you have any metal implants (pacemakers, artificial joints, etc.).',
          '• **Clothing:** You will likely change into a hospital gown. Avoid clothing with metal zippers or buttons.',
          '• **Eating/Drinking:** Unless specifically instructed otherwise, you can usually eat, drink, and take your medications normally.'
        ]
      },
      {
        heading: 'During the Procedure',
        content: [
          'You will lie on a motorized table that slides into the narrow, tube-like scanner. The machine makes loud tapping or thumping noises; you may be given earplugs or headphones. Staying completely still is very important for clear images. The process usually takes 30 to 60 minutes.'
        ]
      }
    ]
  },
  'endoscopy': {
    id: 'endoscopy',
    title: 'What to Expect During an Endoscopy',
    category: 'Diagnosis & Testing',
    readTime: '4 min read',
    sections: [
      {
        heading: 'What is an Endoscopy?',
        content: [
          'An endoscopy is a procedure where a doctor uses a flexible tube with a camera (endoscope) to examine the lining of your upper digestive tract (esophagus, stomach, and duodenum).'
        ]
      },
      {
        heading: 'Preparation and Procedure',
        content: [
          '• **Fasting:** You will usually need to stop eating and drinking 4 to 8 hours before the procedure to ensure your stomach is empty.',
          '• **Sedation:** You will typically be given a sedative to help you relax or sleep during the test. A local anesthetic may be sprayed into your throat to numb it.',
          '• **The Exam:** The doctor gently guides the endoscope down your throat. It does not interfere with your breathing. The exam itself usually takes only 15 to 30 minutes.'
        ]
      },
      {
        heading: 'Recovery',
        content: [
          'After the procedure, you will rest in a recovery area until the medication wears off. You will need someone to drive you home. You might experience a mild sore throat afterwards, which is normal.'
        ]
      }
    ]
  },
  'blood-panels': {
    id: 'blood-panels',
    title: 'Understanding Blood Panels',
    category: 'Diagnosis & Testing',
    readTime: '5 min read',
    sections: [
      {
        heading: 'Common Types of Blood Tests',
        content: [
          'Blood tests are vital tools to evaluate your overall health, check organ function, or screen for diseases.',
          '• **Complete Blood Count (CBC):** Measures different parts of your blood, including red blood cells (which carry oxygen), white blood cells (which fight infection), and platelets (which help with clotting).',
          '• **Basic Metabolic Panel (BMP):** Measures your blood sugar (glucose), calcium, and electrolyte/fluid balance, as well as kidney function.',
          '• **Comprehensive Metabolic Panel (CMP):** Includes everything in a BMP, plus markers for liver function.',
          '• **Lipid Panel:** Checks levels of cholesterol and triglycerides to assess heart disease risk.'
        ]
      },
      {
        heading: 'Deciphering the Results',
        content: [
          'Your results will usually show your numbers next to a "reference range" (what is considered normal). Being slightly outside the range doesn\'t automatically mean you are sick. Your doctor interprets these numbers alongside your symptoms and medical history.'
        ]
      }
    ]
  },
  'biopsy': {
    id: 'biopsy',
    title: 'Decoding Biopsy Results',
    category: 'Diagnosis & Testing',
    readTime: '4 min read',
    sections: [
      {
        heading: 'What is a Biopsy?',
        content: [
          'A biopsy involves removing a small sample of tissue or cells so they can be examined under a microscope by a pathologist. This is often the only definitive way to diagnose most cancers.'
        ]
      },
      {
        heading: 'Understanding the Pathology Report',
        content: [
          'The pathologist produces a report which includes:',
          '• **Gross Description:** What the sample looks like to the naked eye.',
          '• **Microscopic Description:** What the cells look like under the microscope (e.g., cell shape, how fast they are dividing).',
          '• **Diagnosis:** The conclusion. If it\'s benign, the cells are non-cancerous. If it\'s malignant, the cells are cancerous.',
          '• **Tumor Grade:** If cancer is found, grades (often 1-3 or 1-4) describe how abnormal the cells look compared to healthy cells. Lower grades mean slower growing; higher grades suggest faster growing.'
        ]
      }
    ]
  },
  'minimally-invasive': {
    id: 'minimally-invasive',
    title: 'Minimally Invasive vs. Traditional Surgery',
    category: 'Treatment Options',
    readTime: '4 min read',
    sections: [
      {
        heading: 'Traditional Open Surgery',
        content: [
          'Traditional "open" surgery requires a surgeon to make an incision large enough to fully see and access the organ or area being treated. While highly effective and sometimes necessary for complex cases, it involves larger scars, more pain, and longer recovery times.'
        ]
      },
      {
        heading: 'Minimally Invasive Surgery',
        content: [
          'Minimally invasive techniques (like laparoscopy or endoscopy) use specialized instruments and cameras inserted through tiny incisions (or natural body openings).',
          '**Key Benefits Include:**',
          '• Smaller incisions and less scarring',
          '• Less trauma to surrounding healthy tissue',
          '• Decreased blood loss',
          '• Shorter hospital stays and a faster return to normal activities',
          '• Reduced post-operative pain'
        ]
      }
    ]
  },
  'robotic-benefits': {
    id: 'robotic-benefits',
    title: 'Benefits of Robotic-Assisted Procedures',
    category: 'Treatment Options',
    readTime: '3 min read',
    sections: [
      {
        heading: 'The Next Level of Precision',
        content: [
          'Robotic-assisted surgery is a highly advanced form of minimally invasive surgery. Despite the name, the robot does not perform the surgery; the surgeon remains continuously in control.'
        ]
      },
      {
        heading: 'Advantages for the Patient',
        content: [
          '• **Enhanced Precision:** The system filters out even the slightest human hand tremors.',
          '• **Greater Dexterity:** Robotic instruments have a greater range of motion than the human wrist, allowing for intricate maneuvers in tight spaces.',
          '• **Superior Visualization:** The surgeon views a magnified, high-definition 3D image of the surgical site.',
          '• **Faster Recovery:** Like other minimally invasive methods, it usually results in less pain, less blood loss, and a quicker return home.'
        ]
      }
    ]
  },
  'recovery-plans': {
    id: 'recovery-plans',
    title: 'Post-Operative Recovery Plans',
    category: 'Treatment Options',
    readTime: '4 min read',
    sections: [
      {
        heading: 'The Importance of a Plan',
        content: [
          'Surgery is just one step in your health journey. A well-structured recovery plan is crucial for optimal healing and returning to your normal life safely.'
        ]
      },
      {
        heading: 'Key Elements of Recovery',
        content: [
          '• **Pain Management:** Follow your doctor\'s instructions regarding pain medication to stay ahead of the pain.',
          '• **Wound Care:** Keep the incision site clean and dry as directed to prevent infection.',
          '• **Movement:** While rest is important, most doctors encourage early, gentle mobilization (like walking) to prevent blood clots and promote circulation.',
          '• **Nutrition:** Eating a balanced diet rich in protein and vitamins helps tissue heal rapidly.',
          '• **Follow-Up:** Attend all scheduled post-operative appointments so your surgeon can monitor your progress.'
        ]
      }
    ]
  },
  'medication-management': {
    id: 'medication-management',
    title: 'Medication Management Strategies',
    category: 'Treatment Options',
    readTime: '3 min read',
    sections: [
      {
        heading: 'Taking Control of Your Meds',
        content: [
          'Taking multiple medications can be confusing, but proper management is essential to ensure they work effectively and to avoid dangerous interactions.'
        ]
      },
      {
        heading: 'Best Practices',
        content: [
          '• **Keep an Updated List:** Write down every medication you take, including doses, over-the-counter drugs, and supplements. Bring this to all doctor appointments.',
          '• **Use Pill Organizers:** A daily or weekly pillbox can visually confirm if you\'ve taken your dose.',
          '• **Set Reminders:** Use phone alarms, apps, or tie taking medication to a daily routine (like brushing your teeth).',
          '• **Communicate:** Always ask your doctor or pharmacist about side effects, what foods to avoid, and what to do if you miss a dose.'
        ]
      }
    ]
  }
};
