var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _this = this;
var resumeBtn = document.getElementById('resumeBtn');
resumeBtn === null || resumeBtn === void 0 ? void 0 : resumeBtn.addEventListener('click', function () {
    var resumePath = '/assets/Mubashir_R.pdf';
    var link = document.createElement('a');
    link.href = resumePath;
    link.download = 'Mubashir_R_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
});
var contactForm = document.querySelector('.contact-form');
contactForm === null || contactForm === void 0 ? void 0 : contactForm.addEventListener('submit', function (e) { return __awaiter(_this, void 0, void 0, function () {
    var formData, templateParams, error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                e.preventDefault();
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                formData = new FormData(contactForm);
                templateParams = {
                    from_name: formData.get('name'),
                    from_email: formData.get('email'),
                    message: formData.get('message'),
                };
                window.emailjs.init("5bYRc7q9bdJ9kvGTD");
                return [4 /*yield*/, window.emailjs.send('service_5tqhozz', 'template_3cdtd84', templateParams)];
            case 2:
                _a.sent();
                alert('Thank you for your message! I will get back to you soon.');
                contactForm.reset();
                return [3 /*break*/, 4];
            case 3:
                error_1 = _a.sent();
                console.error('Error:', error_1);
                alert('Sorry, there was an error sending your message. Please try again.');
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); });
document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
        var _a;
        e.preventDefault();
        var href = e.currentTarget.getAttribute('href');
        if (href) {
            (_a = document.querySelector(href)) === null || _a === void 0 ? void 0 : _a.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});
var mobileMenuBtn = document.querySelector('.mobile-menu-btn');
var navContainer = document.querySelector('.nav-container');
var body = document.body;
var toggleMenu = function () {
    navContainer === null || navContainer === void 0 ? void 0 : navContainer.classList.toggle('active');
    mobileMenuBtn === null || mobileMenuBtn === void 0 ? void 0 : mobileMenuBtn.classList.toggle('active');
    body.style.overflow = (navContainer === null || navContainer === void 0 ? void 0 : navContainer.classList.contains('active')) ? 'hidden' : '';
};
mobileMenuBtn === null || mobileMenuBtn === void 0 ? void 0 : mobileMenuBtn.addEventListener('click', function (e) {
    e.stopPropagation();
    toggleMenu();
});
var navLinks = document.querySelectorAll('.nav-links a');
navLinks.forEach(function (link) {
    link.addEventListener('click', function () {
        if (navContainer === null || navContainer === void 0 ? void 0 : navContainer.classList.contains('active')) {
            toggleMenu();
        }
    });
});
document.addEventListener('click', function (e) {
    var target = e.target;
    if (!(navContainer === null || navContainer === void 0 ? void 0 : navContainer.contains(target)) &&
        !target.classList.contains('mobile-menu-btn') &&
        (navContainer === null || navContainer === void 0 ? void 0 : navContainer.classList.contains('active'))) {
        toggleMenu();
    }
});
document.addEventListener('touchmove', function (e) {
    if (navContainer === null || navContainer === void 0 ? void 0 : navContainer.classList.contains('active')) {
        e.preventDefault();
    }
}, { passive: false });
