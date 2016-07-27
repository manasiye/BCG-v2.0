export let APP_CONTENT = [
    {
        "pageId": "PageHome",
        "pageTitle": "BCG",
        "sections": [
            {
                "id": "1",
                "title": "BCG For Bladder Cancer",
                // "content": "<p>BCG is a weakened form of the bacteria that causes tuberculosis (TB). It is the standard of care to treat bladder cancer.</p><p>BCG can be given after the tumor growth in your bladder has been completely removed.</p><p>BCG triggers your immune system to attack the cancer cells in your bladder. BCG may stop the future growth of cancer cells (tap on the image below for explanaton).</p>"
            }
        ]
    },
    {
        "pageId": "PageIntro",
        "pageTitle": "BCG Treatment",
        "sections": [
            {
                "id": "1",
                "title": "What is BCG (Bacillus Calmette-Guerin)?",
                "content": "<p>BCG is a weakened form of the bacteria that causes tuberculosis (TB). It is the standard of care to treat bladder cancer.</p><p>BCG can be given after the tumor growth in your bladder has been completely removed.</p><p>BCG triggers your immune system to attack the cancer cells in your bladder. BCG may stop the future growth of cancer cells (tap on the image below for explanaton).</p>"
            }
        ]
    },
    {
        "pageId": "PageTreatment",
        "pageTitle": "Before Treatment",
        "sections": [
            {
                "id": "1",
                "title": "Before Treatment Begins, Tell Your Doctor",
                "content": "<img  src='./img/text/text_before.png' ng-click='openModal({type:'audio'})'/><ul><li>If you have been taking any medications, vitamins, herbs or dietry supplements</li><li>If you have any allergies</li><li>If you received the smallpox vaccine recently</li><li>If you have ever had a positive test for tuberculosis</li><li>If you have fever, infection, severe burn, or an immune disorder</li><li>If you are pregnant or breastfeeding</li></ul><img src='./img/figures/talkingtodoc.png'>"
            },
            {
                "id": "2",
                "title": "You Should Not Undergo BCG Treatment If:",
                "content": "<ul><li>There is difficulty inserting a catheter</li><li>Your urine is thick or very dark color from blood</li><li>You have a urinary tract infection (UTI)</li><li>You have had transurethral surgery within the past 7-14 days</li></ul><br /><p>It is important to follow the treatment instuctions carefully, for two main reasons:</p><ul><li>If you do not follow the instructions, the BCG may not work efficiently</li></ul><ul><li>Contact with BCG may make others sick. To protect others from the BCG in your urine, follow the safety instructions.</li></ul><br /><h3 class='blue title-section'>Preparing for Treatment</h3><h3>Starting 4 Hours Before Your Treatment Starts:</h3><ul><li><strong>It is advisable to restrict fluids.</strong> If you drink liquids, there may not be enough room in your bladder for the BCG.</li><li><strong>If possible, try to avoid emptying your bladder (peeing).</strong></li></ul>"
            },
            {
                "id": "3",
                "title": "How is BCG Given?",
                "content": " <img src='./img/text/text_during.png' ng-click='openModal({type:'audio'})'/><p>First a tube called a catheter is inserted through your urethra (the opening where you urinate) into your bladder. The BCG is given as a liquid. It is put into the catheter and it flows into your bladder. This part of the treatment is called bladder instillation. The BCG needs to stay in your bladder for two hours in order to work.</p>                        <img src='./img/figures/administration_large.png'>"
            },
            {
                "id": "4",
                "title": "How Does BCG Work?",
                "content": "<p>Not all patients are able to hold BCG in the bladder for the full two hours. If you are able to hold it in for the full two hours, you may go home to complete the treatment.</p><p>If you are NOT able to hold it in, you will remain in the clinic for two hours with the catheter in place. A clamp will be placed on the catheter to hold the BCG in your bladder.</p><img   src='./img/figures/twohours_illustration_large.png'>"
            },
            {
                "id": "5",
                "title": "Instructions for Full Treatment Schedule",
                "content": "<div class='row no-padding'><div><img class='calendar' src='./img/calendar_large.png'></img><p>You will be treated once a week for six weeks. After the first six weeks, some physicians may recommend a maintenance schedule which follows the SWOG (Southwest Oncology Group) protocol:</p><p>3 weekly treatments at 3, 6, 12, 18, 24, 30 and 36 months</p></div></div></div><div class='see-timeline-img' ui-sref='app.timeline'></div>"
            },
            {
                "id": "6",
                "title": "For 6 Hours After Each Treatment:<",
                "content": "<ul><li>You may take Tylenol<sup>&reg;</sup>/acetaminophen (for any fever or pain) or Benadryl<sup>&reg;</sup>/diphehydramine (for itching) if needed</li><li>To avoid splashing urine and exposing other people to BCG, both men and women should sit down to urinate</li><li>After you urinate, pour two cups of full-strength (not diluted) bleach into the toilet and then wait 15 minutes before closing the toilet lid and flushing</li><li>Wash your hands and genitals after you urinate. This will help protect your skin from getting irritated by the BCG in your urine</li></ul>"
            },
            {
                "id": "7",
                "title": "For 6 Weeks After Treatment:",
                "content": "<ul><li>Drink plenty of water to flush the remaining BCG out of your bladder</li><li>While you are in treatment, and for six weeks afterwards, always use a condom during sex</li><li>While you are receiving BCG treatments, you or your partner should NOT become pregnant. No one knows how BCG affects sperm, eggs, embryos, or fetuses</li></ul><ul><li>Wash your hands and genitals after you urinate. This will help protect your skin from getting irritated by the BCG in your urine</li></ul>"
            }
        ]
    },
    {
        "pageId": "PageSideEffects",
        "pageTitle": "Introduction to Pelvic Rehab",
        "sections": [
            {
                "id": "1",
                "title": "Most Common Side Effects",
                "content": `<ul>
                <li>Frequent, painful and burning urination</li>
                <li>Flu-like symptoms (fever, chills) that may occur 24-36 hours after recieving BCG</li>
                <li>Nausea (upset stomach), occasional vomiting</li>
                <li>Loss of appetite</li>
                <li>Difficulty urinating or blood in urine</li>
                <li>Persistent low-grade fever (temperature below 100.5&deg;F / 38&deg;C) for less than 2 days</li>
                <li>Joint pain</li>
                <li>Cough</li>
                <li>Skin rash</li>
                </ul>`
            },
            {
                "id": "2",
                "title": "Some Rare Yet Severe Side Effects",
                "content": `
                <p>Side effects from widespread infection (sepsis) or allergic reaction can occur within a week of bladder surgery or BCG treatments.</p>
                <p>These reactions are rare, but when they do happen, can be serious. If you experience these symptoms, you may need to be admitted to the hospital for treatment.</p>
                <h3>Get Medical Attention Immediately If You Have:</h3>
                <ul>
                    <li>High fever (temperature below 101.5&deg;F/38&deg;C) for more than 24 hours, or a fever with chills</li>
                    <li>Severe shivering</li>
                    <li>Dizziness or feeling light-headed</li>
                    <li>Shortness of breath</li>
                    <li>Confusion</li>
                    <li>Weakness</li>
                </ul>
                <img id='thermometer' class='figure' src='./img/figures/thermometer_image.png' />`
            },
            {
                "id": "3",
                "title": "Call your doctor immediately if you experience any signs of an allergic reaction:",
                "content": "<ul><li>Itching</li><li>Hives</li><li>Swelling of your face or hands</li><li>Swelling or tingling in the mouth or throat</li><li>Tightness in your chest</li></ul> <img id='talkingonphone' src='./img/figures/talkingonphone_image.png' class=æfigure' />"
            }
        ]
    },
    {
        "pageId": "PageQuestions",
        //"pageTitle": "FAQ",
        "sections": [
            {
                "id": "1",
                "title": "Frequently Asked Questions",
                "content": "<ul><li>Will a tuberculosis (PPD) test be positive after BCG treatment?</li><li>Yes</li><li>Is it OK to recieve BCG treatment if I test positive for tuberculosis (TB)?</li><li>Yes</li><li>Is it OK to be around pregnant women after I receive BCG treatment?</li><li>Yes</li><li>Can someone get tuberculosis if I forget to clean the toilet while i'm being treated with BCG?</li><li>Yes</li><li>Should I be worried if I have blood in my urine after treatment?</li><li>You should contact your doctor if you have bright red blood, heavy bleeding, large blood clots, or trouble urinating.</li><li>Is it OK to go through BCG treatment if I am taking medicines that weaken the immune system(steroids)?</li><li>No. Be sure to tell your doctor before treatment begins about all medications you are taking.</li><li>Will it hurt when the catheter is inserted?</li><li><p>It may be uncomfortable to have the catheter inserted.</p><p>Some physicians use topical numbing medication to ease your discomfort.</p></li></ul><p><b>If you have additional questions, please call the clinic.</b></p>"
            }
        ]
    },
    {
        "pageId": "PageHelp",
        "pageTitle": "Help: Navigating the Application",
        "sections": [
            {
                "id": "1",
                "title": "Help: Navigating the Application",
                "content": "<h3>Narrator</h3><p>Tapping on the narrow icon will give you more information on each page.</p>"
            },
            {
                "id": "2",
                "title": "Help: Navigating the Application",
                "content": "<h3>Pages</h3><p>Swipe with your fingers to go to the next page or to return to the previous page.</p>"
            },
            {
                "id": "3",
                "title": "Help: Navigating the Application",
                "content": "<p>Tap on the bottom bar to take you to the desired page.</p>"
            },
            {
                "id": "4",
                "title": "Help: Navigating the Application",
                "content": "<h3>Buttons</h3><p>Tapping on 'See Timeline' button will take you to the timeline image.</p>"
            },
            {
                "id": "5",
                "title": "Help: Navigating the Application",
                "content": "<p>In the timeline image tapping on the hour button will highlight the relevant information.</p>"
            },
            {
                "id": "6",
                "title": "Help: Navigating the Application",
                "content": "<h3>Video</h3><p>Tap on the video icon to play the animation.</p>"
            }
        ]
    },
    {
        "pageId": "PageAck",
       // "pageTitle": "Acknowledgement",
        "sections": [
            {
                "id": "1",
                "title": "Acknowledgement",
                "content": "<img  src='./img/300.png' class='ack-image'/><p>Applied Technology Laboratory for Advanced Surgery Program Acknowledges</p><p>the following for providing constructive feedback to the content of the app:</p><p>Nihal Mohamed, MD, PhD, Cheryl Lee, MD, Mark Soloway, MD,</p> <p>Donald Lamm, MD, Heather Goltz, PhD, Monica Smith, BA, Diane Quale, JD</p> <p>The BCAN (Bladder Cancer Advocacy Network) Scientific Advisory Board</p><p>Monetary Support from :</p><p>Arnold Zimmer and Family</p><p>Robert P. Huben Endowed Professorship of Urology Oncology</p><p>Roswell Park Alliance Foundation</p>"
            }
        ]
    }
];