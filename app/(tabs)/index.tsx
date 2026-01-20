import SearchBar from "@/components/SearchBar";
import { icons } from "@/constants/icons";
import { images } from "@/constants/images";
import { fetchMovies } from "@/services/api";
import useFetch from "@/services/useFetch";
import { useRouter } from "expo-router";
import { ActivityIndicator, FlatList, Image, Text, View } from "react-native";

export default function Index() {
  const router = useRouter();

  const {
    data: movies,
    loading: moviesLoading,
    error: moviesError,
  } = useFetch(() =>
    fetchMovies({
      query: "",
    }),
  );

  const renderHeader = () => (
    <View>
      <Image source={icons.logo} className="h-12 w-12 mt-20 mb-5 mx-auto" />
      <SearchBar
        onPress={() => router.push("/search")}
        placeholders="Search for movies or tv shows"
      />
      <Text className="text-lg font-bold text-white mt-5">Latest Movies</Text>
    </View>
  );

  return (
    <View className="flex-1 bg-primary">
      <Image source={images.bg} className="absolute w-full z-0" />
      {moviesLoading ? (
        <ActivityIndicator
          size="large"
          color="#0000ff"
          className="mt-10 self-center"
        />
      ) : moviesError ? (
        <Text>Error: {moviesError}</Text>
      ) : (
        <FlatList
          data={movies}
          renderItem={({ item }) => (
            <Text className="text-white">{item.title}</Text>
          )}
          ListHeaderComponent={renderHeader}
          className="flex-1 px-5"
          contentContainerStyle={{ paddingBottom: 10 }}
        />
      )}
    </View>
  );
}
