<template>
    <div class="badge-cont">
        <img class="image" :src="getBadgeImg()" />
        <h5 class="badge-title">{{badge.title}}</h5>
    </div>
</template>

<style lang="scss" scoped>
    .badge-cont{
        float:left;
        margin: 0.2rem;
        text-align: center;
        width: 70px;
        .image{
            max-height: 50px;
            margin: auto;
        }

        h5.badge-title{
            font-size:0.85em;
            font-weight: 700;
            margin: 0.2rem;
            opacity: 0.6;
            color:  #011638;
        }
    }
</style>


<script>

import Badge from "~/components/general/Badge";

export default {
  props:['badge'],
  components: {
    Badge
  },
  methods:{
      getBadgeImg(){
        const list = ['001-trophy.png','007-badge.png','013-gift.png','019-badge-6.png','025-reward-1.png','chevron.png','chevron-14.png','chevron-2.png','chevron-6.png','002-trophy-1.png','008-badge-1.png','014-diploma.png','020-crown.png','026-pennant.png','chevron-1.png','chevron-15.png','chevron-20.png','chevron-7.png','003-gold-medal.png','009-sheriff.png','015-podium.png','021-badge-7.png','027-reward-2.png','chevron-10.png','chevron-16.png','chevron-21.png','chevron-8.png','004-silver-medal.png','010-badge-2.png','016-badge-3.png','022-badge-8.png','028-trophy-3.png','chevron-11.png','chevron-17.png','chevron-3.png','chevron-9.png','005-bronze-medal.png','011-medal-1.png','017-badge-4.png','023-reward.png','029-gift-1.png','chevron-12.png','chevron-18.png','chevron-4.png','006-medal.png','012-medal-2.png','018-badge-5.png','024-trophy-2.png','030-throne.png','chevron-13.png','chevron-19.png','chevron-5.png']
        const badge = list[Math.floor(Math.random()*list.length)]
        return "/images/icons/badges/" + badge 
      }
  }
}

</script>