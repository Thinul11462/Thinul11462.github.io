document.addEventListener('alpine:init', () => {
    Alpine.store('user',{
        booking:{
          hotel_branch:'',
          hotel_room:'',
          checkin_date:'',
          checkout_date:'',
          single_room:0,
          double_room:0,
          triple_room:0,
          adults:0,
          children:0,
          kids:0,
          Extra_bed:0,
          extra:'',
          promo_code:0,
          
        },
        profile:{
          title:'',
          f_name:'',
          s_name:'',
          email:'',
          address:'',
          city:'',
          zip_code:'',
          contact_number:'',
  
        },
        adventure:{
          adventure_type:'',
          duration:'',
          number_of_adults_local:'',
          number_of_children_local:'',
          number_of_adults_foreign:'',
          number_of_children_foreign:'',
          tour_guide:'',
  
  
        },
        price:[
          {
          type: 'Single  Room',
          price: 25000,
          },
          {
            type: 'Double Room',
            price: 35000,
          },
          {
            type: 'Triple Room',
            price: 45000,
          },
  
        ],
  
        updateUser(){
          localStorage.setItem(
          "user_booking",
          JSON.stringify(this.$store.user.booking)
          );
          localStorage.setItem(
            "user_profile",
            JSON.stringify(this.$store.user.profile)
          );
          localStorage.setItem(
            "user_adventure",
            JSON.stringify(this.$store.user.adventure)
          );
  
          
        },
        
        init(){
          this.booking =
          JSON.parse(localStorage.getItem("user_booking"))||this.booking;
          this.reservation =
          JSON.parse(localStorage.getItem("user_profile")) || this.profile;
          this.reservation =
          JSON.parse(localStorage.getItem("user_adventure")) || this.adventure;
  
        }
    })
  })
  