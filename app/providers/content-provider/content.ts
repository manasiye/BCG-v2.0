export let APP_CONTENT = [
    {
        'id': 'HomePage',
        'pageTitle': 'BCG',
        'sections': [
            {
                'id': '1',
                'title': {
                    'small':'',
                    'large':'INTRODUCTION'
                },
                'content': ``
            }
        ]
    },
    {
        'id': 'PageIntro',
        'title': 'What is BCG?',
        'sections': [
            {
                'id': '1',
                'title': {
                    'small': '',
                    'large': 'BCG TREATMENT'
                },
                'subSections': [
                    {
                        'title': 'What is BCG (Bacillus Calmette-Guerin)?',
                        'content': `<p class='text-content'>BCG is a weakened form of the bacteria that causes tuberculosis (TB). It is the 	        tandard of care to treat bladder cancer.</p>
                                    <p class='text-content'>BCG can be given after the tumor growth in your bladder has been completely removed.</p>
                                    <p class='text-content'>BCG triggers your immune system to attack the cancer cells in your bladder. BCG may stop the future growth of cancer cells (tap on the image below for explanaton).</p>
                                    <div class='fig-container'>
                                        <img src='./img/autoimmunity.png' class='figure-small' />
                                    </div>`
                    },
                    {
                        'title': '',
                        'content': `<div class='blue sub-section-title'>When BCG is Given: Tumor Removal Procedure</div>
                                    <div class='blue sub-section-title'>How BCG Works: BCG Treatment</div>`
                    }
                ]
            }
        ]
    },
    {
        'id': 'PageTreatment',
        'title': 'Treatment',
        'sections': [
            {
                'id': '1',
                'title': {
                    'small': 'TREATMENT',
                    'large': 'BEFORE '
                },
                'subSections': [
                    {
                        'title': 'Before Treatment Begins, Tell Your Doctor',
                        'content': `<ul class='list'>
                                <li class='list-content'>If you have been taking any medications, vitamins, herbs or dietry supplements</li>
                                <li class='list-content'>If you have any allergies</li>
                                <li class='list-content'>If you received the smallpox vaccine recently</li>
                                <li class='list-content'>If you have ever had a positive test for tuberculosis</li>
                                <li class='list-content'>If you have fever, infection, severe burn, or an immune disorder</li>
                                <li class='list-content'>If you are pregnant or breastfeeding.</li>
                            </ul>`
                    },
                    {
                        'title': '',
                        'content': `<img src='./img/figures/talkingtodoc.png'>`
                    },
                    {
                        'title': 'You Should Not Undergo BCG Treatment If:',
                        'content': `
                            <ul class='list'>
                                <li class='list-content'>There is difficulty inserting a catheter</li>
                                <li class='list-content'>Your urine is thick or very dark color from blood</li>
                                <li class='list-content'>You have a urinary tract infection (UTI)</li>
                                <li class='list-content'>You have had transurethral surgery within the past 7-14 days</li>
                            </ul>
                            <br />
                            <p class='text-content'>It is important to follow the treatment instuctions carefully, for two main reasons:</p>
                            <ul class='list'>
                                <li class='list-content'>If you do not follow the instructions, the BCG may not work efficiently</li>
                            </ul>`
                    },
                    {
                        'title': '',
                        'content': `<ul  class='list'>
                                <li class='list-content'>Contact with BCG may make others sick. To protect others from the BCG in your urine, follow the safety instructions.</li>
                            </ul>
                            <br />
                            <h3 class='blue sub-section-title'>Preparing for Treatment</h3>
                            <h3 class='sub-section-title'>Starting 4 Hours Before Your Treatment Starts:</h3>
                            <ul class='list'>
                                <li class='list-content'><strong>It is advisable to restrict fluids.</strong> If you drink liquids, there may not be enough room in your bladder for the BCG.</li>
                                <li class='list-content'><strong>If possible, try to avoid emptying your bladder (peeing).</strong></li>
                            </ul>`
                    }
                ]

            },
            {
                'id': '2',
                'title': {
                    'small': 'TREATMENT',
                    'large': 'DURING '
                },
                'subSections': [
                    {
                        'title': 'How is BCG Given?',
                        'content': `<p class='text-content'>First a tube called a catheter is inserted through your urethra (the opening where you urinate) into your bladder. The BCG is given as a liquid. It is put into the catheter and it flows into your bladder. This part of the treatment is called bladder instillation. The BCG needs to stay in your bladder for two hours in order to work.</p>`
                    },
                    {
                        'title': '',
                        'content': `<img src='./img/figures/administration_large.png'>`
                    },
                    {
                        'title': 'How does BCG Work?',
                        'content': `<p class='text-content'>Not all patients are able to hold BCG in the bladder for the full two hours. If you are able to hold it in for the full two hours, you may go home to complete the treatment.</p>
                            <p class='text-content'>If you are NOT able to hold it in, you will remain in the clinic for two hours with the catheter in place. A clamp will be placed on the catheter to hold the BCG in your bladder.</p>`
                    },
                    {
                        'title': '',
                        'content': `<div class='figure-container'>
                                        <img src='./img/figures/patient_go_home.png' class='patient-home-img'>
                                        <img src='./img/figures/patient_stay_clinic.png'class='patient-stay-img'>
                                    </div>`
                    }
                ]

            }, {
                'id': '3',
                'title': {
                    'small': 'TREATMENT',
                    'large': 'AFTER '
                },
                'subSections': [
                    {
                        'title': 'Instructions for Full Treatment Schedule',
                        'content': `<div>    
                            <img class='calendar' src='./img/calendar_large.png'></img>
                                <p class='text-content'>You will be treated once a week for six weeks. After the first six weeks, some physicians may recommend a maintenance schedule which follows the SWOG (Southwest Oncology Group) protocol:</p>
                                <p class='text-content'>3 weekly treatments at 3, 6, 12, 18, 24, 30 and 36 months</p>
                            </div>`
                    },
                    {
                        'title': 'For 6 Hours After Each Treatment:',
                        'content': `<ul class='list'>
                                <li class='list-content'>You may take Tylenol<sup>&reg;</sup>/acetaminophen (for any fever or pain) or Benadryl<sup>&reg;</sup>/diphehydramine (for itching) if needed</li>
                                <li class='list-content'>To avoid splashing urine and exposing other people to BCG, both men and women should sit down to urinate</li>
                                <li class='list-content'>After you urinate, pour two cups of full-strength (not diluted) bleach into the toilet and then wait 15 minutes before closing the toilet lid and flushing</li>
                                <li class='list-content'>Wash your hands and genitals after you urinate. This will help protect your skin from getting irritated by the BCG in your urine</li>
                            </ul>`
                    },
                    {
                        'title': 'For 6 Weeks After Treatment:',
                        'content': `<ul class='list'>
                                <li class='list-content'>Drink plenty of water to flush the remaining BCG out of your bladder</li>
                                <li class='list-content'>While you are in treatment, and for six weeks afterwards, always use a condom during sex</li>
                                <li class='list-content'>While you are receiving BCG treatments, you or your partner should NOT become pregnant. No one knows how BCG affects sperm, eggs, embryos, or fetuses</li>
                            </ul>`
                    },
                    {
                        'title': '',
                        'content': `<ul class='list'>
                                <li class='list-content'>Wash your hands and genitals after you urinate. This will help protect your skin from getting irritated by the BCG in your urine</li>
                            </ul>`
                    }
                ]
            }
        ]
    }, {
        'id': 'PageSideEffects',
        'title': 'Side Effects',
        'sections': [
            {
                'id': '1',
                'title': {
                    'small': '',
                    'large': 'SIDE EFFECTS'
                },
                'subSections': [
                    {
                        'title': 'Most Common Side Effects',
                        'content': `<ul class='list'>
                                        <li class='list-content'>Frequent, painful and burning urination</li>
                                        <li class='list-content'>Flu-like symptoms (fever, chills) that may occur 24-36 hours after recieving BCG</li>
                                        <li class='list-content'>Nausea (upset stomach), occasional vomiting</li>
                                        <li class='list-content'>Loss of appetite</li>
                                        <li class='list-content'>Difficulty urinating or blood in urine</li>
                                        <li class='list-content'>Persistent low-grade fever (temperature below 100.5&deg;F / 38&deg;C) for less than 2 days</li>
                                        <li class='list-content'>Joint pain</li>
                                        <li class='list-content'>Cough</li>
                                        <li class='list-content'>Skin rash</li>
                                    </ul>`
                    },
                    {
                        'title': 'Some Rare Yet Severe Side Effects',
                        'content': `<p class='text-content'>Side effects from widespread infection (sepsis) or allergic reaction can occur               within a week of bladder surgery or BCG treatments.</p>
                                            <p class='text-content'>These reactions are rare, but when they do happen, can be serious. If you experience these symptoms, you may need to be admitted to the hospital for treatment.</p>
                                    <div class='sub-section-title'>Get Medical Attention Immediately If You Have:</div>
                                    <div>
                                        <img class='thermometer' src='./img/figures/thermometer_image.png' />
                                        <ul class='list'>
                                            <li class='list-content'>High fever (temperature below 101.5&deg;F/38&deg;C) for more than 24 hours, or a fever with chills</li>
                                            <li class='list-content'>Severe shivering</li>
                                            <li class='list-content'>Dizziness or feeling light-headed</li>
                                            <li class='list-content'>Shortness of breath</li>
                                            <li class='list-content'>Confusion</li>
                                            <li class='list-content'>Weakness</li>
                                        </ul>
                                     </div>`
                    },
                    {
                        'title': 'Call your doctor immediately if you experience any signs of an allergic reaction:',
                        'content': `<ul class='list'>
                                        <li class='list-content'>Itching</li>
                                        <li class='list-content'>Hives</li>
                                        <li class='list-content'>Swelling of your face or hands</li>
                                        <li class='list-content'>Swelling or tingling in the mouth or throat</li>
                                        <li class='list-content'>Tightness in your chest</li>
                                    </ul>`
                    },
                    {
                        'title': '',
                        'content': `<img  src='./img/figures/talkingonphone_image.png' />`
                    }
                ]
            }
        ]
    },
    {
        'id': 'PageQuestions',
        'title': 'FAQ',
        'sections': [
            {
                'id': '1',
                'title': {
                    'small': 'FREQUENTLY ASKED',
                    'large': 'QUESTIONS'
                },
                'subSections': [
                    {
                        'title': '',
                        'content': `<ul>
                                        <li class='faq-list'><i class='icon-q'></i> Will a tuberculosis (PPD) test be positive after BCG treatment?</li>
                                        <li class='faq-list'><i class='icon-a'></i> Yes</li>
                                        <li class='faq-list'><i class='icon-q'></i> Is it OK to recieve BCG treatment if I test positive for tuberculosis (TB)?</li>
                                        <li class='faq-list'><i class='icon-a'></i> Yes</li>
                                        <li class='faq-list'><i class='icon-q'></i> Is it OK to be around pregnant women after I receive BCG treatment?</li>
                                        <li class='faq-list'><i class='icon-a'></i> Yes</li>
                                        <li class='faq-list'><i class='icon-q'></i> Can someone get tuberculosis if I forget to clean the toilet while i'm being treated with BCG?</li>
                                        <li class='faq-list'><i class='icon-a'></i> Yes</li>
                                        <li class='faq-list'><i class='icon-q'></i> Should I be worried if I have blood in my urine after treatment?</li>
                                        <li class='faq-list'><i class='icon-a'></i> You should contact your doctor if you have bright red blood, heavy bleeding, large blood clots, or trouble urinating.</li>
                                    </ul>`
                    },
                    {
                        'title': '',
                        'content': `<img src='./img/home/questions.png' />`
                    },
                    {
                        'title': '',
                        'content': `<ul>
                                        <li class='faq-list'><i class='icon-q'></i> Is it OK to go through BCG treatment if I am taking medicines that weaken the immune system(steroids)?</li>
                                        <li class='faq-list'><i class='icon-a'></i> No. Be sure to tell your doctor before treatment begins about all medications you are taking.</li>
                                        <li class='faq-list'><i class='icon-q'></i> Will it hurt when the catheter is inserted?</li>
                                        <li class='faq-list'><i class='icon-a'></i> It may be uncomfortable to have the catheter inserted. 
                                        Some physicians use topical numbing medication to ease your discomfort.</li>
                                    </ul>
                                    <p class='text-content'>If you have additional questions, please call the clinic.</p>`
                    },
                    {
                        'title': '',
                        'content': `<img  src='./img/figures/talkingonphone_image.png' />`
                    }
                ]
            }
        ]
    },
    {
        'id': 'HelpPage',
        'title': 'Help',
        'sections': [
            {
                'id': '1',
                'title': {
                    'small': '',
                    'large': 'HELP: Navigating the Application'
                },
                'subSections': [
                    {
                        'title': 'Narrator',
                        'content': `<div class='help-content-container'>
                                        <p class ='help-content'>Tapping on the narrow icon will give you more information on each page.</p>
                                        <img  src='./img/audio_btn.png' class='help-content-audiobtn' />
                                    </div>`
                    },
                    // {
                    //     'title': 'Buttons',
                    //     'content': `<div class='help-content-container'> 
                    //                     <p class ='help-content'>Tapping on 'See Timeline' button will take you to the timeline image.</p>
                    //                     <img  src='./img/300.png' class='page-help-image' />
                    //                 </div>`
                    // },
                    {
                        'title': 'Pages',
                        'content': `<div class='help-content-container'>   
                                        <p class ='help-content'>Swipe with your fingers to go to the next page or to return to the previous page.</p>
                                        <img  src='./img/300.png' class='page-help-image' />
                                    </div>`
                    },
                    // {
                    //     'title': '',
                    //     'content': `<div class='help-content-container'> 
                    //                     <p class ='help-content'>In the timeline image tapping on the hour button will highlight the                                 relevant information.</p>
                    //                     <img  src='./img/300.png' class='page-help-image' />
                    //                 </div>`
                    // },
                    {
                        'title': 'Video',
                        'content': `<div class='help-content-container'>
                                        <p class ='help-content'>Tap on the video icon to play the animation.</p>
                                        <img  src='./img/300.png' class='page-help-image' />
                                    </div>`
                    },
                    {
                        'title': '',
                        'content': `<div class='help-content-container'> 
                                        <p class ='help-content'>Tap on the bottom bar to take you to the desired page.</p>
                                        <img  src='./img/300.png' class='page-help-image' />
                                    </div>`
                    }
                ]
            }
        ]
    },
    {
        'id': 'AckPage',
        'title': 'Acknowledgement',
        'sections': [
            {
                'id': '1',
                'title': {
                    'small': '',
                    'large': ''
                },
                'subSections': [
                    {
                        'title': '',
                        'content': `<img  src='./img/ATLAS_LOGO_blue.png' class='ack-image'/>
                            <p>Applied Technology Laboratory for Advanced Surgery Program Acknowledges</p><p>the following for providing constructive feedback to the content of the app:</p>
                            <p>Nihal Mohamed, MD, PhD, Cheryl Lee, MD, Mark Soloway, MD,</p> <p>Donald Lamm, MD, Heather Goltz, PhD, Monica Smith, BA, Diane Quale, JD</p> <p>The BCAN (Bladder Cancer Advocacy Network) Scientific Advisory Board</p><p>Monetary Support from :</p>
                            <p>Arnold Zimmer and Family</p>
                            <p>Robert P. Huben Endowed Professorship of Urology Oncology</p>
                            <p>Roswell Park Alliance Foundation</p>`
                    }
                ]

            }
        ]
    }
];