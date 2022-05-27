@import '../../theme/index.less';

@%DashName%-prefix-cls: ~'@{view-prefix}-%DashName%';

.@{%DashName%-prefix-cls} {
   &-container {
      position: relative;
      color: @text-color;
   }
}