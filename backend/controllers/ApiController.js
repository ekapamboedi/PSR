

module.exports = {
    viewLogin : async(req,res)=>{
        try{
            const alertMessage = req.flash('alertMessage');
            const alertStatus = req.flash('alertStatus');
            const alert = {message: alertMessage, status:alertStatus};
            if(req.session.user == null || req.session.user == undefined){
                res.render('index', {
                    alert,
                    title :"Staycation | Login",
                });
            }else{
                return res.redirect('/admin/dashboard');
            }            
        }catch(error){
             res.redirect('/admin/login');
        }
    },
    actionLogin : async(req,res)=>{
        try{
            const {username, password} = req.body;
            const user = await User.findOne({ username: username});
        if(!user){
                req.flash('alertMessage', 'User yang Anda Masukan Tidak Ada');
                req.flash('alertStatus', 'danger');
                return res.redirect('/admin/login');
           }
           const isPasswordMatch = await bcrypt.compare( password, user.password);
        if(!isPasswordMatch){
                req.flash('alertMessage', 'Password yang Anda Masukan Salah!');
                req.flash('alertStatus', 'danger');
                 return res.redirect('/admin/login');
            }
        req.session.user = {
            id: user.id,
            username: user.username
        }
            
        res.redirect('/admin/dashboard');

        }catch(error){
            // console.log(error);
            res.redirect('/admin/login');
        }
    },
    actionLogout : async(req,res)=>{
        req.session.destroy();
        res.redirect('/admin/login');
    },
    viewDashboard : async(req, res)=> {
        try{
            const member = await Member.find();
            const booking = await Booking.find();
            const item = await Item.find();
           
            res.render('admin/dashboard/view_dashboard',{
                title: "Staycation | Dashboard",
                user: req.session.user,
                member,
                booking,
                item
        });
        }catch(arror){
            res.redirect('/admin/dashboard/');
        }
            
    },
}