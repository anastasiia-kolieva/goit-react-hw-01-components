export default function FriendListItem({ avatar, name, isOnline = false }) {
  return (
    <li class="item">
      <span class="status"></span>
      <img class="avatar" src={avatar} alt={name} width="48" />
      <p class={name}></p>
    </li>
  );
}
