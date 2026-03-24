import { TouchableOpacity, View } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { Link } from 'expo-router';

type HeaderButtonProps = {
  href: string;
  iconName: React.ComponentProps<typeof Feather>['name'];
};

const HeaderButton = (props: HeaderButtonProps) => {
  const { href, iconName } = props;
  return (
    <View style={{
      marginHorizontal: 10,
    }}>
      <Link href={href} asChild>
        <TouchableOpacity>
          <Feather name={iconName} size={24} color="black" />
        </TouchableOpacity>
      </Link>
    </View>
  )
}
export default HeaderButton;