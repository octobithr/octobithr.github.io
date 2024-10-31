const courses = [
    {
        id: 'introduction',
        title: 'Uvod u programski jezik Python',
        shortDescription: 'Brzi uvod u programski jezik Python za apsolutne početnike.',
        fullDescription: 'Brzo ovladajte jednostavnim konceptima Python programiranja kroz praktične vježbe.',
        learningOutcomes: [
            'Jednostavni tipovi podataka',
            'Kolekcije podataka',
            'Uvjetne naredbe i petlje',
            'Funkcije i moduli',
            'Datoteke i iznimke'
        ],
        duration: '24 školska sata',
        level: 'Početnik',
        prerequisites: 'Nema preduvjeta',
        certificate: false,
        comparison: {
            'Osnove': 'Djelomično pokriva',
            'Napredne tehnike': 'Minimalno',
            'Praktični projekti': 'Minimalno, fokus na učenju',
            'Teorija': 'Srednje zastupljena',
            'Cijena': '€400.00'
        }
    },
    {
        id: 'fundamentals',
        title: 'Programski jezik Python',
        shortDescription: 'U potpunosti obladajte temeljima Python programiranja kroz praktične vježbe.',
        fullDescription: 'Sveobuhvatni uvod u Python programiranje. Idealan za početnike koji žele izgraditi čvrste temelje u razvoju softvera.',
        learningOutcomes: [
            'leksika, sintaksa i semantika Python programskog jezika',
            'Ostvariti interakciju između aplikacije i korisnika',
            'testiranje funkcija',
            'Proceduralno i objektno-orijentirano programiranje',
            'Testiranje, vizualizacija podataka i rad u mrežnoj domeni'
        ],
        duration: '40 školskih sati',
        level: 'Početnik',
        prerequisites: 'Nema preduvjeta',
        certificate: false,
        comparison: {
            'Osnove': 'Potpuno pokriva',
            'Napredne tehnike': 'Djelomično',
            'Praktični projekti': 'Minimalno, fokus na učenju',
            'Teorija': 'Visoko zastupljena',
            'Cijena': '€600.00'
        }
    },
    {
        id: 'advanced',
        title: 'Napredno programiranje u Pythonu',
        shortDescription: 'Napredni koncepti i tehnike programiranja u Pythonu.',
        fullDescription: 'Naučite napredne koncepte objektno orijentirane paradigme, izradu grafičkih korisničkih sučelja, rad s bazama podataka, testiranje, višedretvenost, višeprocesnost i mrežno programiranje u Pythonu.',
        learningOutcomes: [
            'Napredni koncepti objektno orijentirane paradigme',
            'Izrada grafičkih korisničkih sučelja (GUI)',
            'SQL i upravljanje bazama podataka',
            'Testiranje i debugiranje Python koda',
            'Višedretvenost i višeprocesnost',
            'Mrežno programiranje',
            'Napredno upravljanje resursima',
            'Dizajn i implementacija kompleksnih softverskih rješenja'
        ],
        duration: '24 školska sata',
        level: 'Napredni',
        prerequisites: 'Sadržaj edukacije Uvod u programski jezik Python',
        certificate: false,
        comparison: {
            'Osnove': 'Prošireno',
            'Napredne tehnike': 'Vrlo visoko',
            'Praktični projekti': 'Visoko',
            'Teorija': 'Visoko',
            'Cijena': '€500.00'
        }
    }
    // Add more courses here
];

function generateCourseCards() {
    const container = document.getElementById('course-container');
    container.innerHTML = courses.map(course => `
        <div class="course-card bg-white rounded-lg shadow-md overflow-hidden">
            <div class="p-6">
                <h3 class="text-xl font-semibold mb-2">${course.title}</h3>
                <p class="text-gray-600 mb-4">${course.shortDescription}</p>
                <button onclick="openCourseModal('${course.id}')" class="w-full bg-blue-900 text-white py-2 rounded hover:bg-blue-800 transition-colors">
                    Saznaj Više
                </button>
            </div>
        </div>
    `).join('');
}

function openCourseModal(courseId) {
    const course = courses.find(c => c.id === courseId);
    const modalContent = `
        <div class="bg-white rounded-lg max-w-2xl w-full mx-4 p-6">
            <div class="flex justify-between items-start mb-4">
                <h2 class="text-2xl font-bold">${course.title}</h2>
                <button onclick="closeModal()" class="text-gray-500 hover:text-gray-700">
                    <!-- Close icon -->
                </button>
            </div>
            <div class="space-y-4">
                <div>
                    <h3 class="font-semibold text-lg mb-2">Opis Tečaja</h3>
                    <p class="text-gray-600">${course.fullDescription}</p>
                </div>
                <div>
                    <h3 class="font-semibold text-lg mb-2">Što ćete naučiti</h3>
                    <ul class="list-disc list-inside text-gray-600 space-y-2">
                        ${course.learningOutcomes.map(outcome => `<li>${outcome}</li>`).join('')}
                    </ul>
                </div>
                <!-- Comparison Table -->
                <div>
                    <h3 class="font-semibold text-lg mb-2">Usporedba Tečaja</h3>
                    <table class="w-full border-collapse">
                        ${Object.entries(course.comparison).map(([key, value]) => `
                            <tr>
                                <td class="border p-2">${key}</td>
                                <td class="border p-2">${value}</td>
                            </tr>
                        `).join('')}
                    </table>
                </div>
                <div>
                    <h3 class="font-semibold text-lg mb-2">Detalji Tečaja</h3>
                    <div class="grid grid-cols-2 gap-4 text-gray-600">
                        <div>
                            <p class="font-medium">Trajanje:</p>
                            <p>${course.duration}</p>
                        </div>
                        <div>
                            <p class="font-medium">Razina:</p>
                            <p>${course.level}</p>
                        </div>
                        <div>
                            <p class="font-medium">Preduvjeti:</p>
                            <p>${course.prerequisites}</p>
                        </div>
                        <div>
                            <p class="font-medium">Potvrda:</p>
                            <p>${course.certificate ? 'Da' : 'Ne'}</p>
                        </div>
                    </div>
                </div>
                <div class="pt-4">
                    <button onclick="enrollCourse('${course.title}')" class="w-full bg-blue-900 text-white py-3 rounded-lg hover:bg-blue-800 transition-colors">
                        Pošalji email
                    </button>
                </div>
            </div>
        </div>
    `;

    // Create or update modal
    let modal = document.getElementById('course-modal');
    if (!modal) {
        modal = document.createElement('div');
        modal.id = 'course-modal';
        modal.className = 'fixed inset-0 bg-black bg-opacity-50 z-50 hidden flex items-center justify-center';
        document.body.appendChild(modal);
    }
    modal.innerHTML = modalContent;
    modal.classList.remove('hidden');
}

document.addEventListener('DOMContentLoaded', generateCourseCards);