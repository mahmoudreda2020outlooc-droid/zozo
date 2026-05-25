import './style.css'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

// =============================================
// CONFIG
// =============================================
const EID_DATE = new Date('2026-05-27T00:00:00')
const IMAGES = [
    "WhatsApp Image 2026-05-25 at 10.24.05 PM.jpeg",
    "WhatsApp Image 2026-05-25 at 10.24.06 PM.jpeg",
    "WhatsApp Image 2026-05-25 at 10.24.07 PM (1).jpeg",
    "WhatsApp Image 2026-05-25 at 10.24.07 PM.jpeg",
    "WhatsApp Image 2026-05-25 at 10.24.08 PM.jpeg",
    "WhatsApp Image 2026-05-25 at 10.24.09 PM (1).jpeg",
    "WhatsApp Image 2026-05-25 at 10.24.09 PM (2).jpeg",
    "WhatsApp Image 2026-05-25 at 10.24.09 PM (3).jpeg",
    "WhatsApp Image 2026-05-25 at 10.24.09 PM (4).jpeg",
    "WhatsApp Image 2026-05-25 at 10.24.09 PM (5).jpeg",
    "WhatsApp Image 2026-05-25 at 10.24.09 PM.jpeg",
    "WhatsApp Image 2026-05-25 at 10.24.10 PM (1).jpeg",
    "WhatsApp Image 2026-05-25 at 10.24.10 PM (2).jpeg",
    "WhatsApp Image 2026-05-25 at 10.24.10 PM (3).jpeg",
    "WhatsApp Image 2026-05-25 at 10.24.10 PM (4).jpeg",
    "WhatsApp Image 2026-05-25 at 10.24.10 PM (5).jpeg",
    "WhatsApp Image 2026-05-25 at 10.24.10 PM.jpeg",
    "WhatsApp Image 2026-05-25 at 10.24.11 PM (1).jpeg",
    "WhatsApp Image 2026-05-25 at 10.24.11 PM (2).jpeg",
    "WhatsApp Image 2026-05-25 at 10.24.11 PM (3).jpeg",
    "WhatsApp Image 2026-05-25 at 10.24.11 PM (4).jpeg",
    "WhatsApp Image 2026-05-25 at 10.24.11 PM.jpeg"
]
const PHOTO_MESSAGES = [
    "بحبك 💖 ❤️",
    "ربنا يديم وجودك💖 ❤️",
    "كل سنة وانتى طيبة ينور عينى 💖 ❤️",
    "عيد اضحى مبارك لاحلى حد دخل حياتى 💖 ❤️",
    "وجودك في حياتي خلّى لكل يوم معنى أحلى ❤️",
    "كل مرة بشوفك فيها بحس إني كسبت الدنيا ❤️",
    "إنتِ راحتي وسط زحمة كل حاجة ❤️",
    "العيد السنة دي مختلف عشان إنتِ فيه ❤️",
    "مفـيش صورة تجمعنا إلا ووراها ذكرى بحبها ❤️",
    "أحب تفاصيلك الصغيرة قبل الكبيرة ❤️",
    "ضحكتك كفاية تغيّر يوم كامل ❤️",
    "كل مرة بحكي عنك بحكي بفخر ❤️",
    "يمكن الدنيا صعبة أوقات بس وإنتِ معايا كل حاجة بتهون ❤️",
    "إنتِ الشخص اللي بدعي يفضل معايا العمر كله ❤️",
    "وسط كل الناس قلبي اختارك إنتِ ❤️",
    "أحببتى وصحبتى واختى وبنتى ومراتى وكل حاجة ان شاء الله ❤️",
    "وجودك أمان عمري ما لقيته قبل كدة ❤️",
    "كل عيد وإنتِ أحلى أعيادي ❤️",
    "لو رجع بيا الوقت هاختارك برضو ❤️",
    "في عينيكي شعور يشبه البيت ❤️",
    "أنا محظوظ إنك بقيتي جزء من حياتي ❤️",
    "وأجمل حاجة في كل الصور إنك فيها ❤️"
]

// =============================================
// LOADER
// =============================================
const loader = document.getElementById('loader')
window.addEventListener('load', () => {
    setTimeout(() => loader.classList.add('hidden'), 2400)
})

// =============================================
// PARTICLE CANVAS
// =============================================
function initParticles() {
    const canvas = document.getElementById('particles')
    const ctx = canvas.getContext('2d')

    const resize = () => { canvas.width = window.innerWidth; canvas.height = window.innerHeight }
    resize()
    window.addEventListener('resize', resize)

    const EMOJIS = ['🐑', '🌙', '✨', '⭐', '🌸', '💛']

    class Particle {
        reset() {
            this.x = Math.random() * canvas.width
            this.y = canvas.height + 50
            this.size = Math.random() * 18 + 10
            this.vy = Math.random() * 0.5 + 0.15
            this.vx = (Math.random() - 0.5) * 0.4
            this.opacity = Math.random() * 0.35 + 0.08
            this.emoji = EMOJIS[Math.floor(Math.random() * EMOJIS.length)]
        }
        constructor() { this.reset(); this.y = Math.random() * canvas.height }
        update() {
            this.y -= this.vy; this.x += this.vx
            if (this.y < -50) this.reset()
        }
        draw() {
            ctx.globalAlpha = this.opacity
            ctx.font = `${this.size}px serif`
            ctx.fillText(this.emoji, this.x, this.y)
        }
    }

    const parts = Array.from({ length: 28 }, () => new Particle())
    const loop = () => { ctx.clearRect(0, 0, canvas.width, canvas.height); parts.forEach(p => { p.update(); p.draw() }); requestAnimationFrame(loop) }
    loop()
}
initParticles()

// =============================================
// CUSTOM CURSOR
// =============================================
const cursor = document.getElementById('customCursor')
const trail = document.getElementById('cursorTrail')
let mx = -200, my = -200

document.addEventListener('mousemove', e => {
    mx = e.clientX; my = e.clientY
    cursor.style.left = mx + 'px'
    cursor.style.top = my + 'px'
    setTimeout(() => {
        trail.style.left = mx + 'px'
        trail.style.top = my + 'px'
    }, 80)
})

// =============================================
// CLICK SPARKLE EFFECT
// =============================================
const SPARKLES = ['✨', '🌸', '💖', '⭐', '🌟']
document.addEventListener('click', e => {
    for (let i = 0; i < 5; i++) {
        const s = document.createElement('span')
        s.className = 'sparkle'
        s.innerText = SPARKLES[Math.floor(Math.random() * SPARKLES.length)]
        s.style.left = (e.clientX + (Math.random() - 0.5) * 40) + 'px'
        s.style.top = (e.clientY + (Math.random() - 0.5) * 40) + 'px'
        document.body.appendChild(s)
        setTimeout(() => s.remove(), 900)
    }
})

// =============================================
// TYPEWRITER NAME
// =============================================
function typewriter(el, text, speed = 120) {
    let i = 0
    el.textContent = ''
    const t = setInterval(() => {
        el.textContent += text[i++]
        if (i >= text.length) clearInterval(t)
    }, speed)
}
setTimeout(() => {
    const el = document.getElementById('typewriterName')
    if (el) typewriter(el, '♡ زوزو ♡', 140)
}, 2600)

// =============================================
// HERO ANIMATIONS
// =============================================
const tl = gsap.timeline({ delay: 2.6 })
tl.from('#mainSheep', { y: -100, opacity: 0, duration: 1.3, ease: 'elastic.out(1, 0.5)' })
    .from('.line1', { x: -50, opacity: 0, duration: 0.6, ease: 'power3.out' }, '-=0.4')
    .from('.line2', { scale: 0.4, opacity: 0, duration: 0.9, ease: 'back.out(2)' }, '-=0.3')
    .from('.line3', { x: 50, opacity: 0, duration: 0.6, ease: 'power3.out' }, '-=0.4')
    .from('.hero-sub', { y: 20, opacity: 0, duration: 0.6 }, '-=0.3')
    .from('.cta-button', { scale: 0, opacity: 0, duration: 0.6, ease: 'back.out(2)' }, '-=0.2')

// =============================================
// PARALLAX on MOUSEMOVE
// =============================================
const parallaxBg = document.getElementById('parallaxBg')
document.addEventListener('mousemove', e => {
    const rx = (e.clientX / window.innerWidth - 0.5) * 30
    const ry = (e.clientY / window.innerHeight - 0.5) * 20
    if (parallaxBg) parallaxBg.style.transform = `translate(${rx}px, ${ry}px)`
})

// =============================================
// SHEEP GAME (click 10 times)
// =============================================
let sheepClicks = 0
const sheepGameMsg = document.getElementById('sheepGameMsg')
const mainSheep = document.getElementById('mainSheep')

if (mainSheep) {
    mainSheep.addEventListener('click', e => {
        e.stopPropagation()
        sheepClicks++
        gsap.fromTo(mainSheep, { scale: 1 }, { scale: 1.25, duration: 0.15, yoyo: true, repeat: 1, ease: 'power2.out' })

        if (sheepClicks >= 10) {
            sheepGameMsg.classList.add('show')
            gsap.from(sheepGameMsg, { scale: 0, rotation: 15, duration: 0.7, ease: 'elastic.out(1, 0.5)' })
            setTimeout(() => sheepGameMsg.classList.remove('show'), 3500)
            sheepClicks = 0
        }
    })
}

// =============================================
// ENVELOPE INTERACTION
// =============================================
const envelope = document.getElementById('envelope')
const envWrapper = document.querySelector('.envelope-wrapper')

if (envWrapper) {
    envWrapper.addEventListener('click', () => {
        envelope.classList.toggle('open')

        if (envelope.classList.contains('open')) {
            launchConfetti()

            // Optional: Scroll more into view if needed
            setTimeout(() => {
                envelope.scrollIntoView({ behavior: 'smooth', block: 'center' })
            }, 500)
        }
    })
}

// =============================================
// COUNTDOWN TIMER
// =============================================
function updateCountdown() {
    const now = new Date()
    const diff = EID_DATE - now
    if (diff <= 0) {
        document.getElementById('countDays').textContent = '00'
        document.getElementById('countHours').textContent = '00'
        document.getElementById('countMins').textContent = '00'
        document.getElementById('countSecs').textContent = '00'
        return
    }
    const d = Math.floor(diff / 86400000)
    const h = Math.floor((diff % 86400000) / 3600000)
    const m = Math.floor((diff % 3600000) / 60000)
    const s = Math.floor((diff % 60000) / 1000)
    const pad = n => String(n).padStart(2, '0')
    document.getElementById('countDays').textContent = pad(d)
    document.getElementById('countHours').textContent = pad(h)
    document.getElementById('countMins').textContent = pad(m)
    document.getElementById('countSecs').textContent = pad(s)
}
updateCountdown()
setInterval(updateCountdown, 1000)

// =============================================
// SCROLL REVEAL
// =============================================
function initReveal() {
    const io = new IntersectionObserver(entries => {
        entries.forEach((e, i) => {
            if (e.isIntersecting) {
                setTimeout(() => e.target.classList.add('visible'), i * 80)
                io.unobserve(e.target)
            }
        })
    }, { threshold: 0.1 })
    document.querySelectorAll('.reveal').forEach(el => io.observe(el))
}
initReveal()

// =============================================
// GALLERY WITH HIDDEN MESSAGES
// =============================================
let currentIndex = 0
const lightbox = document.getElementById('lightbox')
const lbImg = document.getElementById('lbImg')
const photoOverlay = document.getElementById('photoMsgOverlay')
const photoMsgContent = document.getElementById('photoMsgContent')

function showPhotoMessage(i) {
    const msg = PHOTO_MESSAGES[i % PHOTO_MESSAGES.length]
    photoMsgContent.textContent = msg
    photoOverlay.classList.add('show')
    gsap.fromTo(photoMsgContent, { scale: 0.7, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.5, ease: 'back.out(2)' })
    setTimeout(() => {
        photoOverlay.classList.remove('show')
    }, 6000)
}

function buildGallery() {
    const grid = document.getElementById('galleryGrid')
    IMAGES.forEach((src, i) => {
        const item = document.createElement('div')
        item.className = 'gallery-item'
        const img = document.createElement('img')
        img.src = `/${encodeURIComponent(src)}`
        img.alt = `ذكرى ${i + 1}`
        img.loading = 'lazy'
        item.appendChild(img)

        item.addEventListener('click', () => {
            showPhotoMessage(i)
            setTimeout(() => {
                openLightbox(i)
            }, 2500) // Longer transition for better readability
        })
        grid.appendChild(item)
    })

    gsap.from('.gallery-item', {
        scrollTrigger: { trigger: '.gallery-grid', start: 'top 80%' },
        opacity: 0, scale: 0.8, y: 30,
        stagger: 0.06, duration: 0.6, ease: 'back.out(1.5)'
    })
}
buildGallery()

const lbCaption = document.getElementById('lbCaption')

function openLightbox(index) {
    currentIndex = index
    lbImg.src = `/${encodeURIComponent(IMAGES[index])}`
    lbCaption.textContent = PHOTO_MESSAGES[index % PHOTO_MESSAGES.length]

    // Hide the popup message if it is still showing
    photoOverlay.classList.remove('show')

    lightbox.classList.add('active')
    gsap.fromTo(lbImg, { scale: 0.8, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.4, ease: 'back.out(1.5)' })
    gsap.fromTo(lbCaption, { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5, delay: 0.2 })
}
document.getElementById('lbClose').addEventListener('click', () => lightbox.classList.remove('active'))
document.getElementById('lbNext').addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % IMAGES.length
    lbCaption.textContent = PHOTO_MESSAGES[currentIndex % PHOTO_MESSAGES.length]
    gsap.to(lbImg, {
        x: -30, opacity: 0, duration: 0.2, onComplete: () => {
            lbImg.src = `/${encodeURIComponent(IMAGES[currentIndex])}`
            gsap.fromTo(lbImg, { x: 30, opacity: 0 }, { x: 0, opacity: 1, duration: 0.3 })
            gsap.fromTo(lbCaption, { y: 10, opacity: 0 }, { y: 0, opacity: 1, duration: 0.3 })
        }
    })
})
document.getElementById('lbPrev').addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + IMAGES.length) % IMAGES.length
    lbCaption.textContent = PHOTO_MESSAGES[currentIndex % PHOTO_MESSAGES.length]
    gsap.to(lbImg, {
        x: 30, opacity: 0, duration: 0.2, onComplete: () => {
            lbImg.src = `/${encodeURIComponent(IMAGES[currentIndex])}`
            gsap.fromTo(lbImg, { x: -30, opacity: 0 }, { x: 0, opacity: 1, duration: 0.3 })
            gsap.fromTo(lbCaption, { y: 10, opacity: 0 }, { y: 0, opacity: 1, duration: 0.3 })
        }
    })
})
lightbox.addEventListener('click', e => { if (e.target === lightbox) lightbox.classList.remove('active') })

// =============================================
// GIFT BOX
// =============================================
let giftOpened = false
const giftWrapper = document.getElementById('giftWrapper')
const giftMessage = document.getElementById('giftMessage')

giftWrapper.addEventListener('click', () => {
    if (giftOpened) return
    giftOpened = true
    gsap.to('.gift-top', { y: -80, rotation: 25, opacity: 0, duration: 0.5, ease: 'back.in(2)' })
    gsap.to('#giftBox', { scale: 0, opacity: 0, duration: 0.4, delay: 0.4, ease: 'back.in(2)' })
    gsap.to('.gift-hint', { opacity: 0, duration: 0.2 })

    setTimeout(() => {
        giftMessage.style.display = 'block'
        launchConfetti()
        gsap.from(giftMessage, { scale: 0, rotation: 10, opacity: 0, duration: 0.9, ease: 'elastic.out(1, 0.5)' })

        // Play surprise music immediately
        const song = document.getElementById('surpriseSong')
        if (song) {
            song.play().catch(e => console.log('Audio wait for interaction:', e))
        }
    }, 850)
})

function launchConfetti() {
    const burst = document.getElementById('confettiBurst')
    const emojis = ['🌸', '🌼', '💖', '✨', '🌙']
    for (let i = 0; i < 35; i++) {
        const el = document.createElement('span')
        el.innerText = emojis[Math.floor(Math.random() * emojis.length)]
        el.style.cssText = `position:absolute;left:50%;top:50%;font-size:${Math.random() * 1.4 + 0.8}rem;pointer-events:none;`
        burst.appendChild(el)
        gsap.to(el, {
            x: (Math.random() - 0.5) * 450, y: (Math.random() - 0.5) * 320,
            rotation: Math.random() * 720, opacity: 0,
            duration: 1.4 + Math.random(), ease: 'power2.out',
            delay: Math.random() * 0.3, onComplete: () => el.remove()
        })
    }
}

// =============================================
// MUSIC (REMOVED)
// =============================================
