// members.js
// Sensitive team member data is stored here with minimal exposure

const teamPembuatWeb = [
    {
      name: 'Akbar Pandu Ardiantama',
      role: 'Frontend Developer',
      description: 'Ahli dalam pengembangan antarmuka pengguna dengan fokus pada desain responsif dan interaktif.',
      skills: ['HTML', 'CSS', 'JavaScript', 'React'],
      projects: ['E-commerce Dashboard', 'Personal Portfolio']
       
    },
    {
      name: 'Moh Angga Ali Pradana',
      role: 'Backend Developer',
      description: 'Spesialis backend dengan pengalaman dalam merancang arsitektur sistem yang scalable.',
      skills: ['Node.js', 'Express', 'MongoDB', 'Python'],
      projects: ['Sistem Manajemen Inventaris', 'API untuk Aplikasi Mobile']
    },
    {
      name: 'Fahry Satria',
      role: 'UI/UX Designer',
      description: 'Desainer berpengalaman yang fokus pada menciptakan pengalaman pengguna yang intuitif.',
      skills: ['Figma', 'Adobe XD', 'Sketch', 'Wireframing'],
      projects: ['Desain Aplikasi Kesehatan', 'Redesign Website Perusahaan']
    }
  ];
  
  const teamReviewerWeb = [
    {
      name: 'Aula Ilyas',
      role: 'Tester',
      description: 'Ahli dalam pengujian manual dan otomatis dengan ketelitian tinggi.',
      skills: ['Selenium', 'JUnit', 'Test Planning', 'Bug Tracking'],
      projects: ['Pengujian Sistem E-Learning', 'Uji Penetrasi Keamanan']
    },
    {
      name: 'Yudhi Utomo',
      role: 'Quality Analyst',
      description: 'Profesional kualitas yang memastikan produk memenuhi standar tertinggi.',
      skills: ['Quality Management', 'JIRA', 'Test Case Design', 'Root Cause Analysis'],
      projects: ['Audit Kualitas Perangkat Lunak', 'Perbaikan Proses QA']
    },
    {
      name: 'Miftahul Huda',
      role: 'Documentation Specialist',
      description: 'Ahli dokumentasi yang mengubah kompleksitas teknis menjadi panduan yang jelas.',
      skills: ['Technical Writing', 'Markdown', 'API Documentation', 'Process Mapping'],
      projects: ['Dokumentasi Proyek Open Source', 'Pembuatan Panduan Pengguna']
    }
  ];

  const memberImages = {
    anggota1: "https://via.placeholder.com/150",
    anggota2: "https://via.placeholder.com/150",
    anggota3: "https://via.placeholder.com/150",
  };

  document.addEventListener("DOMContentLoaded", function () {
    const header = document.getElementById("main-header");
    header.style.background = "url('https://images.pexels.com/photos/129208/pexels-photo-129208.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1') no-repeat center center / cover";
    header.style.color = "#fff";
    header.style.padding = "100px 20px";
    header.style.textAlign = "center";
    header.style.marginTop = "60px";
    header.style.position = "relative";
    header.style.height = "400px";
  });

  
  