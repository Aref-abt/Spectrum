const fs = require('fs');
const galleryPath = 'public/images/gallery';
const files = fs.readdirSync(galleryPath).sort((a, b) => {
    const aNum = a.match(/anthonydaoudphotography-(\d+)\.jpg/);
    const bNum = b.match(/anthonydaoudphotography-(\d+)\.jpg/);
    if (aNum && bNum) return parseInt(aNum[1]) - parseInt(bNum[1]);
    if (a === 'anthonydaoudphotography.jpg') return -1;
    if (b === 'anthonydaoudphotography.jpg') return 1;
    return a.localeCompare(b, undefined, {numeric: true, sensitivity: 'base'});
});

const galleryData = [];

// Noble UAE
galleryData.push('{ image: "1n.jpg", title: "Noble UAE", category: "3D" }');
galleryData.push('{ image: "2n.jpg", title: "Noble UAE", category: "3D" }');
galleryData.push('{ image: "final Noble Gourmet_Photo - 2.jpg", title: "Noble UAE", category: "3D" }');
galleryData.push('{ image: "final Noble Gourmet_1 - Photo.jpg", title: "Noble UAE", category: "3D" }');
galleryData.push('{ image: "WhatsApp Image 2026-01-28 at 10.13.44 AM (2).jpeg", title: "3D Design", category: "3D" }');
galleryData.push('{ image: "WhatsApp Image 2026-01-28 at 10.13.45 AM (3).jpeg", title: "3D Design", category: "3D" }');
galleryData.push('{ image: "WhatsApp Image 2026-01-28 at 10.13.46 AM (5).jpeg", title: "3D Design", category: "3D" }');
galleryData.push('{ image: "WhatsApp Image 2026-01-28 at 10.15.51 AM.jpeg", title: "3D Design", category: "3D" }');

// Ranges
for (const f of files) {
    const match = f.match(/anthonydaoudphotography(?:-(\d+))?\.jpg/);
    if (match) {
        const num = match[1] ? parseInt(match[1]) : 1;
        let title = '';
        let category = 'Commercial';
        
        if (num >= 1 && num <= 27) title = 'Office';
        else if (num >= 28 && num <= 85) title = 'Funky Shop';
        else if (num >= 86 && num <= 126) title = 'Clinic By Aimee';
        else if (num >= 143 && num <= 158) title = 'Cone-Fetti';
        else if (num >= 159 && num <= 182) title = 'Beauty Salon Elie Gabriel';
        else if (num >= 185 && num <= 214) { title = 'Modern House'; category = 'Residential'; }
        else if (num >= 215 && num <= 226) { title = 'Walking Closet'; category = 'Residential'; }
        
        if (title) {
            galleryData.push(`{ image: "${f}", title: "${title}", category: "${category}" }`);
        }
    }
}

// Architecture
galleryData.push('{ image: "view 1-option 2.jpg", title: "Architecture", category: "Architecture" }');
galleryData.push('{ image: "view4-option 2.jpg", title: "Architecture", category: "Architecture" }');

// Residential leftovers & others
galleryData.push('{ image: "WhatsApp Image 2021-01-20 at 9.00.58 AM (1).jpeg", title: "Pent House", category: "Residential" }');
galleryData.push('{ image: "WhatsApp Image 2021-01-20 at 9.00.58 AM.jpeg", title: "Pent House", category: "Residential" }');
galleryData.push('{ image: "WhatsApp Image 2026-01-28 at 10.15.51 AM (1).jpeg", title: "Modern Black Kitchen Design", category: "Residential" }');
galleryData.push('{ image: "WhatsApp Image 2026-01-28 at 10.13.46 AM (3).jpeg", title: "Lobby Design", category: "Hospitality" }');
galleryData.push('{ image: "WhatsApp Image 2026-01-28 at 10.13.46 AM (6).jpeg", title: "Lobby Design", category: "Hospitality" }');
galleryData.push('{ image: "WhatsApp Image 2026-01-28 at 10.13.46 AM.jpeg", title: "Lobby Design", category: "Hospitality" }');

for (const f of files) {
  if (f.match(/WhatsApp.*10.13.4[3-6] AM.*(1).jpeg|project-[1-4].jpg/)) {
    galleryData.push(`{ image: "${f}", title: "Modern House", category: "Residential" }`);
  }
}

// Outdoor
for (const f of files) {
    if (f.match(/IMG_5836|IMG_5844|JC_|view 3-high res-mod 2.jpg|WhatsApp.*10.1[356].*AM.*.jpeg/)) {
        if (f.match(/IMG_5836|IMG_5844|WhatsApp.*10.13.43 AM\.jpeg|WhatsApp.*10.15.51 AM \(([234])\)\.jpeg|WhatsApp.*10.16.40 AM \(([12])\)\.jpeg/)) {
            galleryData.push(`{ image: "${f}", title: "Outdoor Landscape", category: "Outdoor" }`);
        } else if (f.match(/JC_|view 3-high res-mod 2.jpg/)) {
            galleryData.push(`{ image: "${f}", title: "Outdoor Seating", category: "Outdoor" }`);
        }
    }
}

galleryData.push('{ image: "Noble gourmet f_Photo - 2 (1).jpg", title: "Noble UAE", category: "Commercial" }');

fs.writeFileSync('temp_gallery_data.txt', '  ' + galleryData.join(',\n  '), 'utf8');
