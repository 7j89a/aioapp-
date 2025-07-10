
import { GoogleGenAI } from "@google/genai";
import { Question } from "../types";

const API_KEY = process.env.API_KEY;

if (!API_KEY) {
  console.warn("Gemini API key not found. Enhanced explanations will be disabled.");
}

const ai = new GoogleGenAI({ apiKey: API_KEY });

export const getEnhancedExplanation = async (question: Question): Promise<string> => {
  if (!API_KEY) {
    return "ميزة الشرح المعزز غير متاحة حاليًا.";
  }

  const prompt = `
    أنت مدرس خبير ومساعد. اشرح الإجابة الصحيحة للسؤال التالي بطريقة مفصلة ومبسطة ومناسبة للمتعلمين.
    
    السؤال: "${question.question}"
    الخيارات: ${question.options.join(', ')}
    الإجابة الصحيحة: "${question.options[question.correct]}"
    
    اشرح لماذا هذه هي الإجابة الصحيحة وقدم بعض السياق الإضافي أو الحقائق الممتعة المتعلقة بالموضوع لتسهيل الفهم. اجعل الشرح غنيًا بالمعلومات وجذابًا.
  `;

  try {
    const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: prompt,
    });
    return response.text;
  } catch (error) {
    console.error("Error generating explanation from Gemini:", error);
    return "عذرًا، حدث خطأ أثناء إنشاء شرح إضافي. يرجى المحاولة مرة أخرى.";
  }
};
