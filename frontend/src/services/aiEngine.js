// Healthcare Recommendation System - Offline symptom analysis engine
// Patient health assessment aur department suggestion ka data

export const HealthcareKnowledgeBase = [
  {
    id: "fever",
    keywords: ["fever", "temperature", "chills", "shivering", "warm", "pyrexia", "body ache"],
    condition: "Viral Fever or Seasonal Infection",
    riskLevel: "Moderate",
    department: "General Medicine",
    doctor: "Dr. Ananya Sharma (MD General Medicine)",
    firstAid: [
      "Rest adequately and stay hydrated with water, coconut water, or ORS.",
      "Apply a damp cold cloth compress on the forehead if body temperature is high.",
      "Monitor body temperature every 4 hours using a digital thermometer."
    ],
    precautions: "Consult a doctor immediately if fever exceeds 103°F (39.4°C) or persists beyond 3 days."
  },
  {
    id: "headache",
    keywords: ["headache", "head pain", "migraine", "throbbing head", "dizziness", "temple pain"],
    condition: "Tension Headache / Acute Migraine Strain",
    riskLevel: "Low",
    department: "Neurology",
    doctor: "Dr. Rajesh Varma (DM Neurology)",
    firstAid: [
      "Rest in a quiet, dimly lit room away from bright screens.",
      "Drink plenty of water and maintain adequate hydration.",
      "Gently massage your temples and neck with cool compresses."
    ],
    precautions: "Seek urgent medical attention if accompanied by sudden numbness, speech difficulty, or severe stiff neck."
  },
  {
    id: "stomach_pain",
    keywords: ["stomach", "abdominal", "belly", "nausea", "vomiting", "acidity", "indigestion", "cramp", "bloating"],
    condition: "Gastritis, Acid Reflux, or Food Intolerance",
    riskLevel: "Moderate",
    department: "Gastroenterology",
    doctor: "Dr. Vikram Sethi (DM Gastroenterology)",
    firstAid: [
      "Eat light, non-greasy foods such as bananas, rice, or plain toast.",
      "Sip warm ginger tea or lukewarm water slowly.",
      "Avoid spicy, fried foods, caffeine, and carbonated beverages."
    ],
    precautions: "Seek emergency care if experiencing sharp localized severe abdominal pain or persistent vomiting."
  },
  {
    id: "skin_rash",
    keywords: ["rash", "skin", "itching", "redness", "allergy", "hives", "spots", "eczema"],
    condition: "Contact Dermatitis or Allergic Skin Reaction",
    riskLevel: "Low",
    department: "Dermatology",
    doctor: "Dr. Sneha Kapoor (MD Dermatology)",
    firstAid: [
      "Avoid scratching or rubbing the affected skin area.",
      "Wash gently with fragrance-free cleanser and lukewarm water.",
      "Apply pure aloe vera gel or soothing calamine lotion."
    ],
    precautions: "Consult a doctor immediately if the rash spreads rapidly or causes swelling around facial features."
  },
  {
    id: "cough_cold",
    keywords: ["cough", "cold", "sore throat", "sneezing", "runny nose", "congestion", "flu", "phlegm"],
    condition: "Upper Respiratory Tract Infection / Common Flu",
    riskLevel: "Low",
    department: "ENT (Ear, Nose, Throat)",
    doctor: "Dr. Priya Nair (MS ENT)",
    firstAid: [
      "Gargle with warm saltwater 2 to 3 times daily.",
      "Inhale warm steam for 5 to 10 minutes to clear nasal blockages.",
      "Stay warm and consume honey with warm lemon water."
    ],
    precautions: "Consult an ENT specialist if cough lasts more than 14 days or causes breathing tightness."
  },
  {
    id: "chest_pain",
    keywords: ["chest pain", "chest tightness", "heart", "shortness of breath", "breathing difficulty", "angina"],
    condition: "Cardiovascular Discomfort or Respiratory Distress",
    riskLevel: "High",
    department: "Cardiology",
    doctor: "Dr. Amitab Roy (DM Cardiology)",
    firstAid: [
      "Stop all physical exertion immediately and rest in an upright sitting posture.",
      "Ensure proper room ventilation and loosen tight clothing.",
      "Call emergency medical helpline (102 / 112) immediately."
    ],
    precautions: "🚨 HIGH RISK: Sudden heavy pressure in chest radiating to arms or jaw demands IMMEDIATE EMERGENCY AID."
  },
  {
    id: "joint_pain",
    keywords: ["joint pain", "knee pain", "back pain", "arthritis", "stiffness", "bone pain", "swelling"],
    condition: "Musculoskeletal Strain or Joint Inflammation",
    riskLevel: "Moderate",
    department: "Orthopedics",
    doctor: "Dr. Sanjay Gupta (MS Orthopedics)",
    firstAid: [
      "Apply ice packs for acute swelling or warm compresses for chronic stiffness.",
      "Avoid heavy lifting or sudden high-impact physical movements.",
      "Keep joint elevated comfortably when resting."
    ],
    precautions: "Consult an orthopedic specialist if joint swelling is severe or prevents bearing weight."
  },
  {
    id: "eye_strain",
    keywords: ["eye", "vision", "blurred", "screen strain", "dry eyes", "burning eyes", "eye pain"],
    condition: "Digital Eye Fatigue / Ocular Dryness",
    riskLevel: "Low",
    department: "Ophthalmology",
    doctor: "Dr. Meera Joshi (MD Ophthalmology)",
    firstAid: [
      "Follow 20-20-20 rule: Every 20 mins, look at an object 20 feet away for 20 seconds.",
      "Use lubricating eye drops as recommended by an eye care doctor.",
      "Ensure adequate workspace lighting and reduce digital screen glare."
    ],
    precautions: "Consult an ophthalmologist if experiencing sudden flashes of light, severe pain, or vision impairment."
  }
];

export function analyzePatientInput(userText) {
  const textLower = userText.toLowerCase();
  
  let matchedItem = null;
  let maxMatchCount = 0;

  HealthcareKnowledgeBase.forEach(item => {
    let count = 0;
    item.keywords.forEach(keyword => {
      if (textLower.includes(keyword)) {
        count++;
      }
    });
    if (count > maxMatchCount) {
      maxMatchCount = count;
      matchedItem = item;
    }
  });

  if (matchedItem && maxMatchCount > 0) {
    return buildStructuredResponse(matchedItem);
  }

  return buildGeneralFallbackResponse();
}

function buildStructuredResponse(data) {
  const riskClass = data.riskLevel.toLowerCase() === 'high' ? 'risk-high' : 
                    (data.riskLevel.toLowerCase() === 'moderate' ? 'risk-moderate' : 'risk-low');

  return `
    <p>Based on your reported symptoms, here is your preliminary evaluation:</p>
    
    <div class="recommendation-card">
      <p><strong>Possible Condition:</strong> ${data.condition} 
         <span class="risk-badge ${riskClass}">Risk Level: ${data.riskLevel}</span>
      </p>
      <p style="margin-top: 8px;"><strong>👨‍⚕️ Department:</strong> ${data.department}</p>
      <p style="margin-top: 4px;"><strong>Recommended Specialist:</strong> ${data.doctor}</p>
    </div>

    <p style="margin-top: 12px;"><strong>🩹 Suggested First-Aid & Immediate Care:</strong></p>
    <ul style="margin-left: 20px; margin-top: 6px; line-height: 1.6;">
      ${data.firstAid.map(step => `<li>${step}</li>`).join('')}
    </ul>

    <div style="margin-top: 12px; padding: 10px 14px; background: rgba(239,68,68,0.08); border-left: 4px solid var(--danger-color); border-radius: 6px;">
      <strong style="color: var(--danger-color);">⚠️ Precautions:</strong> ${data.precautions}
    </div>
  `;
}

function buildGeneralFallbackResponse() {
  return `
    <p>Thank you for describing your symptoms.</p>
    <p>To give you a precise specialist recommendation, please describe your main discomfort (e.g., <em>"I have a fever and body ache"</em> or <em>"Stomach cramp after eating"</em>).</p>
    <p style="margin-top: 8px;">Common symptom queries you can ask about:</p>
    <ul style="margin-left: 20px; margin-top: 6px; line-height: 1.6;">
      <li>"High fever and chills"</li>
      <li>"Severe headache and temple pain"</li>
      <li>"Acidity and stomach pain"</li>
      <li>"Red skin rash and itching"</li>
      <li>"Knee joint pain and stiffness"</li>
    </ul>
    <p style="margin-top: 10px; font-size: 13px; color: var(--text-secondary);">
      <em>Disclaimer: This local AI tool provides preliminary guidance. For emergency situations, please contact local medical services immediately.</em>
    </p>
  `;
}
