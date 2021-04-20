
import WelcomePage from './components/User/WelcomePage.vue'
import SignUp from './components/User/SignUp.vue'
import SignIn from './components/User/SignIn.vue'
import Survey from './components/User/Survey.vue'
import Survey1 from './components/User/Survey1.vue'
import Survey2 from './components/User/Survey2.vue'
import Dashboard from './components/User/Dashboard.vue'
import Information from './components/User/Information.vue'
import Challenges from './components/User/Challenges.vue'
import SocialMedia from './components/User/SocialMedia.vue'
import SocialMediaChallenge from './components/User/SocialMediaChallenge.vue'
import Submission from './components/User/LinkSubmission.vue'
import Verify from './components/User/VerifyPhoto.vue'
import Success from './components/User/SubmissionSuccess.vue'
import GreenShops from './components/User/greenshops.vue'
import Scoopcode from './components/User/Scoopcode.vue'
import registershop from './components/User/RegisterShop.vue'
import DashboardShop from './components/Shop/DashboardShop.vue'
import SignInShop from './components/User/SignInShop.vue'
import ScoopRewards from './components/User/ScoopRewards.vue'
import CongratPage from './components/User/congratpage.vue'
import ShopInfo from './components/Shop/ShopInfo.vue'
import EditInfo from './components/Shop/EditInfo.vue'
import EditImage from './components/Shop/EditImage.vue'
import VoucherVerify from './components/User/VoucherVerify.vue'
import VoucherLists from './components/Shop/VoucherLists.vue'
import AddEditVoucher from './components/Shop/AddEditVoucher.vue'
import Quiz from './components/User/Quiz.vue'
import Question from './components/User/Question.vue'
import Score from './components/User/Score.vue'
import EditProfile from './components/User/Editprofile.vue'
import EditAcc from './components/Shop/EditAcc.vue'
import RewardPage from './components/User/Rewardpage.vue'
import CombinedVoucher from './components/User/CombinedVoucher.vue'
import SpendVoucher from './components/User/SpendVoucher.vue'
import ans from './components/User/ans.vue'
import tut from './components/User/tut.vue'
import info from './components/User/info.vue'

export default [
  { path: '/', component: WelcomePage },
  { path: '/signup', component: SignUp, name: "signup" },
  { path: '/signin', component: SignIn, name: "signin" },
  { path: '/survey', component: Survey, name: "survey", props: true},
  { path: '/survey1', component: Survey1, name: "survey1", props: true},
  { path: '/survey2', component: Survey2, name: "survey2", props: true},
  { path: '/Dashboard', component: Dashboard, name: "Dashboard", props: true},
  { path: '/Information', component: Information, name: "information", props: true},
  { path: '/challenges', component: Challenges, name: "challenges", props: true},
  { path: '/socialmedia', component: SocialMedia, name: "socialmedia", props: true },
  { path: '/socialmediachallenge', component: SocialMediaChallenge, name: "socialmediachallenge", props: true },
  { path: '/submission', component: Submission, name: "submission", props: true },
  { path: '/verify', component: Verify, name: "verify", props: true },
  { path: '/success', component: Success, name: "success", props: true },
  {path: '/greenshops',component:GreenShops,name:"greenshops"},
  {path: '/scoopcode',component:Scoopcode,name:"scoopcode"},
  { path: '/registershop', component: registershop, name: "registershop", props: true },
  { path: '/dashboardShop', component: DashboardShop, name: "dashboardShop", props: true },
  { path: '/signinShop', component: SignInShop, name: "signinShop", props: true },
  { path:'/scooprewards',component:ScoopRewards, name:"scooprewards",props:true},
  { path:'/congratpage',component:CongratPage,name:'congratpage',props:true},
  { path: '/shopinfo', component: ShopInfo, name: "shopinfo", props: true },
  { path: '/editinfo', component: EditInfo, name: "editinfo", props: true },
  { path: '/editimage', component: EditImage, name: "editimage", props: true },
  { path:'/voucherverify', component:VoucherVerify, name:"voucherverify", props:true},
  { path:'/voucherlists', component:VoucherLists, name:"voucherlists", props:true},
  { path:'/addeditvoucher', component:AddEditVoucher, name:"addeditvoucher", props:true},
  { path:'/quiz', component:Quiz, name:"quiz", props:true},
  { path:'/question', component:Question, name:"question", props:true},
  { path:'/score', component:Score, name:"score", props:true},
  { path:'/editprofile', component:EditProfile, name:"editprofile", props:true},
  { path:'/editacc', component:EditAcc, name:"editacc", props:true},
  { path:'/rewardpage', component:RewardPage, name:"rewardpage", props:true},
  { path:'/combinedvoucher', component:CombinedVoucher, name:"combinedvoucher", props:true},
  { path:'/spendvoucher', component:SpendVoucher, name:"spendvoucher", props:true},
  { path:'/ans', component:ans, name:"ans", props:true},
  { path:'/tut', component:tut, name:"tut", props:true},
  { path:'/info', component:info, name:"info", props:true}
]