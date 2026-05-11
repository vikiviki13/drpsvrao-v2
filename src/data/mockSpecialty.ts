import { SpecialtyData } from '../types';

export const thyroidData: SpecialtyData = {
  id: 'thyroid',
  title: 'Endocrine Surgery: Thyroid',
  patientFriendlyName: 'Understanding Thyroid Conditions',
  heroImage: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=2000',
  overview: 'The thyroid is a small, butterfly-shaped gland in your neck that controls how your body uses energy. When it produces too much or too little hormone, or when nodules (lumps) form, it can affect your entire body. Our goal is to help you understand your condition and provide the safest, most effective treatment options available.',
  symptoms: [
    { name: 'Energy Changes', description: 'Feeling unusually tired (fatigue) or constantly restless and jittery.', iconName: 'Battery' },
    { name: 'Weight Fluctuations', description: 'Unexplained weight gain or difficulty losing weight, or sudden weight loss.', iconName: 'Scale' },
    { name: 'Heart Rate', description: 'Noticing a faster than normal heartbeat, palpitations, or a very slow heart rate.', iconName: 'HeartPulse' },
    { name: 'Neck Swelling', description: 'A visible lump or swelling in the front of your neck, sometimes causing trouble swallowing.', iconName: 'User' }
  ],
  diagnosisSteps: [
    { step: 1, title: 'Physical Exam', description: 'Your doctor will gently feel your neck to check for lumps or enlargement in the thyroid gland.', iconName: 'Stethoscope' },
    { step: 2, title: 'Blood Tests', description: 'A simple blood draw to measure your hormone levels (like TSH) and check how well your thyroid is working.', iconName: 'Syringe' },
    { step: 3, title: 'Ultrasound', description: 'A painless imaging test using sound waves to create a picture of your thyroid and look closely at any nodules.', iconName: 'Waves' },
    { step: 4, title: 'Small Needle Biopsy', description: 'If a lump is found, a very thin needle may be used to take a tiny sample of cells to ensure it is benign (non-cancerous).', iconName: 'Microscope' }
  ],
  treatments: [
    { title: 'Medication Management', description: 'Daily pills to replace missing thyroid hormones or to slow down an overactive thyroid.', type: 'Non-Surgical' },
    { title: 'Radioactive Iodine', description: 'A treatment taken by mouth that targets and shrinks overactive thyroid cells safely.', type: 'Non-Surgical' },
    { title: 'Partial Thyroidectomy', description: 'Surgical removal of just the affected half of the thyroid, often allowing the remaining half to function normally.', type: 'Surgical' },
    { title: 'Total Thyroidectomy', description: 'Complete removal of the thyroid gland, typically recommended for thyroid cancer or severe overactivity.', type: 'Surgical' }
  ],
  technologies: [
    { name: 'Nerve Monitoring', description: 'Advanced sensors that help surgeons identify and protect your vocal cord nerves during surgery, ensuring your voice remains safe.' },
    { name: 'Minimally Invasive Techniques', description: 'Using tiny cameras and specialized instruments to perform surgery through very small incisions, meaning less pain and a tiny, hidden scar.' }
  ],
  equipment: [
    { name: 'Intraoperative Nerve Monitor', image: 'https://images.unsplash.com/photo-1530497610245-94d3c16cda28?auto=format&fit=crop&q=80&w=800' },
    { name: 'Advanced Energy Sealer', image: 'https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?auto=format&fit=crop&q=80&w=800' }
  ],
  faqs: [
    { question: 'Will I have a large scar on my neck?', answer: 'No. With modern minimally invasive techniques, the incision is usually very small (about 1 to 2 inches) and is carefully placed in a natural skin crease so it fades significantly over time.' },
    { question: 'Will my voice change after surgery?', answer: 'Voice changes are a common concern, but they are rare. We use advanced nerve monitoring technology during the entire procedure to protect the nerves that control your vocal cords.' },
    { question: 'Will I need to take medication forever?', answer: 'If your entire thyroid is removed, you will need to take a simple daily hormone replacement pill. If only part is removed, your remaining thyroid may produce enough hormone on its own.' }
  ]
};

export const neurologyData: SpecialtyData = {
  id: 'neurology',
  title: 'Neurosurgery',
  patientFriendlyName: 'Understanding Neurological Conditions',
  heroImage: 'https://images.unsplash.com/photo-1559757175-5700dde675bc?auto=format&fit=crop&q=80&w=2000',
  overview: 'The nervous system, comprising the brain, spinal cord, and nerves, is the complex command center of your body. Conditions affecting these areas can impact movement, sensation, and cognition. Our advanced neurosurgical approach prioritizes maximum effectiveness with the absolute minimum of invasiveness, protecting your critical functions.',
  symptoms: [
    { name: 'Chronic Headaches', description: 'Severe, persistent headaches that may worsen in the morning or with strain.', iconName: 'Activity' },
    { name: 'Nerve Pain', description: 'Sharp, shooting pain radiating down the arms or legs (sciatica).', iconName: 'Waves' },
    { name: 'Motor Weakness', description: 'Unexplained weakness, numbness, or loss of balance and coordination.', iconName: 'User' },
    { name: 'Vision Changes', description: 'Double vision, blurred vision, or sudden loss of peripheral sight.', iconName: 'Eye' }
  ],
  diagnosisSteps: [
    { step: 1, title: 'Neurological Exam', description: 'Testing reflexes, muscle strength, eye and mouth movement, coordination, and alertness.', iconName: 'Stethoscope' },
    { step: 2, title: 'MRI Scan', description: 'High-resolution magnetic resonance imaging to visualize the brain and spinal cord in detail.', iconName: 'Microscope' },
    { step: 3, title: 'CT Scan', description: 'Fast X-ray imaging to check for bleeding, fractures, or tumors.', iconName: 'Battery' },
    { step: 4, title: 'EEG / EMG', description: 'Testing the electrical activity of the brain or the nerves and muscles.', iconName: 'HeartPulse' }
  ],
  treatments: [
    { title: 'Medication & Therapy', description: 'Managing symptoms through targeted medications and physical rehabilitation.', type: 'Non-Surgical' },
    { title: 'Minimally Invasive Spine Surgery', description: 'Relieving nerve pressure through tiny incisions using tubular retractors.', type: 'Surgical' },
    { title: 'Craniotomy', description: 'Temporarily removing a bone flap from the skull to access the brain for tumor removal.', type: 'Surgical' },
    { title: 'Deep Brain Stimulation', description: 'Implanting electrodes in the brain to treat movement disorders like Parkinson\'s.', type: 'Surgical' }
  ],
  technologies: [
    { name: 'Intraoperative MRI', description: 'Real-time MRI scanning during surgery to ensure complete tumor removal.' },
    { name: 'Neuronavigation', description: 'A GPS-like system for the brain that guides the surgeon\'s instruments with sub-millimeter precision.' }
  ],
  equipment: [
    { name: 'AeroScan MRI System', image: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=800' }
  ],
  faqs: [
    { question: 'Will my head need to be entirely shaved?', answer: 'In most modern procedures, only a small strip of hair along the incision line is shaved, making it easy to hide after surgery.' },
    { question: 'What is the recovery time for spine surgery?', answer: 'With minimally invasive techniques, many patients walk the same day and return to light activities within a few weeks.' }
  ]
};

export const orthopedicsData: SpecialtyData = {
  id: 'orthopedics',
  title: 'Orthopedics',
  patientFriendlyName: 'Understanding Orthopedic Conditions',
  heroImage: 'https://images.unsplash.com/photo-1582719478250-c89400bbbfc5?auto=format&fit=crop&q=80&w=2000',
  overview: 'Your musculoskeletal system includes bones, joints, ligaments, tendons, and muscles. Whether dealing with a sports injury, trauma, or degenerative diseases like arthritis, our goal is to eliminate pain and restore your full range of mobility using the least invasive methods possible.',
  symptoms: [
    { name: 'Joint Pain', description: 'Aching, stiffness, or swelling in joints, especially after resting or activity.', iconName: 'Activity' },
    { name: 'Limited Range of Motion', description: 'Inability to fully straighten or bend a joint like the knee or elbow.', iconName: 'User' },
    { name: 'Instability', description: 'A feeling that the joint is "giving way" or cannot support your weight.', iconName: 'Scale' },
    { name: 'Numbness / Tingling', description: 'Sensations in the hands or feet, often pointing to nerve compression in the spine or wrists.', iconName: 'Waves' }
  ],
  diagnosisSteps: [
    { step: 1, title: 'Physical Assessment', description: 'Checking range of motion, joint stability, alignment, and areas of tenderness.', iconName: 'Stethoscope' },
    { step: 2, title: 'X-Rays', description: 'The frontline imaging tool to look for fractures, alignment issues, or arthritis.', iconName: 'Microscope' },
    { step: 3, title: 'MRI Scan', description: 'Used to see soft tissue injuries like torn ligaments, tendons, or cartilage.', iconName: 'Battery' },
    { step: 4, title: 'Joint Aspiration', description: 'Removing a small amount of fluid from the joint to test for infection or gout.', iconName: 'Syringe' }
  ],
  treatments: [
    { title: 'Physical Therapy', description: 'Targeted exercises to strengthen muscles and improve flexibility.', type: 'Non-Surgical' },
    { title: 'Injections', description: 'Corticosteroids or hyaluronic acid injected directly into the joint for pain relief.', type: 'Non-Surgical' },
    { title: 'Arthroscopy', description: 'A minimally invasive surgery using a tiny camera to repair joint damage through small punctures.', type: 'Surgical' },
    { title: 'Joint Replacement', description: 'Replacing a damaged joint (like a hip or knee) with a highly durable artificial implant.', type: 'Surgical' }
  ],
  technologies: [
    { name: 'Robotic-Assisted Arthroplasty', description: 'Using robotic arms for ultra-precise preparation of the bone and placement of joint implants.' },
    { name: 'Patient-Specific Instrumentation', description: 'Creating custom 3D-printed surgical guides based on your unique anatomy.' }
  ],
  equipment: [
    { name: 'Nexus X-1 Robotic System', image: 'https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?auto=format&fit=crop&q=80&w=800' }
  ],
  faqs: [
    { question: 'How long do artificial joints last?', answer: 'Modern implants are highly durable and can last 15 to 20 years, sometimes longer, depending on your activity level and age.' },
    { question: 'Will I need physical therapy?,', answer: 'Yes, physical therapy is a critical component of orthopedic recovery, both before (prehab) and after surgery.' }
  ]
};

export const cardiologyData: SpecialtyData = {
  id: 'cardiology',
  title: 'Cardiology',
  patientFriendlyName: 'Understanding Heart Conditions',
  heroImage: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=2000',
  overview: 'The heart is the engine of the body, pumping oxygen-rich blood to all your vital organs. Cardiovascular issues can range from blocked arteries to valve defects or irregular rhythms. We leverage cutting-edge diagnostic and interventional tools to keep your heart beating strong.',
  symptoms: [
    { name: 'Chest Pain', description: 'Pressure, tightness, or a squeezing ache in the center of the chest.', iconName: 'HeartPulse' },
    { name: 'Shortness of Breath', description: 'Difficulty breathing, especially during physical exertion or when lying flat.', iconName: 'Waves' },
    { name: 'Palpitations', description: 'A feeling that your heart is fluttering, racing, or skipping a beat.', iconName: 'Activity' },
    { name: 'Edema (Swelling)', description: 'Swelling in the legs, ankles, feet, or abdomen due to fluid buildup.', iconName: 'Battery' }
  ],
  diagnosisSteps: [
    { step: 1, title: 'Electrocardiogram (ECG)', description: 'A quick test that records the electrical signals in your heart to detect arrhythmias.', iconName: 'HeartPulse' },
    { step: 2, title: 'Echocardiogram', description: 'An ultrasound of the heart to see how your heart muscle and valves are pumping blood.', iconName: 'Microscope' },
    { step: 3, title: 'Stress Test', description: 'Monitoring your heart while you walk on a treadmill to see how it performs under physical stress.', iconName: 'Activity' },
    { step: 4, title: 'Cardiac Catheterization', description: 'Threading a thin tube to the heart to view blockages in the arteries using X-ray dye.', iconName: 'Syringe' }
  ],
  treatments: [
    { title: 'Lifestyle & Medication', description: 'Diet changes, exercise, and medications to lower blood pressure, cholesterol, or control rhythm.', type: 'Non-Surgical' },
    { title: 'Angioplasty & Stenting', description: 'Using a balloon to open a blocked artery and placing a wire mesh tube (stent) to keep it open.', type: 'Non-Surgical' },
    { title: 'Coronary Artery Bypass (CABG)', description: 'Creating a new path for blood to flow around a blocked artery using a healthy blood vessel.', type: 'Surgical' },
    { title: 'Minimally Invasive Valve Repair', description: 'Repairing or replacing a sick heart valve through small incisions between the ribs rather than opening the chest.', type: 'Surgical' }
  ],
  technologies: [
    { name: 'Transcatheter Aortic Valve Replacement (TAVR)', description: 'Replacing the aortic valve without open-heart surgery by delivering it through a catheter in the leg.' },
    { name: '3D Cardiac Mapping', description: 'Creating high-resolution electrical maps of the heart to pinpoint and treat complex arrhythmias.' }
  ],
  equipment: [
    { name: 'Nexus X-1 Robotic System', image: 'https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?auto=format&fit=crop&q=80&w=800' }
  ],
  faqs: [
    { question: 'What is the difference between a heart attack and cardiac arrest?', answer: 'A heart attack is a "plumbing" problem (blocked blood flow), while cardiac arrest is an "electrical" problem (the heart suddenly stops beating).' },
    { question: 'Can valve surgery be done without opening the chest?', answer: 'Yes, many valve repairs and replacements can now be performed either robotically or via a catheter through the groin.' }
  ]
};

export const generalSurgeryData: SpecialtyData = {
  id: 'general-surgery',
  title: 'General Surgery',
  patientFriendlyName: 'Understanding General Surgery',
  heroImage: 'https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&q=80&w=2000',
  overview: 'General surgery covers a wide array of procedures focusing primarily on the abdominal organs, including the intestines, esophagus, stomach, gallbladder, and hernias. Our approach heavily favors minimally invasive laparoscopic and robotic techniques to ensure rapid recovery and minimal scarring.',
  symptoms: [
    { name: 'Abdominal Pain', description: 'Sharp, dull, or cramping pain in the belly that doesn\'t go away.', iconName: 'Activity' },
    { name: 'Digestive Issues', description: 'Chronic acid reflux, nausea, vomiting, or changes in bowel habits.', iconName: 'Waves' },
    { name: 'Visible Bulges', description: 'A lump in the abdomen or groin that may ache or burn, indicating a hernia.', iconName: 'User' },
    { name: 'Jaundice', description: 'Yellowing of the skin and eyes, often tied to gallbladder or liver issues.', iconName: 'Eye' }
  ],
  diagnosisSteps: [
    { step: 1, title: 'Physical Exam', description: 'Reviewing your medical history and gently pressing the abdomen to locate pain or masses.', iconName: 'Stethoscope' },
    { step: 2, title: 'Blood Panels', description: 'Testing for signs of infection, inflammation, or liver/pancreas function.', iconName: 'Syringe' },
    { step: 3, title: 'CT Scan or Ultrasound', description: 'Imaging the abdominal cavity to accurately diagnose issues like appendicitis or gallstones.', iconName: 'Battery' },
    { step: 4, title: 'Endoscopy', description: 'Using a camera to quickly look inside the stomach or intestines.', iconName: 'Microscope' }
  ],
  treatments: [
    { title: 'Watchful Waiting & Diet', description: 'Managing mild hernias or digestive issues with lifestyle modifications.', type: 'Non-Surgical' },
    { title: 'Laparoscopic Cholecystectomy', description: 'Minimally invasive removal of a diseased gallbladder.', type: 'Surgical' },
    { title: 'Hernia Repair', description: 'Surgically returning tissue to its proper place and reinforcing the abdominal wall with a strong mesh.', type: 'Surgical' },
    { title: 'Bowel Resection', description: 'Removing a diseased portion of the intestine and reconnecting the healthy segments.', type: 'Surgical' }
  ],
  technologies: [
    { name: 'Advanced Laparoscopy', description: 'Using 4K cameras and specialized thin instruments through tiny "keyhole" incisions.' },
    { name: 'Vessel Sealing Energy', description: 'Using radiofrequency tools that cut and stop bleeding simultaneously, drastically speeding up procedures.' }
  ],
  equipment: [
    { name: 'ThermaSeal RF Generator', image: 'https://images.unsplash.com/photo-1530497610245-94d3c16cda28?auto=format&fit=crop&q=80&w=800' },
    { name: 'VisionMax HD Endoscope', image: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=800' }
  ],
  faqs: [
    { question: 'Will I be able to eat normally without a gallbladder?', answer: 'Yes. The gallbladder simply stores bile. Without it, bile drips continuously into your digestive system, which is usually enough for normal digestion.' },
    { question: 'What is the recovery like for laparoscopic surgery?', answer: 'Most patients go home the same day or the next, and can resume normal light activities within just a few days.' }
  ]
};

export const breastSurgeryData: SpecialtyData = {
  id: 'breast-surgery',
  title: 'Breast Surgery',
  patientFriendlyName: 'Understanding Breast Surgery',
  heroImage: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=2000',
  overview: 'Breast surgery encompasses the diagnosis and treatment of both benign (non-cancerous) conditions and breast cancer. We believe in an oncoplastic approach—combining world-class cancer removal with plastic surgery techniques to preserve the natural appearance of the breast as much as possible.',
  symptoms: [
    { name: 'Breast Lumps', description: 'A new, hard, or painless lump felt within the breast or underarm tissue.', iconName: 'User' },
    { name: 'Skin Changes', description: 'Dimpling, puckering, redness, or scaling of the breast skin.', iconName: 'Eye' },
    { name: 'Nipple Discharge', description: 'Unusual discharge, particularly if it is clear or bloody.', iconName: 'Waves' },
    { name: 'Pain or Tenderness', description: 'Though rarely a sign of cancer, persistent pain should always be evaluated.', iconName: 'Activity' }
  ],
  diagnosisSteps: [
    { step: 1, title: 'Clinical Exam', description: 'A thorough physical examination of the breasts and lymph nodes by a specialist.', iconName: 'Stethoscope' },
    { step: 2, title: 'Mammogram & 3D Imaging', description: 'Advanced X-rays specifically designed to detect early abnormalities in breast tissue.', iconName: 'Battery' },
    { step: 3, title: 'Ultrasound or MRI', description: 'Additional imaging to clarify dense breast tissue or evaluate the extent of a finding.', iconName: 'Microscope' },
    { step: 4, title: 'Core Needle Biopsy', description: 'Extracting a tiny core of tissue from the lump to test for cancerous cells.', iconName: 'Syringe' }
  ],
  treatments: [
    { title: 'High-Risk Screening', description: 'Enhanced monitoring and genetic testing for patients with a strong family history.', type: 'Non-Surgical' },
    { title: 'Lumpectomy', description: 'Removing the tumor and a small margin of healthy tissue while preserving the rest of the breast.', type: 'Surgical' },
    { title: 'Mastectomy', description: 'Complete removal of the breast tissue, often offered with immediate reconstruction options.', type: 'Surgical' },
    { title: 'Sentinel Lymph Node Biopsy', description: 'Removing just the first few lymph nodes to accurately check if cancer has spread.', type: 'Surgical' }
  ],
  technologies: [
    { name: 'Oncoplastic Techniques', description: 'Using plastic surgery tissue-reshaping methods during a lumpectomy to prevent dents or asymmetry.' },
    { name: 'Wire-Free Localization', description: 'Using a tiny, safe magnetic or radar seed placed inside the tumor to guide the surgeon precisely without uncomfortable wires.' }
  ],
  equipment: [
    { name: 'Advanced Energy Sealer', image: 'https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?auto=format&fit=crop&q=80&w=800' }
  ],
  faqs: [
    { question: 'What is the difference between a lumpectomy and a mastectomy?', answer: 'A lumpectomy removes only the tumor (preserving the breast), while a mastectomy removes all breast tissue. Your surgeon will discuss which is safest for your specific case.' },
    { question: 'Will I need radiation or chemotherapy?', answer: 'This depends entirely on the tumor type, size, and whether it has spread to lymph nodes. Surgery is usually just one part of a multidisciplinary treatment plan.' }
  ]
};
